import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ServiceCard } from '../../components/ServiceCard'

// ── shared clinic data ─────────────────────────────────────────────────────
const CLINICS = [
  {
    id: 'dha',
    city: 'DHA Phase II',
    address: 'Plaza No. 26, Main Iqbal Boulevard, DHA Phase II, Islamabad',
    mapUrl: 'https://maps.google.com/?q=DHA+Phase+II+Islamabad',
    phone: '+92 329 9961999',
    email: 'info@thestudiodental.com',
    hours: ['Mon – Fri  10:00 – 20:00', 'Sat  10:00 – 17:00'],
  },
  {
    id: 'f7',
    city: 'F-7 Markaz',
    address: 'Office #7, 2nd Floor, Near Shoe Planet, F-7 Markaz, Islamabad',
    mapUrl: 'https://maps.google.com/?q=F-7+Markaz+Islamabad',
    phone: '+92 329 3519999',
    email: 'info@thestudiodental.com',
    hours: ['Mon – Fri  10:00 – 20:00', 'Sat  10:00 – 17:00'],
  },
]

// ── service accordion data ─────────────────────────────────────────────────
type ServiceEntry = { title: string; children?: string[] }

const SERVICES: ServiceEntry[] = [
  { title: 'Dental implantation' },
  { title: 'Implantation "All teeth on 4 implants"' },
  { title: 'Prosthetics: teeth and implants' },
  {
    title: 'Dental fillings (adults and children)',
    children: ['Dental fillings', 'Pediatric dentistry'],
  },
  { title: 'Orthognathic surgery' },
  { title: 'Treatment of jaw joint pain' },
  {
    title: 'Teeth straightening',
    children: ['Braces', 'Clear aligners'],
  },
  { title: 'Aesthetic dental fillings' },
  {
    title: 'Periodontal treatment (conservative and laser)',
    children: ['Conservative treatment', 'Laser therapy'],
  },
  { title: 'Root canal treatment' },
  {
    title: 'Oral hygiene and whitening',
    children: ['Professional cleaning', 'Teeth whitening'],
  },
  { title: 'Tooth extraction' },
]

// ── home-page marquee data (kept for Hero section) ─────────────────────────
type ServiceItem = { title: string; desc: string; price: string }

const SERVICE_CATALOG: ServiceItem[] = [
  { title: 'Dental Consultation', desc: 'Comprehensive oral exam and treatment planning with digital screening.', price: 'From PKR 3,500' },
  { title: 'Scaling & Polishing', desc: 'Professional cleaning to remove plaque, tartar, and surface stains.', price: 'From PKR 6,000' },
  { title: 'Tooth-Colored Fillings', desc: 'Aesthetic restorations designed to match your natural teeth.', price: 'From PKR 8,000' },
  { title: 'Root Canal Treatment', desc: 'Pain-relieving endodontic care to preserve infected teeth.', price: 'From PKR 18,000' },
  { title: 'Dental Crowns', desc: 'Durable ceramic and zirconia crowns for strength and aesthetics.', price: 'From PKR 25,000' },
  { title: 'Braces & Aligners', desc: 'Orthodontic treatment options tailored to bite and smile goals.', price: 'Custom quote' },
  { title: 'Teeth Whitening', desc: 'Safe in-clinic and supervised whitening options for brighter teeth.', price: 'From PKR 15,000' },
  { title: 'Dental Veneers', desc: 'Porcelain and composite veneers to improve smile shape and color.', price: 'From PKR 30,000' },
  { title: 'Wisdom Tooth Removal', desc: 'Surgical and non-surgical removal for impacted or painful molars.', price: 'From PKR 18,000' },
  { title: 'Tooth Extraction', desc: 'Simple extractions performed with comfort-focused protocols.', price: 'From PKR 7,000' },
  { title: 'Dental Implants', desc: 'Single and multiple implant options with digital planning.', price: 'Custom quote' },
  { title: 'Smile Makeover', desc: 'Comprehensive cosmetic treatment plans for balanced facial aesthetics.', price: 'Custom quote' },
  { title: 'Pediatric Dentistry', desc: 'Preventive and restorative dental care tailored for children.', price: 'From PKR 4,500' },
  { title: 'Gum Treatment', desc: 'Periodontal therapy for bleeding gums, recession, and gum infections.', price: 'From PKR 12,000' },
  { title: 'Dentures & Partials', desc: 'Custom full and partial dentures for comfort and chewing function.', price: 'From PKR 35,000' },
  { title: 'Emergency Dental Care', desc: 'Urgent same-day care for severe pain, swelling, trauma, and infection.', price: 'Starts at PKR 5,000' },
]

