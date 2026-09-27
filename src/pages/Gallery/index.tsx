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
            className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-4 py-1.5 eyebrow text-ink transition hover:border-brand/70 hover:bg-brand/25 hover:text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Clinics
          </Link>
          <h2 className="mt-4 h2">A closer look at our modern clinic spaces.</h2>
          <p className="max-w-[60ch] body text-ink-muted">
            Professional treatment environments in Vilnius and Kaunas designed
            for comfort, safety, and efficient care delivery.
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
