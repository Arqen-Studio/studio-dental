import SectionHeader from "../../components/SectionHeader";

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
        <SectionHeader
          level={1}
          eyebrow="Clinics"
          title="A closer look at our modern clinic spaces."
          lead="Treatment rooms at DHA Phase II and F-7 Markaz, designed for comfort, safety and efficient care."
          className="mb-8 md:mb-10"
        />

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
