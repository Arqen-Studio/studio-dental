/**
 * Receives an enquiry from the website forms and emails it to the clinic.
 *
 * The forms post here, to this site's own domain, so the email provider can be
 * swapped without touching them. Runs on the edge runtime and calls the
 * provider over HTTP, so it carries no npm dependencies.
 *
 * Environment variables (set in the Vercel project, not in the repository):
 *   RESEND_API_KEY   required, from resend.com
 *   ENQUIRY_TO       optional, defaults to the clinic address below
 *   ENQUIRY_FROM     optional, must be an address on a domain verified with
 *                    the provider; defaults to Resend's shared sending address
 *   ENQUIRY_SHEET_URL optional, a Google Apps Script web app that appends the
 *                    enquiry to a spreadsheet. See docs/enquiry-spreadsheet.md.
 *                    Without it, email is the only record.
 */

export const config = { runtime: "edge" };

/**
 * The edge runtime provides process.env, but this file is compiled without the
 * Node type definitions, so reaching for a bare `process` does not type check.
 * Read it off globalThis instead: no @types/node, and no ambient declaration
 * that would clash if those types are ever present.
 */
const env = (
  globalThis as { process?: { env?: Record<string, string | undefined> } }
).process?.env ?? {};

const TO_DEFAULT = "thestudiodentalclinic@gmail.com";
const FROM_DEFAULT = "Studio Dental Website <onboarding@resend.dev>";

type Enquiry = {
  clinic?: string;
  service?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  /** The contact page asks for a preferred date; the shared form does not. */
  date?: string;
  /** Hidden field. Real people leave it empty; bots fill it in. */
  company?: string;
};

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let body: Enquiry;
  try {
    body = (await request.json()) as Enquiry;
  } catch {
    return json({ error: "Could not read the form." }, 400);
  }

  // Quietly accept anything that filled the hidden field, so bots get no signal.
  if (clean(body.company, 80)) return json({ ok: true }, 200);

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const clinic = clean(body.clinic, 120);
  const service = clean(body.service, 160);
  const message = clean(body.message, 4000);
  const date = clean(body.date, 40);

  // The two forms ask for different things: one takes a phone, the other an
  // email and a preferred date. Either is enough to reply to.
  if (!name || (!phone && !email)) {
    return json({ error: "Please give a name and either a phone number or an email address." }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    // Fail loudly rather than pretending the enquiry was sent.
    return json({ error: "The enquiry service is not configured yet." }, 503);
  }

  // Record it in the spreadsheet before emailing, so an enquiry still leaves a
  // trace if the mail provider is down or someone deletes the email. Best
  // effort on purpose: a spreadsheet that is unreachable must never stop a
  // patient's enquiry reaching the clinic.
  const sheetUrl = env.ENQUIRY_SHEET_URL;
  if (sheetUrl) {
    try {
      await fetch(sheetUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          receivedAt: new Date().toISOString(),
          name,
          phone,
          email,
          clinic,
          service,
          date,
          message,
        }),
      });
    } catch {
      // Swallowed deliberately. The email below is the channel that matters.
    }
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone || "not given"],
    ["Email", email || "not given"],
    ["Clinic", clinic || "not given"],
    ["Preferred date", date || "not given"],
    ["Treatment", service || "not given"],
    ["Message", message || "none"],
  ];

  const html = `
    <h2 style="font:600 18px system-ui;margin:0 0 16px">New website enquiry</h2>
    <table style="font:14px system-ui;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr>
               <td style="padding:6px 16px 6px 0;color:#5A6E7E;vertical-align:top">${label}</td>
               <td style="padding:6px 0"><strong>${escapeHtml(value)}</strong></td>
             </tr>`
        )
        .join("")}
    </table>
    <p style="font:13px system-ui;color:#5A6E7E;margin-top:20px">
      Sent from the Studio Dental website.
    </p>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env.ENQUIRY_FROM || FROM_DEFAULT,
      to: [env.ENQUIRY_TO || TO_DEFAULT],
      subject: `Website enquiry from ${name}`,
      html,
      // So a reply from the inbox goes straight back to the patient.
      ...(email ? { reply_to: email } : {}),
    }),
  });

  if (!response.ok) {
    return json({ error: "The enquiry could not be sent." }, 502);
  }

  return json({ ok: true }, 200);
}
