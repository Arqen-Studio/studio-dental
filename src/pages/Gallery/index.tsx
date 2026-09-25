import { Link } from 'react-router-dom'

const GALLERY = [
  'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1400&q=70',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=70',
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mb-6 flex max-w-[760px] flex-col gap-3 md:mb-9">
          <Link
            to="/gallery"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2 transition hover:border-brand/70 hover:bg-brand/25 hover:text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Clinics
          </Link>
          <h2>A closer look at our modern clinic spaces.</h2>
          <p className="max-w-[60ch] text-[1.02rem] text-muted">
            Professional treatment environments in Vilnius and Kaunas designed
            for comfort, safety, and efficient care delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY.map((src, idx) => (
            <div key={src} className="overflow-hidden rounded-lg border border-black/10 bg-white">
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
