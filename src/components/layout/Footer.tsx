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
    <article className="grid content-start gap-8 rounded-2xl border border-black/[0.06] bg-white p-7 shadow-[0_4px_24px_rgba(28,59,37,0.08)] md:p-9 lg:row-span-6 lg:grid-rows-subgrid">
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
            Location on the map
          </a>
        </div>
      </div>

      <div className="h-px w-full self-center bg-black/10" aria-hidden="true" />

      <div className="flex gap-4">
        <IconCircle>
          <PhoneIcon />
        </IconCircle>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-[0.78rem] font-medium text-muted">
            Tel. for registration:
          </p>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="mt-0.5 block text-[0.88rem] text-ink transition hover:text-brand"
          >
            {phone}
          </a>
          <p className="mt-3 text-[0.78rem] font-medium text-muted">E-mail:</p>
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

      <div className="h-px w-full self-center bg-black/10" aria-hidden="true" />

      <div className="flex gap-4">
        <IconCircle>
          <ClockIcon />
        </IconCircle>
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="text-[0.78rem] font-medium text-muted">
            Working hours:
          </p>
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
  const INSTAGRAM_URL =
    "https://www.instagram.com/studiodentalpk?igsh=MWt5cmJzbzZhbms2bw%3D%3D";

  /** Replace with your Studio Dental Facebook, LinkedIn, and YouTube URLs when available */
  const FACEBOOK_URL = "https://www.facebook.com/";
  const LINKEDIN_URL = "https://www.linkedin.com/";
  const YOUTUBE_URL = "https://www.youtube.com/";

  /** Assets under `public/svg/` */
  const socialLinks = [
    {
      label: "Facebook",
      href: FACEBOOK_URL,
      src: "/svg/facebook-circle-svgrepo-com.svg",
    },
    {
      label: "Instagram",
      href: INSTAGRAM_URL,
      src: "/svg/instagram-167-svgrepo-com.svg",
    },
    {
      label: "LinkedIn",
      href: LINKEDIN_URL,
      src: "/svg/linkedin-linked-in-svgrepo-com.svg",
    },
    {
      label: "YouTube",
      href: YOUTUBE_URL,
      src: "/svg/social-youtube-svgrepo-com.svg",
    },
  ] as const;

  return (
    <footer className="bg-[#F4F7F2] pb-10 pt-14 text-ink md:pb-14 md:pt-16">
      <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
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
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand shadow-[0_1px_3px_rgba(28,59,37,0.12)] ring-1 ring-ink/10 transition duration-200 hover:bg-brand/90 hover:shadow-md sm:h-12 sm:w-12"
                >
                  <img
                    src={s.src}
                    alt=""
                    className="h-[1.1rem] w-[22px] object-contain sm:h-[1.3rem] sm:w-[26px]"
                  />
                </a>
              ))}
            </div>

            <p className="mt-3 max-w-[52rem] font-sans text-[0.8125rem] leading-relaxed text-brand md:text-[0.875rem]">
              Report potential ethical, corruption, violence or
              harassment-related violations and other concerns.
            </p>

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

            <p className="mt-2 font-sans text-[0.8125rem] leading-relaxed text-muted">
              Touched by{" "}
              <a
                href="https://digitouch.lt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline underline-offset-2 transition hover:text-ink"
              >
                digitouch!
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
