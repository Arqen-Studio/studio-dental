import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "sending" | "sent" | "invalid" | "error";

const CLINIC_PHONE = "0329 9961999";

/** Px-based sizing so the drawer stays compact vs global rem scale. */

export default function ContactDrawer({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Reset the form state each time the drawer opens (during render, not in an effect).
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setStatus("idle");
      setError("");
    }
  }

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (typeof document === "undefined") return null;

  const fieldClass =
    "w-full rounded-sm border border-line-strong bg-surface-raised px-3 py-2 small text-ink outline-none transition placeholder:text-ink-muted focus:border-brand focus:ring-2 focus:ring-brand/25";

  const inset = "px-10 sm:px-12";

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
        aria-label="Close contact form"
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
          "relative flex h-full w-[min(100%,26rem)] flex-col bg-surface-raised font-sans small text-ink shadow-3 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] sm:w-[min(50vw,26rem)]",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div
          className={`flex shrink-0 items-start justify-between gap-3 pt-6 ${inset}`}
        >
          <h2
            id={titleId}
            className="max-w-[calc(100%-3.25rem)] pt-0.5 h4 text-ink"
          >
            Let&apos;s get in touch
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="-mr-1 -mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink transition hover:text-brand"
            aria-label="Close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="[stroke-width:2.25] [vector-effect:non-scaling-stroke]"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div
          className={`min-h-0 flex-1 overflow-y-auto overscroll-contain pb-10 pt-3 ${inset}`}
        >
          <form
            className="flex max-w-full flex-col gap-3.5"
            noValidate
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

              // The form carries noValidate so the browser does not interrupt
              // with its own bubbles, which means these are checked here.
              if (!String(data.name || "").trim()) {
                setError("Please tell us your name.");
                setStatus("invalid");
                return;
              }
              if (!String(data.email || "").trim()) {
                setError("Please give an email address so we can reply.");
                setStatus("invalid");
                return;
              }
              if (!data.privacy) {
                setError("Please agree to the privacy policy before sending.");
                setStatus("invalid");
                return;
              }

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
                  throw new Error(body.error || "The enquiry could not be sent.");
                }
                form.reset();
                setStatus("sent");
              } catch (err) {
                // Covers a failed request and a network drop alike: either way
                // the enquiry did not arrive, and saying so is the point.
                setError(
                  err instanceof Error && err.message
                    ? err.message
                    : "The enquiry could not be sent.",
                );
                setStatus("error");
              }
            }}
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="drawer-clinic"
                className="small font-normal text-ink-muted"
              >
                Choose a clinic
              </label>
              <select
                id="drawer-clinic"
                name="clinic"
                required
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Select location
                </option>
                <option value="dha-phase-ii">
                  DHA Phase II: Plaza No. 26, Main Iqbal Boulevard
                </option>
                <option value="f7-markaz">F-7 Markaz: Jinnah Super</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="drawer-name"
                className="small font-normal text-ink-muted"
              >
                Your name
              </label>
              <input
                id="drawer-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="drawer-email"
                className="small font-normal text-ink-muted"
              >
                Your email
              </label>
              <input
                id="drawer-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="drawer-message"
                className="small font-normal text-ink-muted"
              >
                Message
              </label>
              <textarea
                id="drawer-message"
                name="message"
                rows={4}
                required
                className={`${fieldClass} min-h-[4.8rem] resize-y`}
              />
            </div>

            <div className="flex flex-col gap-2.5 pt-1">
              <label className="flex cursor-pointer items-start gap-2 small text-ink-muted">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-0.5 h-[0.75rem] w-[15px] shrink-0 rounded-sm border-line-strong accent-brand"
                />
                <span>
                  {/* Unlinked until the clinic supplies a privacy policy:
                      this used to point at /contact-us, which is not one. */}
                  I have read and agree to the privacy policy of Studio Dental
                  Clinic.
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-2 small text-ink-muted">
                <input
                  type="checkbox"
                  name="marketing"
                  className="mt-0.5 h-[0.75rem] w-[15px] shrink-0 rounded-sm border-line-strong accent-brand"
                />
                <span>
                  I agree that my data will be used for marketing purposes.
                </span>
              </label>
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
              className="mt-2 inline-flex h-8 w-auto min-w-[5rem] shrink-0 items-center justify-center self-start rounded-full border border-transparent bg-brand px-5 small font-semibold text-on-brand shadow-none transition hover:bg-brand-hover hover:shadow-2 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-brand"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Send"}
            </button>

            {status === "sent" && (
              <p
                role="status"
                className="rounded-sm bg-brand-soft px-3 py-2.5 small text-ink"
              >
                Thank you. Your enquiry has reached the clinic and we will be in
                touch shortly. If it is urgent, please call{" "}
                <a href="tel:03299961999" className="font-semibold underline underline-offset-2">
                  {CLINIC_PHONE}
                </a>
                .
              </p>
            )}

            {status === "invalid" && (
              <p
                role="alert"
                className="rounded-sm bg-warning-soft px-3 py-2.5 small text-warning"
              >
                {error}
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="rounded-sm bg-warning-soft px-3 py-2.5 small text-warning"
              >
                {error} Please call us on{" "}
                <a href="tel:03299961999" className="font-semibold underline underline-offset-2">
                  {CLINIC_PHONE}
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
