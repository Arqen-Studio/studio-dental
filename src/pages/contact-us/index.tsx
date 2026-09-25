import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { SERVICES_DATA } from "../../data/services";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  return (
    <section id="contact" className="bg-white pb-10 pt-[calc(78px+2rem)] md:pb-16 md:pt-[calc(78px+3rem)]">
      <div className="mx-auto grid w-full page-shell grid-cols-1 gap-8 px-5 md:px-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-brand"
              aria-hidden="true"
            />
            Contacts
          </span>
          <h2 className="mt-3 text-balance">Visit Studio Dental in Islamabad.</h2>
          <p className="mt-4 max-w-[60ch] text-[1.05rem] text-muted">
            Studio Dental provides expert dental care with a focus on comfort,
            advanced technology, and affordable treatment.
          </p>

          <ul className="mt-8 grid gap-5">
            <li className="flex items-start gap-4">
              <span
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand"
                aria-hidden="true"
              >
                <MapPin size={18} strokeWidth={2} aria-hidden />
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">Address</strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">
                  1st Floor, Plaza No. 26, Main Iqbal Boulevard, Street 2, Sector A
                  DHA Phase II, Islamabad
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand"
                aria-hidden="true"
              >
                <MapPin size={18} strokeWidth={2} aria-hidden />
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">Address</strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">
                  Office #:7, 2nd Floor, Jinnah Super, F-7 Markaz, Islamabad
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand"
                aria-hidden="true"
              >
                <Mail size={18} strokeWidth={2} aria-hidden />
              </span>
              <div>
                <strong className="block text-[0.98rem] font-semibold text-ink">Contact</strong>
                <p className="mt-0.5 text-[0.92rem] text-muted">
                  0329 9961999 | 032935199999
                </p>
                <p className="mt-0.5 text-[0.92rem] text-muted">
                  thestudiodentalclinic@gmail.com
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="rounded-lg border border-black/10 bg-white p-6 shadow-soft-md md:p-9"
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
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[0.82rem] font-semibold tracking-wide text-ink2"
            >
                Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
                placeholder="Your full name"
              required
              className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/25"
            />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[0.82rem] font-semibold tracking-wide text-ink2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
                placeholder="you@example.com"
              required
              className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/25"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="service"
                className="text-[0.82rem] font-semibold tracking-wide text-ink2"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                defaultValue={SERVICES_DATA[0]?.title}
                className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/25"
              >
                {SERVICES_DATA.map((service) => (
                  <option key={service.id}>{service.title}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="date"
                className="text-[0.82rem] font-semibold tracking-wide text-ink2"
              >
                Preferred date
              </label>
              <input
                id="date"
                type="date"
                name="date"
                className="w-full rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/25"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[0.82rem] font-semibold tracking-wide text-ink2"
            >
              Tell us more (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Any additional details for your consultation?"
              className="min-h-[5.5rem] w-full resize-y rounded-sm border border-transparent bg-black/[0.04] px-4 py-3 text-[0.95rem] outline-none transition placeholder:text-black/40 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/25"
            />
          </div>

          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="mt-5 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-brand px-7 py-4 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand/90 hover:shadow-brand disabled:opacity-95 disabled:hover:translate-y-0"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Send request"}
            <span
              className="inline-flex h-[1.1rem] w-[22px] items-center justify-center rounded-full bg-black/10"
              aria-hidden="true"
            >
              <ArrowRight size={11} strokeWidth={2.5} className="text-ink" aria-hidden />
            </span>
          </button>

          {status === "sent" && (
            <p role="status" className="mt-5 rounded-xl bg-brand/15 px-5 py-4 text-[0.9rem] leading-relaxed text-ink">
              Thank you. Your enquiry has reached the clinic and we will be in
              touch shortly. If it is urgent, please call{" "}
              <a href="tel:03299961999" className="font-semibold underline underline-offset-2">
                0329 9961999
              </a>.
            </p>
          )}

          {status === "error" && (
            <p role="alert" className="mt-5 rounded-xl bg-[#FBEBD9] px-5 py-4 text-[0.9rem] leading-relaxed text-[#8A3D0B]">
              {error} Please call us on{" "}
              <a href="tel:03299961999" className="font-semibold underline underline-offset-2">
                0329 9961999
              </a>{" "}
              and we will book you in.
            </p>
          )}

          <p className="mt-3 text-[0.78rem] text-muted">
            By submitting, you agree to be contacted regarding your registration.
            We never share your data.
          </p>
        </form>
      </div>
    </section>
  );
}
