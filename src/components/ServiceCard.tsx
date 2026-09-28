import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/** A treatment summary linking to its page (design system, ServiceCard). */
export default function ServiceCard({
  id,
  title,
  description,
  Icon,
}: {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}) {
  return (
    <Link to={`/services/${id}`} className="sd-service h-full">
      <span className="sd-icon-well" aria-hidden="true">
        <Icon className="sd-icon" size={22} strokeWidth={1.75} />
      </span>
      <h3 className="sd-service__title h4">{title}</h3>
      <p className="sd-service__desc">{description}</p>
      <span className="sd-service__foot">
        <span />
        <span className="sd-service__link">
          Read more
          <ArrowRight className="sd-icon" size={16} strokeWidth={1.75} aria-hidden />
        </span>
      </span>
    </Link>
  );
}
