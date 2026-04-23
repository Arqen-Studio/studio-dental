const GALLERY = [
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=70',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=70',
  'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1200&q=70',
  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=70',
  'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=70',
  'https://images.unsplash.com/photo-1583947581924-a6d0817ce2c2?auto=format&fit=crop&w=1200&q=70',
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mb-8 flex max-w-[760px] flex-col gap-3 md:mb-12">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
            Gallery
          </span>
          <h2>A closer look at our clinic.</h2>
          <p className="max-w-[60ch] text-[1.02rem] text-muted">
            Clean, calm spaces and modern equipment designed to make every visit feel comfortable.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY.map((src, idx) => (
            <div key={src} className="overflow-hidden rounded-lg border border-black/10 bg-creamBrand">
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
