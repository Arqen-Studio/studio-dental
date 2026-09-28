import { Link } from 'react-router-dom'

const GALLERY = [
  '/images/gallery/g1.jpg',
  '/images/gallery/g2.jpg',
  '/images/gallery/g3.jpg',
  '/images/gallery/g4.jpg',
  '/images/gallery/g5.jpg',
  '/images/gallery/g6.jpg',
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-surface-raised py-10 md:py-16">
      <div className="mx-auto w-full page-shell px-5 md:px-8">
        <div className="mb-6 flex max-w-[38rem] flex-col gap-3 md:mb-9">
          <Link
            to="/gallery"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2 transition hover:border-brand/70 hover:bg-brand/25 hover:text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Clinics
          </Link>
          <h1 className="text-[clamp(2rem,1.5rem+2.2vw,3.1rem)] leading-[1.08]">A closer look at our modern clinic spaces.</h1>
          <p className="max-w-[60ch] text-[1.02rem] text-muted">
            Treatment rooms at our two Islamabad clinics, DHA Phase II and F-7
            Markaz, designed for comfort, safety, and efficient care delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY.map((src, idx) => (
            <div key={src} className="overflow-hidden rounded-lg border border-line bg-surface-raised">
              <img
                src={src}
                alt={`Studio Dental gallery ${idx + 1}`}
                loading="lazy"
                className="h-44 w-full object-cover transition duration-500 ease-out hover:scale-105 md:h-56"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
