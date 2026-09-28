import { useState } from "react";
import { CLINICS, MAIN_PHONE, telHref } from "../data/clinics";
import { focusFirstError, isEmail, postEnquiry } from "../lib/enquiry";
import { Checkbox, Field } from "./Field";
import SectionHeader from "./SectionHeader";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "phone" | "email", string>>;

/** The rules /api/enquiry applies: a name, and a phone number or an email. */
function validate(data: Record<string, string>): Errors {
  const errors: Errors = {};
  if (!data.name?.trim()) errors.name = "Enter your name.";
  if (!data.phone?.trim() && !data.email?.trim())
    errors.phone = "Enter a phone number or an email address so the clinic can reply.";
  if (data.email?.trim() && !isEmail(data.email))
    errors.email = "Enter an email address like name@example.com";
  return errors;
}

export default function ContactFormSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Errors>({});

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
      <div className="flex flex-col justify-center bg-surface-sunken px-5 py-16 md:px-12 lg:px-16">
        <div className="w-full max-w-[32rem]">
          <SectionHeader eyebrow="Contact" title="Let's get in touch" />

          <form
            className="mt-8 flex flex-col gap-5"
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
            <Field id="cf-clinic" label="Clinic" optional>
              <select name="clinic" defaultValue="">
                <option value="">No preference</option>
                {CLINICS.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field id="cf-name" label="Full name" error={errors.name}>
              <input type="text" name="name" autoComplete="name" />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                id="cf-phone"
                label="Phone"
                hint="A phone number, an email address, or both."
                error={errors.phone}
              >
                <input type="tel" name="phone" autoComplete="tel" />
              </Field>
              <Field id="cf-email" label="Email" error={errors.email}>
                <input type="email" name="email" autoComplete="email" />
              </Field>
            </div>

            <Field id="cf-message" label="What would you like help with?" optional>
              <textarea name="message" rows={4} />
            </Field>

            <div className="flex flex-col gap-3">
              {/* Unlinked until the clinic supplies a privacy policy. */}
              <Checkbox
                id="cf-privacy"
                name="privacy"
                label="I have read and agree to the privacy policy of Studio Dental"
              />
              <Checkbox
                id="cf-marketing"
                name="marketing"
                label="I agree that my data will be used for marketing purposes."
              />
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
              className="sd-btn sd-btn--primary sd-btn--md self-start"
            >
              {status === "sending" ? "Sending…" : status === "sent" ? "Sent" : "Send enquiry"}
            </button>

            {status === "sent" && (
              <p role="status" className="rounded-md bg-brand-soft px-5 py-4 body text-ink">
                Thank you. Your enquiry has reached the clinic and we will be in
                touch shortly. If it is urgent, please call{" "}
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
          </form>
        </div>
      </div>
    </section>
  );
}
