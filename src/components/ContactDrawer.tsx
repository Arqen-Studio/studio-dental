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

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    setStatus("idle");
    setError("");
  }, [open]);

  if (typeof document === "undefined") return null;

  const fieldClass =
    "w-full rounded-[8px] border border-neutral-300 bg-white px-3 py-2 text-[0.72rem] leading-normal text-ink outline-none transition placeholder:text-neutral-400 focus:border-brand focus:ring-2 focus:ring-brand/25";

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
          "absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out",
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
          "relative flex h-full w-[min(100%,26rem)] flex-col bg-white font-sans text-[0.72rem] leading-normal text-ink shadow-[-4px_0_28px_rgba(28,59,37,0.08)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] sm:w-[min(50vw,26rem)]",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div
          className={`flex shrink-0 items-start justify-between gap-3 pt-6 ${inset}`}
        >
          <h2
            id={titleId}
            className="max-w-[calc(100%-3.25rem)] pt-0.5 font-sans text-[1.05rem] font-bold leading-snug tracking-tight text-neutral-900 sm:text-[1.1rem]"
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
                className="text-[0.7rem] font-normal text-neutral-500"
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
                className="text-[0.7rem] font-normal text-neutral-500"
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
                className="text-[0.7rem] font-normal text-neutral-500"
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
                className="text-[0.7rem] font-normal text-neutral-500"
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
              <label className="flex cursor-pointer items-start gap-2 text-[0.7rem] leading-snug text-neutral-500">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-0.5 h-[0.75rem] w-[15px] shrink-0 rounded border-neutral-300 accent-brand"
                />
                <span>
                  {/* Unlinked until the clinic supplies a privacy policy:
                      this used to point at /contact-us, which is not one. */}
                  I have read and agree to the privacy policy of Studio Dental
                  Clinic.
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-2 text-[0.7rem] leading-snug text-neutral-500">
                <input
                  type="checkbox"
                  name="marketing"
                  className="mt-0.5 h-[0.75rem] w-[15px] shrink-0 rounded border-neutral-300 accent-brand"
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
              className="mt-2 inline-flex h-8 w-auto min-w-[5rem] shrink-0 items-center justify-center self-start rounded-full border border-transparent bg-brand px-5 text-[0.7rem] font-semibold text-ink shadow-none transition hover:bg-brand/90 hover:shadow-brand active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-brand"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Send"}
            </button>

            {status === "sent" && (
              <p
                role="status"
                className="rounded-[8px] bg-brand/15 px-3 py-2.5 text-[0.7rem] leading-snug text-ink"
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
                className="rounded-[8px] bg-[#FBEBD9] px-3 py-2.5 text-[0.7rem] leading-snug text-[#8A3D0B]"
              >
                {error}
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="rounded-[8px] bg-[#FBEBD9] px-3 py-2.5 text-[0.7rem] leading-snug text-[#8A3D0B]"
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
