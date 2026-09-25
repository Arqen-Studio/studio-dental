import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TEAM_DOCTORS } from '../data/teamDoctors'

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
  'absolute z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-transparent bg-skyBrand text-ink shadow-soft-md transition hover:bg-skyBrand/90 hover:shadow-sky disabled:pointer-events-none disabled:opacity-30'

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
    <section className="bg-[#f9f9f9] px-5 py-9 md:px-8 md:py-12" aria-labelledby="home-doctors-heading">
      <div className="mx-auto w-full max-w-[1240px]">
        <h2
          id="home-doctors-heading"
          className="text-center text-[clamp(1.45rem,2.6vw,2.1rem)] font-semibold tracking-tight text-ink"
        >
          Doctors
        </h2>

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
                className="w-[min(240px,calc(100vw-2rem))] shrink-0 snap-start overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(15,27,36,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(15,27,36,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skyBrand sm:w-[260px] md:w-[280px]"
              >
              <article className="flex h-full flex-col">
                <div className="aspect-[4/5] flex-none bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-300">
                  {doctor.image && (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col bg-white px-3 pb-3 pt-2.5">
                  <h3 className="text-[0.84rem] font-bold leading-tight text-skyBrand sm:text-[0.88rem]">{doctor.name}</h3>
                  <p className="mt-1.5 text-[0.64rem] leading-snug text-muted sm:text-[0.66rem]">{doctor.role}</p>
                  <p className="mt-1 line-clamp-2 text-[0.58rem] leading-snug text-muted sm:text-[0.6rem]">{doctor.creds}</p>
                  {doctor.clinic && (
                    <div className="mt-auto pt-3">
                      <span className="inline-flex w-fit max-w-full rounded-md bg-skyBrand/15 px-2 py-1 text-[0.58rem] font-medium leading-snug text-skyBrand sm:text-[0.6rem]">
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

        <div className="mt-8 flex justify-center md:mt-10">
          <Link
            to="/doctors"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-skyBrand px-9 py-3 text-[0.88rem] font-semibold text-ink shadow-soft-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky"
          >
            All doctors
          </Link>
        </div>
      </div>
    </section>
  )
}
