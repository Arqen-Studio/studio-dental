import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CLINICS } from "../../data/clinics";

function PinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21C12 21 5 13.5 5 8.5a7 7 0 0 1 14 0c0 5-7 12.5-7 12.5z" />
      <circle cx="12" cy="8.5" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="12" y2="15" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14.5" />
    </svg>
  );
}

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

function ClinicCard({
  city,
  address,
  mapUrl,
  phone,
  email,
  hours,
}: {
  city: string;
  address: string;
  mapUrl: string;
  phone: string;
  email: string;
  hours: string[];
}) {
  // The card is a six-row grid that adopts the parent grid's row bands on
  // large screens, so a two-line address in one clinic does not push its
  // dividers and rows out of step with the other clinic's.
  return (
    <article className="grid content-start gap-8 rounded-2xl border border-line bg-surface-raised p-7 md:p-9 lg:row-span-6 lg:grid-rows-subgrid">
      <h3 className="text-[1.35rem] font-bold tracking-tight text-ink">
        {city}
      </h3>

      <div className="flex gap-4">
        <IconCircle>
          <PinIcon />
        </IconCircle>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-[0.9rem] leading-relaxed text-ink">{address}</p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[0.88rem] font-medium text-brand underline-offset-2 transition hover:underline"
          >
            Get directions
          </a>
        </div>
      </div>

      <div className="h-px w-full self-center bg-line" aria-hidden="true" />

      <div className="flex gap-4">
        <IconCircle>
          <PhoneIcon />
        </IconCircle>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-[0.78rem] font-medium text-muted">Phone</p>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="mt-0.5 block text-[0.88rem] text-ink transition hover:text-brand"
          >
            {phone}
          </a>
          <p className="mt-3 text-[0.78rem] font-medium text-muted">Email</p>
          <a
            href={`mailto:${email}`}
            className="mt-0.5 block break-all text-[0.88rem] text-ink transition hover:text-brand"
          >
            {email}
          </a>
          <Link
            to="/contact-us"
            className="mt-3 inline-block text-[0.88rem] font-semibold text-brand underline-offset-2 transition hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="h-px w-full self-center bg-line" aria-hidden="true" />

      <div className="flex gap-4">
        <IconCircle>
          <ClockIcon />
        </IconCircle>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-[0.78rem] font-medium text-muted">Hours</p>
          {hours.map((h) => (
            <p key={h} className="mt-1 text-[0.88rem] leading-snug text-ink">
              {h}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Footer() {
  // [TODO: confirm this is the clinic's Instagram. Facebook, LinkedIn and YouTube were removed: they pointed at the platforms' home pages.]
  const INSTAGRAM_URL =
    "https://www.instagram.com/studiodentalpk?igsh=MWt5cmJzbzZhbms2bw%3D%3D";

  return (
    <footer data-theme="dark" className="bg-surface pb-10 pt-14 text-ink md:pb-14 md:pt-16">
      <div className="page-shell mx-auto w-full px-5 md:px-8">
        <h2 className="mb-8 text-[clamp(1.75rem,3.2vw,2.35rem)] font-bold tracking-tight text-ink md:mb-10">
          Contacts
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_auto_auto_auto] lg:gap-8">
          {CLINICS.map((clinic) => (
            <ClinicCard
              key={clinic.id}
              city={clinic.city}
              address={clinic.address}
              mapUrl={clinic.mapUrl}
              phone={clinic.phone}
              email={clinic.email}
              hours={clinic.hours}
            />
          ))}
        </div>

        <div className="mt-5   pt-10 ">
          <div className="flex flex-col items-start text-left">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-on-brand transition duration-200 hover:bg-brand-hover"
            >
              <InstagramIcon />
            </a>

            <p className="mt-3 max-w-[52rem] font-sans text-[0.8125rem] leading-relaxed text-muted">
              &copy; {new Date().getFullYear()} Studio Dental, clinics at DHA
              Phase II and F-7 Markaz, Islamabad. All rights reserved.{" "}
              <a
                href="https://thestudiodental.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline underline-offset-2 transition hover:text-ink"
              >
                Studio Dental
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
