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
 */

export const config = { runtime: "edge" };

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fail loudly rather than pretending the enquiry was sent.
    return json({ error: "The enquiry service is not configured yet." }, 503);
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
      from: process.env.ENQUIRY_FROM || FROM_DEFAULT,
      to: [process.env.ENQUIRY_TO || TO_DEFAULT],
      subject: `Website enquiry from ${name}`,
      html,
      // So a reply from the inbox goes straight back to the patient.
      ...(email ? { reply_to: email } : {}),
    }),
  });

  if (!response.ok) {
    return json({ error: "The enquiry could not be sent. Please call us instead." }, 502);
  }

  return json({ ok: true }, 200);
}
