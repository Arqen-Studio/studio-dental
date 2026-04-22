import { Link } from 'react-router-dom'

type Service = {
  title: string
  desc: string
  icon: React.ReactNode
}

const SERVICES: Service[] = [
  {
    title: 'General Dentistry',
    desc: 'Cleanings, check-ups, and preventive care that keep your smile healthy for the long run.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3c-3 0-5 2-5 4 0 1.5.6 2.8 1.2 4.8.7 2.3 1.1 4.6 1.1 6.9 0 2.2.8 4.3 2.7 4.3s2.7-2.1 2.7-4.3c0-2.3.4-4.6 1.1-6.9C16.4 9.8 17 8.5 17 7c0-2-2-4-5-4Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Cosmetic & Whitening',
    desc: 'Veneers, bonding, and professional whitening that bring out a confident, natural glow.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l2 5 5 1-3.5 4 1 5-4.5-2.5L7.5 18l1-5L5 9l5-1 2-5Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Invisalign & Aligners',
    desc: 'Discreet, custom-made clear aligners that gently guide your teeth into their best position.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 9c0-2 1.5-3 3.5-3S12 7 12 9s-1.5 3-3.5 3S5 11 5 9Zm7 0c0-2 1.5-3 3.5-3S19 7 19 9s-1.5 3-3.5 3S12 11 12 9Zm-3.5 6h7M9 18h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Implants & Crowns',
    desc: 'Durable, natural-looking tooth replacements designed and placed with precision.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v6M9 9h6M10 12h4M11 15h2M11.5 18l.5 3 .5-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Kids' Dentistry",
    desc: 'A friendly, calming environment where little ones learn to love dental visits.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
        <path d="M9 8h.01M15 8h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Emergency Care',
    desc: 'Same-day appointments for pain, trauma, or anything that just can\u2019t wait.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L3 14h7l-1 8 10-12h-7l1-8Z" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-creamBrand py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mb-8 flex max-w-[720px] flex-col gap-3 md:mb-12">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
            Our services
          </span>
          <h2>Thoughtful care for every kind of smile.</h2>
          <p className="max-w-[60ch] text-[1.05rem] text-muted">
            From routine check-ups to full smile makeovers, our team uses modern
            techniques and gentle hands to make every visit a great one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="flex min-h-[240px] flex-col gap-4 rounded-lg border border-black/10 bg-white p-6 shadow-soft-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-skyBrand/40 hover:shadow-soft-md"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-gradient-to-br from-skyBrand to-skyBrand/70 text-ink shadow-sky" aria-hidden="true">
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p className="flex-1 text-[0.98rem] leading-relaxed text-muted">{s.desc}</p>
              <Link
                to="/#contact"
                className="inline-flex w-fit items-center gap-2 pt-1 text-[0.9rem] font-semibold text-ink2 transition duration-300 ease-out hover:gap-3 hover:text-ink"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
