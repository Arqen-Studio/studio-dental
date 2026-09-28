import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { telHref, type ClinicLocation } from "../data/clinics";
import { useBooking } from "../lib/booking";

const iconProps = { className: "sd-icon", size: 18, strokeWidth: 1.75, "aria-hidden": true } as const;

/** A branch's address, phone, email and hours, with directions and booking (design system, ClinicCard). */
export default function ClinicCard({
  clinic,
  photo = false,
  level = 2,
}: {
  clinic: ClinicLocation;
  /** Show the branch photo above the card body. */
  photo?: boolean;
  level?: 2 | 3;
}) {
  const openBooking = useBooking();
  const Heading = `h${level}` as const;

  return (
    <article className="sd-clinic overflow-hidden">
      {photo && (
        <img
          src={clinic.photo}
          alt={`Inside the ${clinic.name} clinic`}
          loading="lazy"
          className="-mx-8 -mt-8 mb-2 aspect-[16/9] w-[calc(100%+4rem)] max-w-none object-cover"
        />
      )}
      <header className="sd-clinic__head">
        <p className="sd-eyebrow">Clinic</p>
        <Heading className="h3">{clinic.name}</Heading>
      </header>

      <dl className="sd-clinic__list">
        <div className="sd-clinic__row">
          <dt>
            <MapPin {...iconProps} />
            Address
          </dt>
          <dd>{clinic.address}</dd>
        </div>
        <div className="sd-clinic__row">
          <dt>
            <Phone {...iconProps} />
            Phone
          </dt>
          <dd>
            <a href={telHref(clinic.phone)}>{clinic.phone}</a>
          </dd>
        </div>
        <div className="sd-clinic__row">
          <dt>
            <Mail {...iconProps} />
            Email
          </dt>
          <dd className="break-all">
            <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
          </dd>
        </div>
        <div className="sd-clinic__row">
          <dt>
            <Clock {...iconProps} />
            Hours
          </dt>
          <dd>
            {clinic.hours.map(([days, times]) => (
              <span key={days} className="sd-clinic__hours">
                <span>{days}</span>
                <span>{times}</span>
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="sd-clinic__actions">
        <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className="sd-btn sd-btn--secondary sd-btn--sm">
          <span>Get directions</span>
          <ArrowUpRight {...iconProps} />
        </a>
        <button type="button" onClick={openBooking} className="sd-btn sd-btn--primary sd-btn--sm">
          Book a consultation
        </button>
      </div>
    </article>
  );
}
