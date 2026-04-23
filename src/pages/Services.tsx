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
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
        <use href="/svg/sprite.svg#icon-tooth" />
      </svg>
    ),
  },
  {
    title: 'Cosmetic & Whitening',
    desc: 'Veneers, bonding, and professional whitening that bring out a confident, natural glow.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
        <use href="/svg/sprite.svg#icon-star-outline" />
      </svg>
    ),
  },
  {
    title: 'Invisalign & Aligners',
    desc: 'Discreet, custom-made clear aligners that gently guide your teeth into their best position.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
        <use href="/svg/sprite.svg#icon-aligners" />
      </svg>
    ),
  },
  {
    title: 'Implants & Crowns',
    desc: 'Durable, natural-looking tooth replacements designed and placed with precision.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
        <use href="/svg/sprite.svg#icon-implants" />
      </svg>
    ),
  },
  {
    title: "Kids' Dentistry",
    desc: 'A friendly, calming environment where little ones learn to love dental visits.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
        <use href="/svg/sprite.svg#icon-kids" />
      </svg>
    ),
  },
  {
    title: 'Emergency Care',
    desc: 'Same-day appointments for pain, trauma, or anything that just can\u2019t wait.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
        <use href="/svg/sprite.svg#icon-bolt" />
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
                to="/contact-us"
                className="inline-flex w-fit items-center gap-2 pt-1 text-[0.9rem] font-semibold text-ink2 transition duration-300 ease-out hover:gap-3 hover:text-ink"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <use href="/svg/sprite.svg#icon-arrow-right" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
