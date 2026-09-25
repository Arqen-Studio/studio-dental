import { useState } from "react";
import { CLINICS } from "../data/clinics";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactFormSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  return (
    <section className="reveal grid lg:grid-cols-2">
      {/* Left, clinic interior photo */}
      <div className="relative min-h-[19rem] lg:min-h-full">
        <img
          src="/images/clinic/interior-c.jpg"
          alt="The reception area at Studio Dental"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* Right, form */}
      <div className="flex flex-col justify-center bg-[#F4F7F2] px-8 py-16 md:px-12 lg:px-16">
        <div className="w-full max-w-[29rem]">
          <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight text-ink">
            Let's get in touch
          </h2>

          <form
            className="mt-8 flex flex-col gap-5"
            noValidate
            onSubmit={async (e) => {
              e.preventDefault();
              const data = Object.fromEntries(new FormData(e.currentTarget));
              setStatus("sending");
              setError("");
              try {
                const res = await fetch("/api/enquiry", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify(data),
                });
                if (!res.ok) {
                  const body = await res.json().catch(() => ({}));
                  throw new Error(body.error || "Something went wrong.");
                }
                setStatus("sent");
              } catch (err) {
                setError(err instanceof Error ? err.message : "Something went wrong.");
                setStatus("error");
              }
            }}
          >
            {/* Choose a clinic */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cf-clinic" className="text-[0.82rem] text-ink2">
                Choose a clinic
              </label>
              <div className="relative">
                <select
                  id="cf-clinic"
                  name="clinic"
                  defaultValue=""
                  className="w-full appearance-none rounded-sm border border-black/15 bg-[#F4F7F2] px-4 py-3 text-[0.95rem] text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/25"
                >
                  <option value="" disabled />
                  {CLINICS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.city}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Name + Phone */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-name" className="text-[0.82rem] text-ink2">
                  Your name
                </label>
                <input
                  id="cf-name"
                  type="text"
                  name="name"
                  className="rounded-sm border border-black/15 px-4 py-3 text-[0.95rem] outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/25"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-phone" className="text-[0.82rem] text-ink2">
                  Your phone
                </label>
                <input
                  id="cf-phone"
                  type="tel"
                  name="phone"
                  className="rounded-sm border border-black/15 px-4 py-3 text-[0.95rem] outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/25"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cf-email" className="text-[0.82rem] text-ink2">
                Your email
              </label>
              <input
                id="cf-email"
                type="email"
                name="email"
                className="rounded-sm border border-black/15 px-4 py-3 text-[0.95rem] outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/25"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cf-message" className="text-[0.82rem] text-ink2">
                Message
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={4}
                className="min-h-[5.5rem] resize-y rounded-sm border border-black/15 px-4 py-3 text-[0.95rem] outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/25"
              />
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-3">
              <label className="flex cursor-pointer items-start gap-3 text-[0.82rem] text-ink2">
                <input type="checkbox" name="privacy" className="mt-0.5 h-4 w-4 flex-shrink-0 accent-ink" />
                <span>
                  {/* Unlinked until the clinic supplies a privacy policy:
                      this used to point at /contact-us, which is not one. */}
                  I have read and agree to the privacy policy of Studio Dental
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 text-[0.82rem] text-ink2">
                <input type="checkbox" name="marketing" className="mt-0.5 h-4 w-4 flex-shrink-0 accent-ink" />
                <span>I agree that my data will be used for marketing purposes.</span>
              </label>
            </div>

            {/* Hidden from people, tempting to bots. */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand px-8 py-4 text-[0.95rem] font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-brand/85 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Send"}
            </button>

            {status === "sent" && (
              <p role="status" className="rounded-xl bg-brand/15 px-5 py-4 text-[0.9rem] leading-relaxed text-ink">
                Thank you. Your enquiry has reached the clinic and we will be in
                touch shortly. If it is urgent, please call{" "}
                <a href="tel:03299961999" className="font-semibold underline underline-offset-2">
                  0329 9961999
                </a>.
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="rounded-xl bg-[#FBEBD9] px-5 py-4 text-[0.9rem] leading-relaxed text-[#8A3D0B]">
                {error} Please call us on{" "}
                <a href="tel:03299961999" className="font-semibold underline underline-offset-2">
                  0329 9961999
                </a>{" "}
                and we will book you in.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
