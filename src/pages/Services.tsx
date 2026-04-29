import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ServiceCard } from '../components/ServiceCard'

type ClinicInfo = {
  name: string
  subtitle: string
  items: string[]
  note: string
}

type ServiceItem = {
  title: string
  desc: string
  price: string
}

const SERVICE_HERO_IMAGE =
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=70'

const CLINICS: ClinicInfo[] = [
  {
    name: 'General Dentistry',
    subtitle: 'Routine and preventive care',
    items: ['Consultation & digital diagnosis', 'Scaling and polishing', 'Tooth-colored fillings'],
    note: 'Starting from PKR 3,500 depending on examination findings.',
  },
  {
    name: 'Restorative & Implants',
    subtitle: 'Function and smile restoration',
    items: ['Root canal treatment', 'Crowns and bridges', 'Dental implants'],
    note: 'Treatment plans and pricing are customized per case.',
  },
  {
    name: 'Orthodontics & Aesthetics',
    subtitle: 'Alignment and smile design',
    items: ['Braces and aligner planning', 'Teeth whitening', 'Smile makeover options'],
    note: 'Exact pricing is shared after smile assessment and planning.',
  },
]

const SERVICE_CATALOG: ServiceItem[] = [
  {
    title: 'Dental Consultation',
    desc: 'Comprehensive oral exam and treatment planning with digital screening.',
    price: 'From PKR 3,500',
  },
  {
    title: 'Scaling & Polishing',
    desc: 'Professional cleaning to remove plaque, tartar, and surface stains.',
    price: 'From PKR 6,000',
  },
  {
    title: 'Tooth-Colored Fillings',
    desc: 'Aesthetic restorations designed to match your natural teeth.',
    price: 'From PKR 8,000',
  },
  {
    title: 'Root Canal Treatment',
    desc: 'Pain-relieving endodontic care to preserve infected teeth.',
    price: 'From PKR 18,000',
  },
  {
    title: 'Dental Crowns',
    desc: 'Durable ceramic and zirconia crowns for strength and aesthetics.',
    price: 'From PKR 25,000',
  },
  {
    title: 'Braces & Aligners',
    desc: 'Orthodontic treatment options tailored to bite and smile goals.',
    price: 'Custom quote',
  },
  {
    title: 'Teeth Whitening',
    desc: 'Safe in-clinic and supervised whitening options for brighter teeth.',
    price: 'From PKR 15,000',
  },
  {
    title: 'Dental Veneers',
    desc: 'Porcelain and composite veneers to improve smile shape and color.',
    price: 'From PKR 30,000',
  },
  {
    title: 'Wisdom Tooth Removal',
    desc: 'Surgical and non-surgical removal for impacted or painful molars.',
    price: 'From PKR 18,000',
  },
  {
    title: 'Tooth Extraction',
    desc: 'Simple extractions performed with comfort-focused protocols.',
    price: 'From PKR 7,000',
  },
  {
    title: 'Dental Implants',
    desc: 'Single and multiple implant options with digital planning.',
    price: 'Custom quote',
  },
  {
    title: 'Smile Makeover',
    desc: 'Comprehensive cosmetic treatment plans for balanced facial aesthetics.',
    price: 'Custom quote',
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Preventive and restorative dental care tailored for children.',
    price: 'From PKR 4,500',
  },
  {
    title: 'Gum Treatment',
    desc: 'Periodontal therapy for bleeding gums, recession, and gum infections.',
    price: 'From PKR 12,000',
  },
  {
    title: 'Dentures & Partials',
    desc: 'Custom full and partial dentures for comfort and chewing function.',
    price: 'From PKR 35,000',
  },
  {
    title: 'Emergency Dental Care',
    desc: 'Urgent same-day care for severe pain, swelling, trauma, and infection.',
    price: 'Starts at PKR 5,000',
  },
]

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
              Explore preventive, restorative, cosmetic, and surgical treatments with
              specialist-led care plans.
            </p>
          </div>

          <p className="max-w-[33ch] border-l-2 border-skyBrand/40 pl-3 pt-1.5 text-[0.78rem] font-semibold leading-snug text-ink2">
            Service cards move continuously so you can quickly scan options and visit
            the full services page for details.
          </p>

          <Link
            to="/services"
            className="group inline-flex h-[40px] items-center justify-center gap-2 self-start whitespace-nowrap rounded-full border border-skyBrand/30 bg-white px-5 text-[0.75rem] font-semibold text-ink2 shadow-soft-sm transition hover:-translate-y-0.5 hover:border-skyBrand/70 hover:text-ink hover:shadow-soft-md"
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

export default function Services() {
  const { pathname } = useLocation()
  const [activeClinic, setActiveClinic] = useState(0)
  const selectedClinic = CLINICS[activeClinic]

  if (pathname === '/') {
    return <HomeServicesSection />
  }

  return (
    <>
      <section id="services" className="relative min-h-screen overflow-hidden bg-ink text-creamBrand">
        <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="relative bg-gradient-to-br from-ink via-ink2 to-[#184f67]">
            <div className="mx-auto flex h-full w-full max-w-[620px] flex-col px-5 pb-12 pt-[calc(78px+2rem)] md:px-8 md:pt-[calc(78px+2.6rem)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em]">
                <img src="/favicon.svg" alt="" className="h-3.5 w-3.5 object-contain" />
                Studio Dental
              </div>

              <h2 className="mt-5 text-[clamp(1.9rem,2.8vw,3rem)] leading-[0.98] text-creamBrand">
                Service prices
              </h2>
              <p className="mt-3 max-w-[45ch] text-[0.84rem] leading-relaxed text-creamBrand/80">
                Explore our core service categories and what each treatment pathway
                includes. Final pricing is provided after doctor evaluation.
              </p>

              <div className="mt-6 grid gap-2">
                {CLINICS.map((clinic, idx) => (
                  <button
                    key={clinic.name}
                    type="button"
                    onClick={() => setActiveClinic(idx)}
                    className={[
                      'rounded-md border px-4 py-3 text-left transition',
                      idx === activeClinic
                        ? 'border-skyBrand bg-skyBrand/25 text-creamBrand shadow-soft-sm'
                        : 'border-white/25 bg-white/10 text-creamBrand/85 hover:bg-white/15',
                    ].join(' ')}
                  >
                    <p className="text-[1rem] font-semibold leading-none text-[#83BFE3]">{clinic.name}</p>
                    <p className="mt-1 text-[0.7rem] leading-tight text-creamBrand/75">
                      {clinic.subtitle}
                    </p>
                  </button>
                ))}
              </div>

              <div className="mt-6 border-t border-white/20 pt-5">
                <ul className="grid gap-2">
                  {selectedClinic.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.78rem] leading-relaxed text-creamBrand/85">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-skyBrand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[0.72rem] leading-relaxed text-creamBrand/65">
                  {selectedClinic.note}
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-screen">
            <img
              src={SERVICE_HERO_IMAGE}
              alt="Patient registration and dental consultation form"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/20 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-5 right-5">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-5 py-2.5 text-[0.78rem] font-semibold text-creamBrand backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <use href="/svg/sprite.svg#icon-mail" />
                </svg>
                Book consultation
              </Link>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-creamBrand py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <div className="mb-8 flex max-w-[760px] flex-col gap-3 md:mb-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
              <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
              Services
            </span>
            <h2>Dental services at Studio Dental.</h2>
            <p className="max-w-[62ch] text-[1.02rem] text-muted">
              Transparent treatment categories with clear starting prices and
              expert-led consultation for each case.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATALOG.map((service) => (
              <ServiceCard key={service.title} {...service} variant="grid" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
