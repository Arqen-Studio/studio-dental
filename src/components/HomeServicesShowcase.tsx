import type { LucideIcon } from 'lucide-react'
import { Anchor, ArrowRight, Baby, BarChart3, Rows3, Star, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ServiceData } from '../data/services'
import { SERVICES_DATA } from '../data/services'
import { useAutoplayVideo } from '../hooks/useAutoplayVideo'

/** Same slot count as the legacy home showcase (1 featured + 5 tiles). IDs must exist in SERVICES_DATA. */
const HOME_SHOWCASE_SERVICE_IDS = [
  'oral-hygiene',
  'teeth-straightening',
  'dental-implantation',
  'tooth-extraction',
  'dental-fillings',
  'childrens-dentistry',
] as const

function servicesForHomeShowcase(): ServiceData[] {
  const byId = new Map(SERVICES_DATA.map((s) => [s.id, s]))
  return HOME_SHOWCASE_SERVICE_IDS.flatMap((id) => {
    const s = byId.get(id)
    return s ? [s] : []
  })
}

type ShowcaseItem = {
  serviceId: string
  title: string
  desc: string
  Icon: LucideIcon
  featured?: boolean
}

const SHOWCASE_ICONS: LucideIcon[] = [BarChart3, Rows3, Anchor, Star, Zap, Baby]

const SHOWCASE: ShowcaseItem[] = servicesForHomeShowcase().map((s, i) => ({
  serviceId: s.id,
  title: s.title,
  desc: s.subtitle,
  Icon: SHOWCASE_ICONS[i % SHOWCASE_ICONS.length] ?? BarChart3,
  featured: i === 0,
}))

function IconBubble({ Icon, featured }: { Icon: LucideIcon; featured?: boolean }) {
  const size = featured ? 26 : 22
  return (
    <span
      className={[
        'inline-flex shrink-0 items-center justify-center rounded-2xl border shadow-soft-sm',
        featured
          ? 'h-12 w-12 border-white/35 bg-white/15 text-white backdrop-blur-sm'
          : 'h-11 w-11 border-[#3F6F4B]/25 bg-[#3F6F4B]/10 text-[#3F6F4B]',
      ].join(' ')}
      aria-hidden="true"
    >
      <Icon size={size} strokeWidth={2} className="shrink-0" />
    </span>
  )
}

export default function HomeServicesShowcase({
  omitAnchorId = false,
}: {
  omitAnchorId?: boolean
} = {}) {
  const featuredVideoRef = useAutoplayVideo()
  const [featured, ...rest] = SHOWCASE

  return (
    <section
      {...(!omitAnchorId ? { id: 'services' } : {})}
      className="relative overflow-hidden bg-[#F4F7F2] py-10 md:py-16"
      aria-labelledby="home-services-heading"
    >
      <div
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#3F6F4B]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-16 h-64 w-64 rounded-full bg-brand/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[62rem] px-5 md:px-8">
        <h2
          id="home-services-heading"
          className="text-center text-[clamp(1.45rem,2.6vw,2.1rem)] font-semibold tracking-tight text-ink"
        >
          Services
        </h2>

        <div className="mt-7 mb-7 flex flex-col gap-5 md:mt-8 md:mb-9 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[42rem]">
            {/* <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-white/80 px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink2 shadow-soft-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3F6F4B]" aria-hidden="true" />
              Our services
            </span> */}
            <p className="mt-4 font-heading text-[clamp(1.55rem,2.6vw,2.35rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
              Everything your smile needs, in one place.
            </p>
            <p className="mt-3 max-w-[52ch] text-[0.95rem] leading-relaxed text-muted">
              From check-ups and hygiene to fillings, crowns, implants, aligners and
              dental care for children. A few are below, and every treatment we offer is
              listed on the services page with prices for both clinics.
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-brand/35 bg-white px-5 text-[0.8rem] font-semibold text-ink2 shadow-soft-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#3F6F4B]/80 hover:text-ink hover:shadow-soft-md lg:self-auto"
          >
            All services & prices
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#3F6F4B]/20 text-ink transition group-hover:bg-[#3F6F4B]/35">
              <ArrowRight size={11} strokeWidth={2.5} aria-hidden />
            </span>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          <article
            className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-black/10 shadow-soft-md sm:col-span-2 sm:min-h-[300px] lg:col-span-2 lg:row-span-2 lg:min-h-[420px]"
          >
            <video
              ref={featuredVideoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/clinic-room-poster.jpg"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
            >
              <source src="/videos/clinic-room-720.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/10"
              aria-hidden="true"
            />
            <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
              <IconBubble Icon={featured.Icon} featured />
              <h3 className="mt-5 text-[1.35rem] font-extrabold leading-tight text-white sm:text-[1.5rem]">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-[40ch] text-[0.88rem] leading-relaxed text-white/90 sm:text-[0.92rem]">
                {featured.desc}
              </p>
              <Link
                to={`/services/${featured.serviceId}`}
                className="mt-auto inline-flex w-fit items-center gap-2 text-[0.82rem] font-semibold text-white underline-offset-4 transition hover:text-white hover:underline"
              >
                Read about this treatment
                <ArrowRight size={12} strokeWidth={2.25} className="text-white opacity-90" aria-hidden />
              </Link>
              <Link
                to="/services"
                className="mt-3 inline-flex w-fit items-center gap-2 text-[0.82rem] font-semibold text-white/80 underline-offset-4 transition hover:text-white hover:underline"
              >
                Explore all treatments
                <ArrowRight size={12} strokeWidth={2.25} className="text-white opacity-90" aria-hidden />
              </Link>
            </div>
          </article>

          {rest.map((item) => (
            <article
              key={item.serviceId}
              className="reveal flex min-h-[200px] flex-col rounded-2xl border border-black/8 bg-white/95 p-5 shadow-soft-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#3F6F4B]/28 hover:shadow-soft-md sm:min-h-0"
            >
              <div className="flex items-start gap-3">
                <IconBubble Icon={item.Icon} />
                <div className="min-w-0 flex-1">
                  <h3 className="text-[1.02rem] font-extrabold leading-snug text-[#3F6F4B]">{item.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
              <Link
                to={`/services/${item.serviceId}`}
                className="mt-auto flex items-center gap-1.5 border-t border-[#3F6F4B]/18 pt-3.5 text-[0.8rem] font-semibold text-[#3F6F4B] underline-offset-4 transition hover:underline"
              >
                Read more
                <ArrowRight size={12} strokeWidth={2.25} aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
