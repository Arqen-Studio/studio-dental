import { Link } from "react-router-dom";

const CLINICS = [
  {
    id: "dha",
    name: "DHA Phase II",
    city: "DHA Phase II",
    photo:
      "/images/clinic/interior-a.jpg",
    address: "1st Floor, Plaza No. 26, Main Iqbal Boulevard, Sector C, DHA Phase II, Islamabad",
    mapUrl: "https://maps.google.com/?q=DHA+Phase+II+Islamabad",
    phone: "+92 329 9961999",
    email: "thestudiodentalclinic@gmail.com",
    hours: ["Mon – Fri  10:00 – 20:00", "Sat  10:00 – 17:00"],
  },
  {
    id: "f7",
    name: "F-7 Markaz",
    city: "F-7 Markaz",
    photo:
      "/images/clinic/interior-d.jpg",
    address: "Jinnah Super, F-7 Markaz, Islamabad",
    mapUrl: "https://maps.google.com/?q=F-7+Markaz+Islamabad",
    phone: "+92 329 3519999",
    email: "thestudiodentalclinic@gmail.com",
    hours: ["Mon – Fri  10:00 – 20:00", "Sat  10:00 – 17:00"],
  },
];


function PinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14.5" />
    </svg>
  );
}

export default function Clinics() {
  return (
    <>
      {/* ── Hero ── */}
      <section data-theme="dark" className="no-reveal bg-surface pb-12 pt-[calc(78px+2rem)]">
        <div className="mx-auto w-full page-shell px-5 md:px-8 [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.45s_both]">
          <h1 className="h1 text-ink">
            Contacts
          </h1>
        </div>
      </section>

      {/* ── Clinic photo cards ── */}
      <section className="bg-surface-sunken py-12 md:py-16">
        <div className="mx-auto w-full page-shell px-5 md:px-8">
          {/* The five row bands are declared on this grid and adopted by each
              card, so the longer DHA address cannot push that card's hours and
              buttons out of step with the F-7 card's. */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-[auto_auto_auto_auto_auto] md:gap-y-0">
            {CLINICS.map((clinic) => (
              <div
                key={clinic.id}
                className="flex h-full flex-col overflow-hidden rounded-lg bg-surface-raised shadow-1 md:grid md:row-span-5 md:grid-rows-subgrid"
              >
                {/* Photo */}
                <div className="aspect-[8/3] overflow-hidden bg-surface-sunken">
                  <img
                    src={clinic.photo}
                    alt={`Studio Dental ${clinic.name} interior`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Info rows with dividers */}
                <div className="divide-y divide-line px-5 py-2 md:row-span-4 md:grid md:grid-rows-subgrid md:px-7 md:py-0">
                  {/* Address */}
                  <div className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex-shrink-0 text-brand">
                      <PinIcon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="eyebrow text-ink">
                        Address
                      </p>
                      <p className="mt-1 body text-ink">
                        {clinic.address}
                      </p>
                      <a
                        href={clinic.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block small font-medium text-brand transition hover:underline"
                      >
                        Location on the map
                      </a>
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex-shrink-0 text-brand">
                      <PhoneIcon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="eyebrow text-ink">
                        Phone for registration
                      </p>
                      <a
                        href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                        className="mt-1 block body font-medium text-brand transition hover:underline"
                      >
                        {clinic.phone}
                      </a>
                      <p className="mt-1 eyebrow text-ink">
                        E-mail
                      </p>
                      <a
                        href={`mailto:${clinic.email}`}
                        className="mt-0.5 block break-all body font-medium text-brand transition hover:underline"
                      >
                        {clinic.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex-shrink-0 text-brand">
                      <ClockIcon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="eyebrow text-ink">
                        Working hours
                      </p>
                      <div className="mt-1 flex flex-col gap-0.5">
                        {clinic.hours.map((h) => (
                          <p key={h} className="body text-ink">
                            {h}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 py-5">
                    <Link
                      to="/contact-us"
                      className="flex-1 rounded-full bg-brand py-3 text-center label text-on-brand transition hover:bg-brand-hover"
                    >
                      Contact
                    </Link>
                    <a
                      href={clinic.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-brand py-3 text-center label text-brand transition hover:bg-brand/10"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── "You will be welcomed." — teaser to the team page ── */}
      <section className="bg-surface-sunken py-16 md:py-24">
        <div className="mx-auto w-full max-w-[46rem] px-5 text-center md:px-8">
          <h2 className="h2 text-ink">
            You will be welcomed.
          </h2>
          <p className="mx-auto mt-4 max-w-[42ch] body text-ink-muted">
            The same team looks after patients at both branches, from routine
            check-ups to implants and orthodontics. Get to know the people who
            will be treating you.
          </p>
          <Link
            to="/doctors"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 label text-on-brand transition duration-200 hover:bg-brand-hover"
          >
            Meet the team
          </Link>
        </div>
      </section>

    </>
  );
}
