import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section id="about" className="bg-creamBrand py-10 md:py-16">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 px-5 md:px-8 lg:grid-cols-2 lg:gap-12">
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
            <strong className="block text-3xl font-extrabold leading-none text-skyBrand">17+</strong>
            <span className="mt-1 block text-[0.78rem] opacity-85">Years of experience</span>
          </div>
        </div>

        <div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
            About Studio Dental
          </span>
          <h2 className="mt-3 text-balance">Dental and implantology clinics in Vilnius and Kaunas.</h2>
          <p className="mt-4 max-w-[60ch] text-[1.05rem] text-muted">
            Specialized Studio Dental clinics bring together top-level dental professionals,
            from conference speakers to medical doctors. We provide diagnostics,
            implantology, orthodontics, and restorative dentistry with modern
            technologies and high-quality patient service.
          </p>

          <ul className="mt-6 grid gap-3">
            <li className="flex items-start gap-3 text-[0.98rem] text-ink2">
              <span className="mt-1 inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-skyBrand text-ink" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                  <use href="/svg/sprite.svg#icon-check" />
                </svg>
              </span>
              All dental services in one place
            </li>
            <li className="flex items-start gap-3 text-[0.98rem] text-ink2">
              <span className="mt-1 inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-skyBrand text-ink" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                  <use href="/svg/sprite.svg#icon-check" />
                </svg>
              </span>
              Modern diagnostics and treatment technologies
            </li>
            <li className="flex items-start gap-3 text-[0.98rem] text-ink2">
              <span className="mt-1 inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-skyBrand text-ink" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                  <use href="/svg/sprite.svg#icon-check" />
                </svg>
              </span>
              Highly qualified dentists and specialists
            </li>
            <li className="flex items-start gap-3 text-[0.98rem] text-ink2">
              <span className="mt-1 inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-skyBrand text-ink" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
                  <use href="/svg/sprite.svg#icon-check" />
                </svg>
              </span>
              Patient-focused service and transparent care plans
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-skyBrand px-6 py-3 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky"
            >
              Contact clinics
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-black/10 bg-transparent px-6 py-3 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-ink hover:text-creamBrand hover:shadow-soft-md"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
