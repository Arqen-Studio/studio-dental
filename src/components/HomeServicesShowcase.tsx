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
        'inline-flex shrink-0 items-center justify-center rounded-2xl border',
        featured
          ? 'h-12 w-12 border-raw-porcelain/35 bg-raw-porcelain/15 text-raw-porcelain backdrop-blur-sm'
          : 'h-11 w-11 border-brand/25 bg-brand-soft text-brand',
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
      className="relative overflow-hidden bg-surface-sunken py-10 md:py-16"
      aria-labelledby="home-services-heading"
    >

      <div className="relative z-10 mx-auto w-full page-shell px-5 md:px-8">
        <h2
          id="home-services-heading"
          className="text-center text-[clamp(1.45rem,2.6vw,2.1rem)] font-semibold tracking-tight text-ink"
        >
          Services
        </h2>

        <div className="mt-7 mb-7 flex flex-col gap-5 md:mt-8 md:mb-9 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[42rem]">
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
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-ink bg-transparent px-5 text-[0.8rem] font-semibold text-ink transition duration-300 hover:bg-ink hover:text-surface lg:self-auto"
          >
            All services & prices
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-soft text-ink transition">
              <ArrowRight size={11} strokeWidth={2.5} aria-hidden />
            </span>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          <article
            className="group relative flex min-h-[14rem] flex-col overflow-hidden rounded-2xl border border-line shadow-1 sm:col-span-2 sm:min-h-[15rem] lg:col-span-2 lg:row-span-2 lg:min-h-[21rem]"
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
              className="absolute inset-0 bg-scrim"
              aria-hidden="true"
            />
            <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
              <IconBubble Icon={featured.Icon} featured />
              <h3 className="mt-5 text-[1.35rem] font-extrabold leading-tight text-raw-porcelain sm:text-[1.5rem]">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-[40ch] text-[0.88rem] leading-relaxed text-raw-porcelain/90 sm:text-[0.92rem]">
                {featured.desc}
              </p>
              <Link
                to={`/services/${featured.serviceId}`}
                className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 text-[0.82rem] font-semibold text-raw-porcelain underline-offset-4 transition hover:text-raw-porcelain hover:underline"
              >
                Read about this treatment
                <ArrowRight size={12} strokeWidth={2.25} className="text-raw-porcelain opacity-90" aria-hidden />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-11 w-fit items-center gap-2 text-[0.82rem] font-semibold text-raw-porcelain/80 underline-offset-4 transition hover:text-raw-porcelain hover:underline"
              >
                Explore all treatments
                <ArrowRight size={12} strokeWidth={2.25} className="text-raw-porcelain opacity-90" aria-hidden />
              </Link>
            </div>
          </article>

          {rest.map((item) => (
            <article
              key={item.serviceId}
              className="flex min-h-[10rem] flex-col gap-5 rounded-2xl border border-line bg-surface-raised p-5 shadow-1 transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-2 sm:min-h-0"
            >
              <div className="flex items-start gap-3">
                <IconBubble Icon={item.Icon} />
                <div className="min-w-0 flex-1">
                  <h3 className="text-[1.02rem] font-extrabold leading-snug text-brand">{item.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
              <Link
                to={`/services/${item.serviceId}`}
                className="mt-auto flex min-h-11 items-center gap-1.5 border-t border-line pt-3.5 text-[0.8rem] font-semibold text-brand underline-offset-4 transition hover:underline"
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
