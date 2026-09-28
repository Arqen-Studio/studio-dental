import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ClinicCard from "../../components/ClinicCard";
import { Field } from "../../components/Field";
import SectionHeader from "../../components/SectionHeader";
import { CLINICS, MAIN_PHONE, telHref } from "../../data/clinics";
import { SERVICES_DATA } from "../../data/services";
import { focusFirstError, isEmail, postEnquiry } from "../../lib/enquiry";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "phone" | "email", string>>;

/** A booking request: the clinic calls back to agree a time. */
function validate(data: Record<string, string>): Errors {
  const errors: Errors = {};
  if (!data.name?.trim()) errors.name = "Enter your name.";
  if (!data.phone?.trim()) errors.phone = "Enter a phone number so the clinic can call you to agree a time.";
  if (data.email?.trim() && !isEmail(data.email)) errors.email = "Enter an email address like name@example.com";
  return errors;
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  return (
    <>
      <section id="contact" className="bg-surface px-5 pb-12 pt-[calc(var(--nav-h)+3rem)] md:px-8 md:pb-16">
        <div className="mx-auto w-full page-shell">
          <SectionHeader
            level={1}
            eyebrow="Contact"
            title="Visit Studio Dental in Islamabad."
            lead="Studio Dental provides expert dental care with a focus on comfort, advanced technology, and affordable treatment."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
            {CLINICS.map((clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-sunken px-5 py-16 md:px-8 md:py-20" aria-labelledby="booking-heading">
        <div className="mx-auto w-full max-w-[var(--container-text)]">
          <SectionHeader
            id="booking-heading"
            eyebrow="Booking"
            title="Request a consultation"
            lead="Send a request and the clinic will call you to agree a time."
          />

          <form
            className="mt-8 flex flex-col gap-5 rounded-md border border-line bg-surface-raised p-6 md:p-8"
            noValidate
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
              const found = validate(data);
              setErrors(found);
              if (Object.keys(found).length) return focusFirstError(form, found);

              setStatus("sending");
              setError("");
              try {
                await postEnquiry(data);
                setStatus("sent");
              } catch (err) {
                setError(err instanceof Error ? err.message : "The enquiry could not be sent.");
                setStatus("error");
              }
            }}
          >
            <Field id="contact-name" label="Full name" error={errors.name}>
              <input type="text" name="name" autoComplete="name" />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                id="contact-phone"
                label="Phone"
                hint="We will call or WhatsApp to confirm a time."
                error={errors.phone}
              >
                <input type="tel" name="phone" autoComplete="tel" />
              </Field>
              <Field id="contact-email" label="Email" optional error={errors.email}>
                <input type="email" name="email" autoComplete="email" />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field id="contact-clinic" label="Clinic" optional>
                <select name="clinic" defaultValue="">
                  <option value="">No preference</option>
                  {CLINICS.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="contact-service" label="Treatment" optional>
                <select name="service" defaultValue="">
                  <option value="">Not sure yet</option>
                  {SERVICES_DATA.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field id="contact-date" label="Preferred date" optional>
              <input type="date" name="date" />
            </Field>

            <Field id="contact-message" label="What would you like help with?" optional>
              <textarea name="message" rows={4} />
            </Field>

            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="sd-btn sd-btn--primary sd-btn--md self-start"
            >
              <span>{status === "sending" ? "Sending…" : status === "sent" ? "Sent" : "Send enquiry"}</span>
              <ArrowRight className="sd-icon" size={18} strokeWidth={1.75} aria-hidden />
            </button>

            {status === "sent" && (
              <p role="status" className="rounded-md bg-brand-soft px-5 py-4 body text-ink">
                Thank you, we have your request. This is not a confirmed booking yet:
                the clinic will call you to agree a time. If it is urgent, please call{" "}
                <a href={telHref(MAIN_PHONE)} className="font-semibold underline underline-offset-2">
                  {MAIN_PHONE}
                </a>
                .
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="rounded-md bg-warning-soft px-5 py-4 body text-warning">
                {error} Please call us on{" "}
                <a href={telHref(MAIN_PHONE)} className="font-semibold underline underline-offset-2">
                  {MAIN_PHONE}
                </a>{" "}
                and we will book you in.
              </p>
            )}

            <p className="small text-ink-muted">
              By submitting, you agree to be contacted regarding your registration.
              We never share your data.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
