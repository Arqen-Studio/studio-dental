import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DoctorFlipCard } from '../../components/DoctorFlipCard'

type Doctor = {
  name: string
  creds: string
  summary: string
  about: string
  image: string
  highlights: string[]
}

const DOCTORS: Doctor[] = [
  {
    name: 'Dr. Yousaf Kamal',
    creds: 'BDS, MSc (Kings College London, UK), DDPH (RCS England), American Board Certified',
    summary: 'Highly skilled in general and cosmetic dentistry.',
    about:
      'Dr. Yousaf Kamal is known for thorough, compassionate dental care and strong treatment planning. With advanced qualifications from Kings College London and further training in implant and cosmetic procedures, he focuses on predictable, long-term smile outcomes.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=70',
    highlights: ['General dentistry', 'Cosmetic dentistry', 'Dental implants'],
  },
  {
    name: 'Dr. Nayab Farooq',
    creds: 'BDS, C-Endo',
    summary: 'Detail-focused endodontic and restorative specialist.',
    about:
      'Dr. Nayab Farooq delivers patient-focused care for root canal and restorative cases. Her approach prioritizes pain control, tooth preservation, and durable treatment outcomes tailored to each patient.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=70',
    highlights: ['Endodontics', 'Restorative care', 'Tooth preservation'],
  },
  {
    name: 'Dr. Umair Usman',
    creds: 'FCPS-R (CPSP, Pakistan), C. Restorative (Pakistan)',
    summary: 'Restorative expert balancing function and aesthetics.',
    about:
      'Dr. Umair Usman specializes in restorative rehabilitation with a conservative, evidence-based approach. He focuses on rebuilding function, improving bite harmony, and restoring smile confidence.',
    image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=70',
    highlights: ['Restorative dentistry', 'Aesthetic rebuilding', 'Functional bite care'],
  },
  {
    name: 'Dr. Amna Hassan',
    creds: 'BDS, FCPS (OMFS), International Certified Facial Aesthetician (AACME)',
    summary: 'OMFS specialist with facial aesthetic expertise.',
    about:
      'Dr. Amna Hassan combines oral and maxillofacial surgical expertise with certified facial aesthetics training. She is known for precise planning, careful execution, and patient comfort across complex treatments.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=70',
    highlights: ['OMFS specialist', 'Facial aesthetics', 'Surgical precision'],
  },
  {
    name: 'Dr. Aqsa Malik',
    creds: 'Advanced contemporary dentistry, Clearpath certified, IADSR certified',
    summary: 'Certified in aligners and contemporary smile workflows.',
    about:
      'Dr. Aqsa Malik provides modern clear-aligner and cosmetic treatment pathways with a practical, patient-friendly style. She focuses on clear communication, step-by-step planning, and natural-looking results.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=70',
    highlights: ['Aligner therapy', 'Cosmetic workflows', 'General dentistry'],
  },
]

const getDoctorsPerView = (width: number) => {
  if (width >= 1280) return 3
  if (width >= 768) return 2
  return 1
}

const getLoopedItems = <T,>(items: T[], start: number, count: number) => {
  if (items.length === 0) return []
  const total = Math.min(count, items.length)
  return Array.from({ length: total }, (_, idx) => items[(start + idx) % items.length])
}

export default function Doctors() {
  const [startIndex, setStartIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev' | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [cardsPerView, setCardsPerView] = useState(() =>
    typeof window === 'undefined' ? 3 : getDoctorsPerView(window.innerWidth),
  )
  const hasMultipleDoctors = DOCTORS.length > 1
  const visibleDoctors = getLoopedItems(DOCTORS, startIndex, cardsPerView)

  useEffect(() => {
    const onResize = () => setCardsPerView(getDoctorsPerView(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!slideDirection) return
    const timer = window.setTimeout(() => setSlideDirection(null), 450)
    return () => window.clearTimeout(timer)
  }, [slideDirection, startIndex])

  useEffect(() => {
    if (!hasMultipleDoctors || isPaused) return
    const timer = window.setInterval(() => {
      setSlideDirection('next')
      setStartIndex((prev) => (prev + 1) % DOCTORS.length)
    }, 4600)
    return () => window.clearInterval(timer)
  }, [hasMultipleDoctors, isPaused])

  const goPrev = () => {
    if (!hasMultipleDoctors) return
    setSlideDirection('prev')
    setStartIndex((prev) => (prev - 1 + DOCTORS.length) % DOCTORS.length)
  }

  const goNext = () => {
    if (!hasMultipleDoctors) return
    setSlideDirection('next')
    setStartIndex((prev) => (prev + 1) % DOCTORS.length)
  }

  return (
    <section id="doctors" className="bg-creamBrand py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mb-6 flex max-w-[760px] flex-col gap-3 md:mb-9">
          <Link
            to="/doctors"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2 transition hover:border-skyBrand/70 hover:bg-skyBrand/25 hover:text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
            Doctors
          </Link>
          <h2>Meet our dental specialists.</h2>
          <p className="max-w-[62ch] text-[1.02rem] text-muted">
            Highly qualified specialists in implantology, surgery, prosthodontics,
            periodontology, and general dentistry.
          </p>
        </div>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: `repeat(${visibleDoctors.length}, minmax(0, 1fr))` }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {visibleDoctors.map((d, idx) => {
            return (
              <article
                key={`${d.name}-${startIndex}-${idx}`}
                className={[
                  "group [perspective:1400px]",
                  slideDirection === 'next'
                    ? 'animate-[sd-slide-in-next_520ms_linear]'
                    : '',
                  slideDirection === 'prev'
                    ? 'animate-[sd-slide-in-prev_520ms_linear]'
                    : '',
                ].join(' ')}
                style={{ animationDelay: `${idx * 110}ms`, animationFillMode: 'both' }}
              >
                <DoctorFlipCard
                  name={d.name}
                  creds={d.creds}
                  about={d.about}
                  image={d.image}
                  highlights={d.highlights}
                  animationIndex={idx}
                />
              </article>
            )
          })}
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={!hasMultipleDoctors}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-skyBrand/25 bg-white text-ink2 shadow-soft-sm transition hover:-translate-y-0.5 hover:border-skyBrand/70 hover:text-ink hover:shadow-soft-md disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous doctors"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="rotate-180"
            >
              <use href="/svg/sprite.svg#icon-arrow-right" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!hasMultipleDoctors}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-skyBrand/25 bg-white text-ink shadow-soft-sm transition hover:-translate-y-0.5 hover:border-skyBrand/70 hover:shadow-soft-md disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next doctors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <use href="/svg/sprite.svg#icon-arrow-right" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
