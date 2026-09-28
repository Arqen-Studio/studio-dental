/** The Studio Dental wordmark with the arch emblem (design system, Logo). */
export default function Logo({
  size = 30,
  tone = "brand",
  descriptor,
}: {
  /** Emblem height in px; the name scales with it. */
  size?: number;
  /** `brand` on Porcelain and White, `inverse` on Ink. */
  tone?: "brand" | "inverse";
  /** None in the site header; "Clinic · Islamabad" in the footer. */
  descriptor?: string;
}) {
  return (
    <span className={`sd-logo sd-logo--horizontal sd-logo--${tone}`} role="img" aria-label="Studio Dental">
      <svg
        className="sd-logo__emblem"
        width={(size * 56) / 64}
        height={size}
        viewBox="0 0 56 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M8 60V28a20 20 0 0 1 40 0v32" />
        <path d="M18 40c0-7 5-9 10-5c5-4 10-2 10 5c0 6-3 8-4 14c-.6 3.5-3 3.5-3.6 0L28 47l-2.4 7c-.6 3.5-3 3.5-3.6 0c-1-6-4-8-4-14z" />
      </svg>
      <span className="sd-logo__words">
        <span className="sd-logo__name" style={{ fontSize: Math.round(size * 0.73) }}>
          Studio Dental
        </span>
        {descriptor && (
          // The mark's descriptor is 0.34 × the name in the design system; kept at 13px or more.
          <span className="sd-logo__descriptor" style={{ fontSize: Math.max(13, Math.round(size * 0.25)) }}>
            {descriptor}
          </span>
        )}
      </span>
    </span>
  );
}
