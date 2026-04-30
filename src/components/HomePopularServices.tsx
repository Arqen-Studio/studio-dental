import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type PopularService = {
  title: string
  description: string
  image: string
  imageAlt: string
}

const POPULAR_SERVICES: PopularService[] = [
  {
    title: 'Implantation "All teeth on 4 implants"',
    description: 'Restoration of all teeth in the jaw using advanced techniques.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=72',
    imageAlt: 'Modern dental treatment room',
  },
  {
    title: 'Dental implantation',
    description:
      'A method of restoring teeth when one, several or all teeth are missing.',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=72',
    imageAlt: 'Dental implant consultation',
  },
  {
    title: 'Teeth straightening with aligners',
    description:
      'A virtually invisible method of straightening teeth that allows you to smile freely.',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=72',
    imageAlt: 'Patient smiling during orthodontic care',
  },
  {
    title: 'Teeth straightening with braces',
    description: 'An effective way to achieve an aesthetically pleasing smile.',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=72',
    imageAlt: 'Orthodontic braces close-up',
  },
  {
    title: 'Prosthetics: teeth and implants',
    description:
      'Restores teeth and bite function and provides an aesthetic smile.',
    image:
      'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=800&q=72',
    imageAlt: 'Dental prosthetics and models',
  },
  {
    title: 'Dental fillings',
    description:
      'Required for teeth damaged by decay or with long-standing fillings.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=72',
    imageAlt: 'Dental restoration work',
  },
]

export default function HomePopularServices() {
  return (
    <section className="bg-[#f9f9f9] px-5 py-9 md:px-8 md:py-12" aria-labelledby="popular-services-heading">
      <div className="mx-auto w-full max-w-[1240px]">
        <h2
          id="popular-services-heading"
          className="mb-7 text-center text-[clamp(1.5rem,2.8vw,2.25rem)] font-semibold tracking-tight text-ink md:mb-8"
        >
          Most popular services
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {POPULAR_SERVICES.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-xl border border-black/8 bg-white shadow-soft-sm transition duration-300 hover:border-skyBrand/35 hover:shadow-soft-md"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-t-xl bg-ink/5">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 py-6 md:px-7 md:py-7">
                <h3 className="text-[1.05rem] font-bold leading-snug text-ink md:text-[1.08rem]">{item.title}</h3>
                <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-muted md:text-[0.9rem]">
                  {item.description}
                </p>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-1 text-[0.88rem] font-medium text-skyBrand transition hover:text-ink hover:underline"
                >
                  In detail
                  <ChevronRight size={14} strokeWidth={2} aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:mt-10">
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-skyBrand px-10 py-3.5 text-[0.95rem] font-semibold text-ink shadow-soft-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky"
          >
            All services
          </Link>
        </div>
      </div>
    </section>
  )
}
