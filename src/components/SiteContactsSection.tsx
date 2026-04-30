import { Link } from 'react-router-dom'
import { CLINICS } from '../data/clinics'

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21C12 21 5 13.5 5 8.5a7 7 0 0 1 14 0c0 5-7 12.5-7 12.5z" />
      <circle cx="12" cy="8.5" r="2.5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="12" y2="15" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14.5" />
    </svg>
  )
}

export default function SiteContactsSection() {
  return (
    <section className="bg-[#f9f9f9] pb-20 pt-5">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <h2 className="mb-6 text-[clamp(1.6rem,3vw,2.2rem)] font-normal text-ink">Contacts</h2>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {CLINICS.map((clinic) => (
            <div key={clinic.id} className="rounded-xl border border-black/8 bg-white p-7 shadow-soft-sm md:p-9">
              <h3 className="mb-5 text-[1.35rem] font-semibold text-ink">{clinic.city}</h3>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex-shrink-0 text-skyBrand">
                  <PinIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.82rem] text-ink">{clinic.address}</p>
                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[0.85rem] font-normal text-skyBrand transition hover:underline"
                  >
                    Location on the map
                  </a>
                  <div className="mt-3 h-px w-10 bg-skyBrand/60" />
                </div>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <span className="mt-0.5 flex-shrink-0 text-skyBrand">
                  <PhoneIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.78rem] text-ink2">Tel. for registration:</p>
                  <a
                    href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                    className="block text-[0.82rem] font-normal text-skyBrand transition hover:underline"
                  >
                    {clinic.phone}
                  </a>
                  <p className="mt-1 text-[0.78rem] text-ink2">E-mail:</p>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="block break-all text-[0.82rem] font-normal text-skyBrand transition hover:underline"
                  >
                    {clinic.email}
                  </a>
                  <Link
                    to="/contact-us"
                    className="mt-1 block text-[0.88rem] font-medium text-skyBrand transition hover:underline"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <span className="mt-0.5 flex-shrink-0 text-skyBrand">
                  <ClockIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.78rem] text-ink2">Working hours:</p>
                  {clinic.hours.map((h) => (
                    <p key={h} className="text-[0.82rem] text-ink">
                      {h}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
