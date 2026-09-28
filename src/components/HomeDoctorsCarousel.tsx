import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TEAM_DOCTORS } from '../data/teamDoctors'
import SectionHeader from './SectionHeader'

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
    </svg>
  )
}

const navBtnBase =
  'absolute z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-transparent bg-brand text-on-brand shadow-1 transition hover:bg-brand-hover hover:shadow-2 disabled:pointer-events-none disabled:opacity-30'

export default function HomeDoctorsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const max = scrollWidth - clientWidth
    setCanPrev(scrollLeft > 8)
    setCanNext(scrollLeft < max - 8)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    const ro = new ResizeObserver(updateScrollState)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      ro.disconnect()
    }
  }, [updateScrollState])

  const scrollByDir = useCallback((dir: -1 | 1) => {
    const el = scrollRef.current
    if (!el) return
    const slide = el.querySelector('[data-doctor-slide]') as HTMLElement | null
    if (!slide) return

    const styles = getComputedStyle(el)
    const gapRaw = styles.columnGap || styles.gap || '16px'
    const gapPx = Number.parseFloat(gapRaw) || 16
    const step = slide.getBoundingClientRect().width + gapPx

    const maxScroll = el.scrollWidth - el.clientWidth
    const target = Math.max(0, Math.min(maxScroll, el.scrollLeft + dir * step))
    el.scrollTo({ left: target, behavior: 'smooth' })
  }, [])

  return (
    <section className="bg-surface-sunken px-5 py-9 md:px-8 md:py-12" aria-labelledby="home-doctors-heading">
      <div className="mx-auto w-full page-shell">
        <SectionHeader
          id="home-doctors-heading"
          eyebrow="Doctors"
          title="Meet the team"
          action={
            <Link to="/doctors" className="sd-btn sd-btn--secondary sd-btn--md">
              See all doctors
            </Link>
          }
        />

        <div className="relative mt-7 md:mt-8">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TEAM_DOCTORS.map((doctor) => (
              <Link
                key={doctor.name}
                to={`/doctors/${doctor.slug}`}
                data-doctor-slide
                className="w-[min(240px,calc(100vw-2rem))] shrink-0 snap-start overflow-hidden rounded-lg border border-line bg-surface-raised shadow-1 transition-shadow duration-300 hover:shadow-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-[260px] md:w-[280px]"
              >
              <article className="flex h-full flex-col">
                <div className="aspect-[4/5] flex-none bg-surface-sunken">
                  {doctor.image && (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col bg-surface-raised px-3 pb-3 pt-2.5">
                  <h3 className="h4 text-brand">{doctor.name}</h3>
                  {doctor.role && <p className="mt-1.5 small text-ink-muted">{doctor.role}</p>}
                  {doctor.creds && <p className="mt-1 line-clamp-2 small text-ink-muted">{doctor.creds}</p>}
                  {doctor.clinic && (
                    <div className="mt-auto pt-3">
                      <span className="inline-flex w-fit max-w-full rounded-md bg-brand-soft px-2 py-1 small font-medium text-brand">
                        {doctor.clinic}
                      </span>
                    </div>
                  )}
                </div>
              </article>
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous doctors"
            disabled={!canPrev}
            onClick={() => scrollByDir(-1)}
            className={`${navBtnBase} left-2 top-[38%] h-9 w-9 sm:left-0 sm:h-10 sm:w-10 sm:-translate-x-1/2`}
          >
            <ChevronIcon direction="left" />
          </button>

          <button
            type="button"
            aria-label="Next doctors"
            disabled={!canNext}
            onClick={() => scrollByDir(1)}
            className={`${navBtnBase} right-2 top-[38%] h-9 w-9 sm:right-0 sm:h-10 sm:w-10 sm:translate-x-1/2`}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

      </div>
    </section>
  )
}