// ── icons ──────────────────────────────────────────────────────────────────
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
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}
function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

// ── home-page services marquee (rendered inside Hero) ──────────────────────
function HomeServicesSection() {
  return (
    <section id="services" className="bg-creamBrand py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1.2fr_1fr_auto] lg:items-start">
          <div className="flex max-w-[760px] flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
              <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
              Services
            </span>
            <h2>Dental services at Studio Dental.</h2>
            <p className="max-w-[60ch] text-[1.02rem] text-muted">
              Explore preventive, restorative, cosmetic, and surgical treatments with specialist-led care plans.
            </p>
          </div>
          <p className="max-w-[33ch] border-l-2 border-skyBrand/40 pl-3 pt-1.5 text-[0.78rem] font-semibold leading-snug text-ink2">
            Service cards move continuously so you can quickly scan options and visit the full services page for details.
          </p>
          <Link
            to="/services"
            className="group inline-flex h-[40px] items-center justify-center gap-2 self-start whitespace-nowrap rounded-full border border-skyBrand/30 bg-creamBrand px-5 text-[0.75rem] font-semibold text-ink2 shadow-soft-sm transition hover:-translate-y-0.5 hover:border-skyBrand/70 hover:text-ink hover:shadow-soft-md"
          >
            View all services
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-skyBrand/25 text-ink transition group-hover:bg-skyBrand/40">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <use href="/svg/sprite.svg#icon-arrow-right" />
              </svg>
            </span>
          </Link>
        </div>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
          <div className="flex w-max animate-[sd-services-marquee_34s_linear_infinite] [will-change:transform]">
            <div className="flex gap-5 pr-5">
              {SERVICE_CATALOG.map((service) => (
                <ServiceCard key={`home-a-${service.title}`} {...service} variant="marquee" />
              ))}
            </div>
            <div className="flex gap-5 pr-5" aria-hidden="true">
              {SERVICE_CATALOG.map((service) => (
                <ServiceCard key={`home-b-${service.title}`} {...service} variant="marquee" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── main services page ─────────────────────────────────────────────────────
export default function Services() {
  const { pathname } = useLocation()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  if (pathname === '/') {
    return <HomeServicesSection />
  }

  function toggle(idx: number) {
    setOpenIdx((prev) => (prev === idx ? null : idx))
  }

  return (
    <>
      {/* ── 1. Split hero ── */}
      <section className="grid bg-creamBrand pt-[78px] min-h-screen lg:bg-transparent lg:pt-0 lg:grid-cols-2">
        {/* Left — brand blue panel with accordion */}
        <div className="flex flex-col justify-center bg-creamBrand px-8 py-16 md:px-12 lg:px-16 lg:pt-[calc(78px+3rem)]">
          <div className="w-full max-w-[580px] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
          <h1 className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-tight text-ink">
            Services
          </h1>

          <ul className="mt-8 divide-y divide-ink/10">
            {SERVICES.map((svc, idx) => {
              const hasChildren = Boolean(svc.children?.length)
              const isOpen = openIdx === idx
              return (
                <li key={svc.title}>
                  {hasChildren ? (
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="flex w-full items-center gap-3 py-3.5 text-left text-[0.95rem] font-normal text-ink/85 transition hover:text-ink"
                    >
                      <span className="flex-shrink-0 text-ink/50">
                        {isOpen ? <ChevronDown /> : <ChevronRight />}
                      </span>
                      {svc.title}
                    </button>
                  ) : (
                    <div className="py-3.5 pl-[22px] text-[0.95rem] text-ink/85">
                      {svc.title}
                    </div>
                  )}
                  {hasChildren && isOpen && (
                    <ul className="mb-2 ml-[22px] flex flex-col gap-1">
                      {svc.children!.map((child) => (
                        <li key={child} className="py-1.5 pl-4 text-[0.88rem] text-ink/65">
                          {child}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
          </div>
        </div>

        {/* Right — video */}
        <div className="relative order-first min-h-[50vw] overflow-hidden lg:order-last lg:min-h-screen">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&w=1200&q=75"
            className="absolute inset-0 h-full w-full object-cover object-center [animation:sd-hero-img-in_1.1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]"
          >
            <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ── 2. Let's get in touch ── */}
      <section className="reveal grid min-h-[600px] lg:grid-cols-2">
        {/* Left — clinic interior photo */}
        <div className="relative min-h-[380px] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=75"
            alt="Studio Dental clinic interior"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* Right — form */}
        <div className="flex flex-col justify-center bg-creamBrand px-8 py-16 md:px-12 lg:px-16">
          <div className="w-full max-w-[580px]">
          <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-tight text-ink">
            Let's get in touch
          </h2>

          <form className="mt-8 flex flex-col gap-5" noValidate>
            {/* Choose a clinic */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="clinic" className="text-[0.82rem] text-ink2">
                Choose a clinic
              </label>
              <div className="relative">
                <select
                  id="clinic"
                  name="clinic"
                  defaultValue=""
                  className="w-full appearance-none rounded-sm border border-black/15 bg-creamBrand px-4 py-3 text-[0.95rem] text-ink outline-none transition focus:border-skyBrand focus:ring-4 focus:ring-skyBrand/25"
                >
                  <option value="" disabled />
                  {CLINICS.map((c) => (
                    <option key={c.id} value={c.id}>{c.city}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Name + Phone */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[0.82rem] text-ink2">Your name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="rounded-sm border border-black/15 px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:ring-4 focus:ring-skyBrand/25"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-[0.82rem] text-ink2">Your phone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="rounded-sm border border-black/15 px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:ring-4 focus:ring-skyBrand/25"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[0.82rem] text-ink2">Your email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="rounded-sm border border-black/15 px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:ring-4 focus:ring-skyBrand/25"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[0.82rem] text-ink2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="min-h-[110px] resize-y rounded-sm border border-black/15 px-4 py-3 text-[0.95rem] outline-none transition focus:border-skyBrand focus:ring-4 focus:ring-skyBrand/25"
              />
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-3">
              <label className="flex items-start gap-3 text-[0.82rem] text-ink2 cursor-pointer">
                <input type="checkbox" name="privacy" className="mt-0.5 h-4 w-4 flex-shrink-0 accent-ink" />
                <span>
                  I have read and agree to{' '}
                  <Link to="/contact-us" className="text-ink underline hover:opacity-80">
                    the privacy policy of Studio Dental
                  </Link>
                </span>
              </label>
              <label className="flex items-start gap-3 text-[0.82rem] text-ink2 cursor-pointer">
                <input type="checkbox" name="marketing" className="mt-0.5 h-4 w-4 flex-shrink-0 accent-ink" />
                <span>I agree that my data will be used for marketing purposes.</span>
              </label>
            </div>

            <button
              type="button"
              className="mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full bg-skyBrand px-8 py-4 text-[0.95rem] font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-skyBrand/85"
            >
              Send
            </button>
          </form>
          </div>
        </div>
      </section>

      {/* ── 3. Contacts ── */}
      <section className="reveal bg-creamBrand py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <h2 className="mb-8 text-[clamp(1.6rem,3vw,2.2rem)] font-semibold text-ink">Contacts</h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {CLINICS.map((clinic) => (
              <div key={clinic.id} className="rounded-xl border border-black/8 bg-creamBrand p-7 shadow-soft-sm md:p-9">
                <h3 className="mb-5 text-[1.35rem] font-semibold text-ink">{clinic.city}</h3>

                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-skyBrand"><PinIcon /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.82rem] text-ink">{clinic.address}</p>
                    <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer"
                      className="mt-1 block text-[0.85rem] font-normal text-skyBrand transition hover:underline">
                      Location on the map
                    </a>
                    <div className="mt-3 h-px w-10 bg-skyBrand/60" />
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-skyBrand"><PhoneIcon /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.78rem] text-ink2">Tel. for registration:</p>
                    <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                      className="block text-[0.82rem] font-normal text-skyBrand transition hover:underline">
                      {clinic.phone}
                    </a>
                    <p className="mt-1 text-[0.78rem] text-ink2">E-mail:</p>
                    <a href={`mailto:${clinic.email}`}
                      className="block break-all text-[0.82rem] font-normal text-skyBrand transition hover:underline">
                      {clinic.email}
                    </a>
                    <Link to="/contact-us"
                      className="mt-1 block text-[0.88rem] font-medium text-skyBrand transition hover:underline">
                      Contact
                    </Link>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-skyBrand"><ClockIcon /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.78rem] text-ink2">Working hours:</p>
                    {clinic.hours.map((h) => (
                      <p key={h} className="text-[0.82rem] text-ink">{h}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
