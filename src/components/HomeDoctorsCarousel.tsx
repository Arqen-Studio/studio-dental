import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TEAM_DOCTORS } from '../data/teamDoctors'
import SectionHeader from './SectionHeader'
import { TeamDoctorCard } from './TeamDoctorCard'

/** Doctors without a confirmed role stay off the homepage until their profiles are complete. */
const CAROUSEL_DOCTORS = TEAM_DOCTORS.filter((doctor) => doctor.role)

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
            {CAROUSEL_DOCTORS.map((doctor) => (
              <div
                key={doctor.slug}
                data-doctor-slide
                className="w-[min(260px,calc(100vw-4rem))] shrink-0 snap-start md:w-[280px]"
              >
                <TeamDoctorCard {...doctor} />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous doctors"
            disabled={!canPrev}
            onClick={() => scrollByDir(-1)}
            className={`${navBtnBase} left-2 top-[38%] h-11 w-11 sm:left-0 sm:-translate-x-1/2`}
          >
            <ChevronIcon direction="left" />
          </button>

          <button
            type="button"
            aria-label="Next doctors"
            disabled={!canNext}
            onClick={() => scrollByDir(1)}
            className={`${navBtnBase} right-2 top-[38%] h-11 w-11 sm:right-0 sm:translate-x-1/2`}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

      </div>
    </section>
  )
}
