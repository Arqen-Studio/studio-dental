import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section id="about" className="bg-creamBrand py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-skyBrand/20 shadow-soft-lg transition duration-500 ease-out hover:rotate-0 lg:rotate-[-1.5deg]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=70"
              alt="A bright, modern dental clinic interior"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 right-0 rotate-[3deg] rounded-md bg-ink px-5 py-4 text-creamBrand shadow-soft-lg">
            <strong className="block text-3xl font-extrabold leading-none text-skyBrand">15+</strong>
            <span className="mt-1 block text-[0.78rem] opacity-85">Years caring for smiles</span>
          </div>
        </div>

        <div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
            About the studio
          </span>
          <h2 className="mt-3 text-balance">Modern dentistry, with a genuinely human touch.</h2>
          <p className="mt-4 max-w-[60ch] text-[1.05rem] text-muted">
            We founded Studio Dental to rethink the whole dental experience —
            from the way our space feels, to the tools we use, to how we talk
            with you. Calm, clear, and built around what you actually need.
          </p>

          <ul className="mt-6 grid gap-3">
            <li className="flex items-start gap-3 text-[0.98rem] text-ink2">
              <span className="mt-1 inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-skyBrand text-ink" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Transparent pricing — no surprise bills
            </li>
            <li className="flex items-start gap-3 text-[0.98rem] text-ink2">
              <span className="mt-1 inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-skyBrand text-ink" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Digital scans, clear aligners, 3D imaging
            </li>
            <li className="flex items-start gap-3 text-[0.98rem] text-ink2">
              <span className="mt-1 inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-skyBrand text-ink" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Dentists who explain everything in plain language
            </li>
            <li className="flex items-start gap-3 text-[0.98rem] text-ink2">
              <span className="mt-1 inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-skyBrand text-ink" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              A calm, aesthetic space designed to lower anxiety
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-skyBrand px-6 py-3 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky"
            >
              Meet the team
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-black/10 bg-transparent px-6 py-3 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-ink hover:text-creamBrand hover:shadow-soft-md"
            >
              What we offer
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
