import type { ReactNode } from "react";

/** Opens a section: eyebrow, one heading, optional lead and action (design system, SectionHeader). */
export default function SectionHeader({
  eyebrow,
  title,
  lead,
  action,
  level = 2,
  id,
  align = "start",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  action?: ReactNode;
  /** One h1 per page. */
  level?: 1 | 2 | 3;
  id?: string;
  /** `center` only for a short closing call-to-action band. */
  align?: "start" | "center";
  className?: string;
}) {
  const Heading = `h${level}` as const;
  return (
    <header className={`sd-section-header sd-section-header--${align} ${className}`}>
      <div className="sd-section-header__text">
        <p className="sd-eyebrow">{eyebrow}</p>
        <Heading id={id} className={`sd-section-header__title h${level}`}>
          {title}
        </Heading>
        {lead && <p className="sd-section-header__lead lead">{lead}</p>}
      </div>
      {action && <div className="sd-section-header__action">{action}</div>}
    </header>
  );
}
