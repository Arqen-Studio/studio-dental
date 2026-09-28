import SectionHeader from "../../components/SectionHeader";
import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { SERVICES_DATA } from "../../data/services";
import { CLINICS } from "../../data/clinics";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  return (
    <section id="contact" className="bg-surface-raised pb-10 pt-[calc(78px+2rem)] md:pb-16 md:pt-[calc(78px+3rem)]">
      <div className="mx-auto grid w-full max-w-[max(62rem,min(2500px,86vw))] min-[1900px]:max-w-[min(2500px,92vw)] grid-cols-1 gap-8 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeader
            level={1}
            eyebrow="Contact"
            title="Visit Studio Dental in Islamabad."
            lead="Studio Dental provides expert dental care with a focus on comfort, advanced technology, and affordable treatment."
          />

          <ul className="mt-8 grid gap-5">
            {CLINICS.map((clinic) => (
              <li key={clinic.id} className="flex items-start gap-4">
                <span
                  className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand"
                  aria-hidden="true"
                >
                  <MapPin size={18} strokeWidth={2} aria-hidden />
                </span>
                <div>
                  <strong className="block label text-ink">
                    {clinic.city}
                  </strong>
                  <p className="mt-0.5 body text-ink-muted">{clinic.address}</p>
                </div>
              </li>
            ))}
            <li className="flex items-start gap-4">
              <span
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand"
                aria-hidden="true"
              >
                <Mail size={18} strokeWidth={2} aria-hidden />
              </span>
              <div>
                <strong className="block label text-ink">Contact</strong>
                <p className="mt-0.5 body text-ink-muted">
                  {CLINICS.map((clinic) => clinic.phone).join("  |  ")}
                </p>
                <p className="mt-0.5 body text-ink-muted">
                  {CLINICS[0].email}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="rounded-lg border border-line bg-surface-raised p-6 shadow-1 md:p-9"
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
              className="small font-semibold text-ink"
            >
                Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
                placeholder="Your full name"
              required
              className="w-full rounded-sm border border-transparent bg-surface-sunken px-4 py-3 body outline-none transition focus:border-brand focus:bg-surface-raised focus:ring-4 focus:ring-brand/25"
            />
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label
              htmlFor="email"
              className="small font-semibold text-ink"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
                placeholder="you@example.com"
              required
              className="w-full rounded-sm border border-transparent bg-surface-sunken px-4 py-3 body outline-none transition focus:border-brand focus:bg-surface-raised focus:ring-4 focus:ring-brand/25"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="service"
                className="small font-semibold text-ink"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                defaultValue={SERVICES_DATA[0]?.title}
                className="w-full rounded-sm border border-transparent bg-surface-sunken px-4 py-3 body outline-none transition focus:border-brand focus:bg-surface-raised focus:ring-4 focus:ring-brand/25"
              >
                {SERVICES_DATA.map((service) => (
                  <option key={service.id}>{service.title}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="date"
                className="small font-semibold text-ink"
              >
                Preferred date
              </label>
              <input
                id="date"
                type="date"
                name="date"
                className="w-full rounded-sm border border-transparent bg-surface-sunken px-4 py-3 body outline-none transition focus:border-brand focus:bg-surface-raised focus:ring-4 focus:ring-brand/25"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label
              htmlFor="message"
              className="small font-semibold text-ink"
            >
              Tell us more (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Any additional details for your consultation?"
              className="min-h-[5.5rem] w-full resize-y rounded-sm border border-transparent bg-surface-sunken px-4 py-3 body outline-none transition placeholder:text-ink-muted focus:border-brand focus:bg-surface-raised focus:ring-4 focus:ring-brand/25"
            />
          </div>

          <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="sd-btn sd-btn--primary sd-btn--md mt-5"
          >
            <span>{status === "sending" ? "Sending…" : status === "sent" ? "Sent" : "Send request"}</span>
            <ArrowRight className="sd-icon" size={18} strokeWidth={1.75} aria-hidden />
          </button>

          {status === "sent" && (
            <p role="status" className="mt-5 rounded-lg bg-brand-soft px-5 py-4 body text-ink">
              Thank you. Your enquiry has reached the clinic and we will be in
              touch shortly. If it is urgent, please call{" "}
              <a href={`tel:${CLINICS[0].phone.replace(/\s/g, "")}`} className="font-semibold underline underline-offset-2">
                {CLINICS[0].phone}
              </a>.
            </p>
          )}

          {status === "error" && (
            <p role="alert" className="mt-5 rounded-lg bg-warning-soft px-5 py-4 body text-warning">
              {error} Please call us on{" "}
              <a href={`tel:${CLINICS[0].phone.replace(/\s/g, "")}`} className="font-semibold underline underline-offset-2">
                {CLINICS[0].phone}
              </a>{" "}
              and we will book you in.
            </p>
          )}

          <p className="mt-3 small text-ink-muted">
            By submitting, you agree to be contacted regarding your registration.
            We never share your data.
          </p>
        </form>
      </div>
    </section>
  );
}
