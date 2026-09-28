import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Phone } from "lucide-react";
import Logo from "../Logo";
import { CLINICS, INSTAGRAM_URL, telHref, type ClinicLocation } from "../../data/clinics";
import { NAV_ITEMS, SECONDARY_NAV_ITEMS } from "../../data/navigation";

/** The clinic's real profiles only. Facebook, LinkedIn and YouTube were
 *  placeholders pointing at the platforms' home pages, so they are gone until
 *  the clinic supplies its own URLs. */
const SOCIAL_LINKS = [
  {
    label: "Studio Dental on Instagram",
    href: INSTAGRAM_URL,
    icon: <InstagramIcon />,
  },
];

/** Line icon on the 24px grid, drawn in currentColor like the Lucide set. */
function InstagramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-brand text-brand"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function ClinicCard({ clinic }: { clinic: ClinicLocation }) {
  const { city, address, mapUrl, phone, email, hours } = clinic;
  // The card is a six-row grid that adopts the parent grid's row bands on
  // large screens, so a two-line address in one clinic does not push its
  // dividers and rows out of step with the other clinic's.
  return (
    <article className="grid content-start gap-5 rounded-md border border-line bg-surface-raised p-5 md:gap-8 md:p-9 lg:row-span-6 lg:grid-rows-subgrid">
      <h3 className="h4 text-ink">{city}</h3>

      <div className="flex gap-4">
        <IconCircle>
          <MapPin size={20} strokeWidth={1.75} />
        </IconCircle>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="body text-ink">{address}</p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex min-h-11 items-center body font-medium text-brand underline-offset-2 transition hover:underline"
          >
            Get directions
          </a>
        </div>
      </div>

      <div className="h-px w-full self-center bg-line" aria-hidden="true" />

      <div className="flex gap-4">
        <IconCircle>
          <Phone size={20} strokeWidth={1.75} />
        </IconCircle>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="small font-medium text-ink-muted">Phone</p>
          <a href={telHref(phone)} className="flex min-h-11 items-center body text-ink transition hover:text-brand">
            {phone}
          </a>
          <p className="mt-3 small font-medium text-ink-muted">Email</p>
          <a
            href={`mailto:${email}`}
            className="flex min-h-11 items-center break-all body text-ink transition hover:text-brand"
          >
            {email}
          </a>
          <Link
            to="/contact-us"
            className="mt-1 inline-flex min-h-11 items-center label text-brand underline-offset-2 transition hover:underline"
          >
            Contact the clinic
          </Link>
        </div>
      </div>

      <div className="h-px w-full self-center bg-line" aria-hidden="true" />

      <div className="flex gap-4">
        <IconCircle>
          <Clock size={20} strokeWidth={1.75} />
        </IconCircle>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="small font-medium text-ink-muted">Opening hours</p>
          {hours.map(([days, times]) => (
            <p key={days} className="mt-1 body tabular-nums text-ink">
              {days}, {times}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Footer() {
  return (
    // Ink band. The extra bottom padding on phones keeps the floating Book
    // button clear of the last lines.
    <footer data-theme="dark" className="bg-surface pb-24 pt-12 text-ink md:pb-14 md:pt-16">
      <div className="page-shell mx-auto w-full px-5 md:px-8">
<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Link to="/" className="sd-logo-link">
          <Logo size={48} tone="inverse" descriptor="Clinic · Islamabad" />
        </Link>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {[...NAV_ITEMS, ...SECONDARY_NAV_ITEMS].map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="label inline-flex min-h-11 items-center text-ink transition hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        </div>

        <h2 className="mb-6 mt-10 h2 text-ink md:mb-10 md:mt-12">Contacts</h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_auto_auto_auto] lg:gap-8">
          {CLINICS.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-line pt-8">
          <ul className="flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink transition duration-200 hover:border-brand hover:text-brand"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>

          <p className="max-w-[52rem] small text-ink-muted">
            &copy; {new Date().getFullYear()} Studio Dental, clinics at DHA
            Phase II and F-7 Markaz, Islamabad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
