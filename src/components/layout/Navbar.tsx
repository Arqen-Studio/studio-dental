import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#why', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-[100] flex h-[78px] items-center border-b border-transparent transition duration-300 ease-out',
        scrolled ? 'bg-skyBrand text-ink shadow-soft-md' : 'bg-transparent text-creamBrand',
      ].join(' ')}
    >
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-6 px-5 md:px-8">
        <Link to="/#home" className="inline-flex items-center gap-3 text-[1.05rem] font-bold tracking-tight" aria-label="Studio Dental home">
          <span
            className={[
              'inline-flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 ease-out',
              scrolled ? 'bg-ink text-creamBrand' : 'bg-creamBrand text-skyBrand',
            ].join(' ')}
            aria-hidden="true"
          >
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
              <path
                d="M16 3c-4 0-6 2.5-6 5 0 2 .8 3.6 1.6 6.2.9 2.8 1.4 5.6 1.4 8.3 0 2.8 1 5.5 3 5.5s3-2.7 3-5.5c0-2.7.5-5.5 1.4-8.3C21.2 11.6 22 10 22 8c0-2.5-2-5-6-5Z"
                fill="currentColor"
              />
              <circle cx="11" cy="9" r="1.5" fill="#FBFBFA" opacity=".85" />
            </svg>
          </span>
          <span>
            Studio<span className="ml-0.5 font-normal opacity-80">Dental</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[0.95rem] font-medium lg:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              to={`/${l.href}`}
              onClick={() => setOpen(false)}
              className="relative py-1 opacity-95 transition duration-300 ease-out hover:opacity-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+10000000000" className="inline-flex items-center gap-2 text-[0.9rem] font-medium opacity-95" aria-label="Call the clinic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>(000) 000-0000</span>
          </a>
          <Link
            to="/#contact"
            className={[
              'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent px-6 py-3 text-[0.95rem] font-semibold transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft-md',
              scrolled ? 'bg-skyBrand text-ink hover:bg-skyBrand/90 hover:shadow-sky' : 'bg-creamBrand text-ink',
            ].join(' ')}
          >
            Book Visit
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/10 transition duration-300 ease-out group-hover:translate-x-0.5" aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={['h-0.5 w-[22px] rounded bg-current transition duration-300 ease-out', open ? 'translate-y-[7px] rotate-45' : ''].join(' ')} />
          <span className={['h-0.5 w-[22px] rounded bg-current transition duration-300 ease-out', open ? 'opacity-0' : ''].join(' ')} />
          <span className={['h-0.5 w-[22px] rounded bg-current transition duration-300 ease-out', open ? '-translate-y-[7px] -rotate-45' : ''].join(' ')} />
        </button>
      </div>

      <div
        className={[
          'fixed left-0 right-0 top-[78px] border-b border-black/10 bg-skyBrand px-5 pb-10 pt-6 text-ink shadow-soft-md transition duration-300 ease-out md:hidden',
          open ? 'translate-y-0' : '-translate-y-[110%]',
        ].join(' ')}
        role="dialog"
        aria-label="Mobile menu"
      >
        <nav className="flex flex-col gap-1 text-[1.25rem] font-semibold" aria-label="Mobile primary">
          {LINKS.map((l) => (
            <Link key={l.href} to={`/${l.href}`} onClick={() => setOpen(false)} className="border-b border-black/10 py-3">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/#contact"
          className="mt-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-skyBrand px-6 py-3 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky"
          onClick={() => setOpen(false)}
        >
          Book Visit
        </Link>
      </div>
    </header>
  )
}
