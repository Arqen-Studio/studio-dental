import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { CLINICS, MAIN_PHONE, telHref } from "../data/clinics";
import { focusFirstError, isEmail, postEnquiry } from "../lib/enquiry";
import { Checkbox, Field } from "./Field";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "phone" | "email" | "privacy", string>>;

function validate(data: Record<string, string>): Errors {
  const errors: Errors = {};
  if (!data.name?.trim()) errors.name = "Enter your name.";
  if (!data.phone?.trim()) errors.phone = "Enter a phone number so the clinic can call you to agree a time.";
  if (data.email?.trim() && !isEmail(data.email)) errors.email = "Enter an email address like name@example.com";
  if (!data.privacy) errors.privacy = "Tick the box to agree to the privacy policy before sending.";
  return errors;
}

/** The booking drawer. One instance, opened from the header and the floating Book button. */
export default function ContactDrawer({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reset the form state each time the drawer opens (during render, not in an effect).
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setStatus("idle");
      setError("");
      setErrors({});
    }
  }

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className={[
        "fixed inset-0 z-[200] flex justify-end",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={[
          "absolute inset-0 bg-scrim backdrop-blur-[2px] transition-opacity duration-300 ease-out",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
        aria-label="Close the booking form"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={[
          "relative flex h-full w-[min(100%,28rem)] flex-col bg-surface-raised text-ink shadow-3 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex shrink-0 items-start justify-between gap-3 px-6 pt-6 sm:px-8">
          <h2 id={titleId} className="h3 text-ink">
            Book a consultation
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="-mr-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink transition hover:bg-surface-sunken"
            aria-label="Close"
          >
            <X size={22} strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-10 pt-4 sm:px-8">
          <form
            className="flex flex-col gap-5"
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
                form.reset();
                setStatus("sent");
              } catch (err) {
                // Covers a failed request and a network drop alike: either way
                // the enquiry did not arrive, and saying so is the point.
                setError(err instanceof Error && err.message ? err.message : "The enquiry could not be sent.");
                setStatus("error");
              }
            }}
          >
            <Field id="drawer-clinic" label="Clinic" optional>
              <select name="clinic" defaultValue="">
                <option value="">No preference</option>
                {CLINICS.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </Field>

            <Field id="drawer-name" label="Full name" error={errors.name}>
              <input type="text" name="name" autoComplete="name" />
            </Field>

            <Field
              id="drawer-phone"
              label="Phone"
              hint="We will call or WhatsApp to confirm a time."
              error={errors.phone}
            >
              <input type="tel" name="phone" autoComplete="tel" />
            </Field>

            <Field id="drawer-email" label="Email" optional error={errors.email}>
              <input type="email" name="email" autoComplete="email" />
            </Field>

            <Field id="drawer-message" label="What would you like help with?" optional>
              <textarea name="message" rows={4} />
            </Field>

            <div className="flex flex-col gap-3">
              {/* Unlinked until the clinic supplies a privacy policy. */}
              <Checkbox
                id="drawer-privacy"
                name="privacy"
                label="I have read and agree to the privacy policy of Studio Dental Clinic."
                error={errors.privacy}
              />
              <Checkbox
                id="drawer-marketing"
                name="marketing"
                label="I agree that my data will be used for marketing purposes."
              />
            </div>

            {/* Hidden from people, filled in by bots. The endpoint accepts and
                discards anything that carries it. */}
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
              <p role="status" className="rounded-md bg-brand-soft px-4 py-3 small text-ink">
                Thank you, we have your request. This is not a confirmed booking yet:
                the clinic will call you to agree a time. If it is urgent, please call{" "}
                <a href={telHref(MAIN_PHONE)} className="font-semibold underline underline-offset-2">
                  {MAIN_PHONE}
                </a>
                .
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="rounded-md bg-warning-soft px-4 py-3 small text-warning">
                {error} Please call us on{" "}
                <a href={telHref(MAIN_PHONE)} className="font-semibold underline underline-offset-2">
                  {MAIN_PHONE}
                </a>{" "}
                if it is urgent.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}
