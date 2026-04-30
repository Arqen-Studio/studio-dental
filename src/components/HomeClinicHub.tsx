import { Link } from 'react-router-dom'

type HubCard = {
  to: string
  title: string
  image: string
  imageAlt: string
}

const HUB_CARDS: HubCard[] = [
  {
    to: '/services',
    title: 'Services',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486bf146bc9?auto=format&fit=crop&w=900&q=75',
    imageAlt: 'Dentist providing clinical care',
  },
  {
    to: '/services',
    title: 'Prices',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=75',
    imageAlt: 'Consultation notes and planning documents',
  },
  {
    to: '/doctors',
    title: 'Doctors',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=75',
    imageAlt: 'Dental specialists reviewing patient care together',
  },
  {
    to: '/about',
    title: 'About us',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=75',
    imageAlt: 'Welcoming clinic reception area',
  },
  {
    to: '/blog',
    title: 'News',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=75',
    imageAlt: 'Reading updates on a smartphone',
  },
  {
    to: '/contact-us',
    title: 'Contacts',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=75',
    imageAlt: 'Bright modern dental clinic interior',
  },
]

/** Transform-only transitions (GPU-friendly); overlay + text share timing */
const hoverDur = 'duration-[680ms]'
const hoverEase = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

export default function HomeClinicHub() {
  return (
    <section
      className="bg-creamBrand px-5 py-14 md:px-8 md:py-20"
      aria-labelledby="home-clinic-hub-heading"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mx-auto max-w-[56rem] text-center">
          <h2
            id="home-clinic-hub-heading"
            className="text-[clamp(1.35rem,2.5vw,2rem)] font-bold leading-tight tracking-tight text-ink"
          >
            Dental and implantology clinics — Studio Dental
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[0.875rem] leading-relaxed text-muted md:text-[0.92rem]">
            With over 17 years of experience, Studio Dental brings specialized care to Islamabad — at DHA Phase II
            and F-7 Markaz. From diagnostics and imaging to implants, orthodontics, restorative dentistry, and
            pediatric care, our teams help you plan treatment with clarity and confidence.
          </p>
        </header>

        {/* 2 columns × 3 rows on sm+ (reference layout) */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:gap-6">
          {HUB_CARDS.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className={`group relative aspect-[4/3] min-h-[200px] overflow-hidden rounded-2xl shadow-soft-sm outline-none ring-offset-2 ring-offset-creamBrand transition-shadow ${hoverDur} ${hoverEase} hover:shadow-soft-md focus-visible:ring-2 focus-visible:ring-skyBrand`}
            >
              <img
                src={card.image}
                alt={card.imageAlt}
                loading="lazy"
                className={`absolute inset-0 z-0 h-full w-full object-cover transition-transform will-change-transform ${hoverDur} ${hoverEase} group-hover:scale-[1.03]`}
              />

              {/* Bottom gradient — fades as primary sheet rises */}
              <div
                className={`pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/30 to-black/10 opacity-100 transition-opacity ${hoverDur} ${hoverEase} group-hover:opacity-20`}
                aria-hidden="true"
              />

              {/* Primary tint slides up from bottom; photo stays visible through semi-transparent fill */}
              <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 top-0 z-[2] translate-y-full bg-skyBrand/[0.74] transition-transform will-change-transform ${hoverDur} ${hoverEase} group-hover:translate-y-0`}
                aria-hidden="true"
              />

              {/*
                Text: anchored at card center; default translate pushes it toward bottom,
                hover moves to true vertical center — pure transform (smooth).
              */}
              <div
                className={`absolute left-1/2 top-1/2 z-[3] w-full max-w-[18rem] px-5 text-center -translate-x-1/2 translate-y-[calc(-50%+6.25rem)] transition-transform will-change-transform ${hoverDur} ${hoverEase} group-hover:-translate-y-1/2`}
              >
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/90 md:text-[0.65rem]">
                  Clinics
                </span>
                <span className="mt-2 block font-heading text-[1.22rem] font-extrabold leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-[1.38rem]">
                  {card.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
