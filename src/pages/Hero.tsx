import { Link } from 'react-router-dom'

const HERO_VIDEO =
  'https://cdn.coverr.co/videos/coverr-a-dentist-checking-a-patients-teeth-4728/1080p.mp4'

const HERO_POSTER =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=60'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden text-creamBrand">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15, 27, 36, 0.55) 0%, rgba(15, 27, 36, 0.35) 45%, rgba(15, 27, 36, 0.75) 100%), linear-gradient(120deg, rgba(47, 131, 184, 0.35) 0%, rgba(135, 206, 250, 0.05) 60%)',
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-[calc(78px+2rem)] md:px-8">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.85rem] font-medium backdrop-blur">
          <span
            className="h-2 w-2 rounded-full bg-skyBrand"
            style={{ boxShadow: '0 0 0 4px rgba(135, 206, 250, 0.3)' }}
            aria-hidden="true"
          />{' '}
          Now accepting new patients
        </span>

        <h1 className="mb-5 text-balance text-[clamp(2.6rem,6.5vw,5.25rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-creamBrand">
          Gentle, modern dental care{' '}
          <em
            className="not-italic font-medium"
            style={{
              background: 'linear-gradient(90deg, #87cefa 0%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            designed around you.
          </em>
        </h1>

        <p className="mb-8 max-w-[58ch] text-[clamp(1rem,1.1vw+0.5rem,1.2rem)] leading-relaxed text-creamBrand/85">
          Studio Dental blends advanced technology with a warm, aesthetic
          experience — so every visit feels calm, clear, and genuinely good.
        </p>

        <div className="mb-10 flex flex-wrap items-center gap-3">
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-skyBrand px-6 py-3 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky"
          >
            Book an appointment
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/10" aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
          <Link
            to="/#services"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-creamBrand px-6 py-3 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft-md"
          >
            Explore services
          </Link>
        </div>

        <div className="flex max-w-[640px] flex-wrap items-center gap-5 rounded-lg border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
          <div className="flex flex-col gap-1">
            <strong className="text-[1.15rem] font-bold text-creamBrand">4.9 ★</strong>
            <span className="text-[0.82rem] text-creamBrand/70">1.2k+ happy smiles</span>
          </div>
          <div className="hidden h-10 w-px bg-white/20 md:block" aria-hidden="true" />
          <div className="flex flex-col gap-1">
            <strong className="text-[1.15rem] font-bold text-creamBrand">15+ yrs</strong>
            <span className="text-[0.82rem] text-creamBrand/70">of trusted care</span>
          </div>
          <div className="hidden h-10 w-px bg-white/20 md:block" aria-hidden="true" />
          <div className="flex flex-col gap-1">
            <strong className="text-[1.15rem] font-bold text-creamBrand">Same-day</strong>
            <span className="text-[0.82rem] text-creamBrand/70">emergency visits</span>
          </div>
        </div>
      </div>

      <Link
        to="/#services"
        className="absolute bottom-7 left-1/2 hidden h-[42px] w-[26px] -translate-x-1/2 items-start justify-center rounded-full border border-white/60 pt-1.5 md:inline-flex"
        aria-label="Scroll to next section"
      >
        <span className="h-2 w-[3px] rounded bg-creamBrand animate-[sd-scroll_1.8s_cubic-bezier(0.22,1,0.36,1)_infinite]" />
      </Link>
    </section>
  )
}
