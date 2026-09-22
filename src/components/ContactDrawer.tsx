import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

/** Px-based sizing so the drawer stays compact vs global rem scale. */

export default function ContactDrawer({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

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
  }, [open]);

  if (typeof document === "undefined") return null;

  const fieldClass =
    "w-full rounded-[8px] border border-neutral-300 bg-white px-3 py-2 text-[13px] leading-normal text-ink outline-none transition placeholder:text-neutral-400 focus:border-skyBrand focus:ring-2 focus:ring-skyBrand/25";

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
          "relative flex h-full w-[min(100%,520px)] flex-col bg-white font-sans text-[13px] leading-normal text-ink shadow-[-4px_0_28px_rgba(15,27,36,0.08)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] sm:w-[min(50vw,520px)]",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div
          className={`flex shrink-0 items-start justify-between gap-3 pt-6 ${inset}`}
        >
          <h2
            id={titleId}
            className="max-w-[calc(100%-3.25rem)] pt-0.5 font-sans text-[20px] font-bold leading-snug tracking-tight text-neutral-900 sm:text-[21px]"
          >
            Let&apos;s get in touch
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="-mr-1 -mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink transition hover:text-skyBrand"
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
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="drawer-clinic"
                className="text-[12px] font-normal text-neutral-500"
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
                <option value="f7-markaz">F-7 Markaz: Near Shoe Planet</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="drawer-name"
                className="text-[12px] font-normal text-neutral-500"
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
                className="text-[12px] font-normal text-neutral-500"
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
                className="text-[12px] font-normal text-neutral-500"
              >
                Message
              </label>
              <textarea
                id="drawer-message"
                name="message"
                rows={4}
                required
                className={`${fieldClass} min-h-[96px] resize-y`}
              />
            </div>

            <div className="flex flex-col gap-2.5 pt-1">
              <label className="flex cursor-pointer items-start gap-2 text-[12px] leading-snug text-neutral-500">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-0.5 h-[15px] w-[15px] shrink-0 rounded border-neutral-300 accent-skyBrand"
                />
                <span>
                  I have read and agree to the{" "}
                  <Link
                    to="/contact-us"
                    className="font-medium text-skyBrand underline decoration-skyBrand/50 underline-offset-[2px] hover:text-ink hover:decoration-ink/40"
                    onClick={onClose}
                  >
                    privacy policy of Studio Dental Clinic
                  </Link>
                  .
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-2 text-[12px] leading-snug text-neutral-500">
                <input
                  type="checkbox"
                  name="marketing"
                  className="mt-0.5 h-[15px] w-[15px] shrink-0 rounded border-neutral-300 accent-skyBrand"
                />
                <span>
                  I agree that my data will be used for marketing purposes.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex h-8 w-auto min-w-[5rem] shrink-0 items-center justify-center self-start rounded-full border border-transparent bg-skyBrand px-5 text-[12px] font-semibold text-ink shadow-none transition hover:bg-skyBrand/90 hover:shadow-sky active:scale-[0.99]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}
