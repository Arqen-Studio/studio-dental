import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-creamBrand py-16 pb-6 md:py-20">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-black/10 pb-10 md:grid-cols-[1.1fr_2fr] md:gap-16">
          <div>
            <div className="inline-flex items-center gap-3 text-[1.05rem] font-bold tracking-tight text-ink" aria-label="Studio Dental">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-skyBrand text-ink" aria-hidden="true">
                <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
                  <path
                    d="M16 3c-4 0-6 2.5-6 5 0 2 .8 3.6 1.6 6.2.9 2.8 1.4 5.6 1.4 8.3 0 2.8 1 5.5 3 5.5s3-2.7 3-5.5c0-2.7.5-5.5 1.4-8.3C21.2 11.6 22 10 22 8c0-2.5-2-5-6-5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                Studio<span className="ml-0.5 font-normal opacity-80">Dental</span>
              </span>
            </div>
            <p className="mt-4 max-w-[42ch] text-[0.95rem] leading-relaxed text-muted">
              Modern, aesthetic dental care designed around how you actually
              want to feel walking in &mdash; and out.
            </p>
            <div className="mt-5 flex gap-2" aria-label="Social links">
              {['Instagram', 'Twitter', 'Facebook'].map((s) => (
                <Link
                  key={s}
                  to="/"
                  aria-label={s}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.04] text-[0.95rem] font-bold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand"
                >
                  {s.charAt(0)}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-7 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[0.12em] text-ink">Clinic</h4>
              <Link className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink" to="/#about">
                About
              </Link>
              <Link className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink" to="/#services">
                Services
              </Link>
              <Link className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink" to="/#why">
                Why us
              </Link>
              <Link className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink" to="/#contact">
                Book visit
              </Link>
            </div>
            <div>
              <h4 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[0.12em] text-ink">Visit</h4>
              <p className="my-1.5 text-[0.92rem] text-muted">221 Aurora Lane</p>
              <p className="my-1.5 text-[0.92rem] text-muted">Suite 4, San Francisco, CA</p>
              <p className="my-1.5 text-[0.92rem] text-muted">Mon&ndash;Sat &middot; 9am&ndash;7pm</p>
            </div>
            <div>
              <h4 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[0.12em] text-ink">Contact</h4>
              <a className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink" href="tel:+10000000000">
                (000) 000-0000
              </a>
              <a className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink" href="mailto:hello@studiodental.com">
                hello@studiodental.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[0.82rem] text-muted">
          <span>&copy; {new Date().getFullYear()} Studio Dental. All rights reserved.</span>
          <div className="flex gap-6">
            <Link className="transition hover:text-ink" to="/">
              Privacy
            </Link>
            <Link className="transition hover:text-ink" to="/">
              Terms
            </Link>
            <Link className="transition hover:text-ink" to="/">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
