import { Link } from 'react-router-dom'

type ShowcaseItem = {
  title: string
  desc: string
  price: string
  iconId: string
  featured?: boolean
  image?: string
  imageAlt?: string
}

function splitPriceLine(price: string): { qualifier?: string; amount: string } {
  const t = price.trim()
  const m = t.match(/^(From|Starts at)\s+(.+)$/i)
  if (m) return { qualifier: m[1], amount: m[2] }
  return { amount: t }
}

function ServicePriceLine({ price, light }: { price: string; light?: boolean }) {
  const { qualifier, amount } = splitPriceLine(price)
  const isQuote = /^custom quote$/i.test(amount)
  const amtCls = light
    ? isQuote
      ? 'text-[0.95rem] font-bold text-creamBrand md:text-[1.02rem]'
      : 'text-[1.05rem] font-extrabold text-[#83BFE3] md:text-[1.15rem]'
    : isQuote
      ? 'text-[0.88rem] font-bold text-ink md:text-[0.92rem]'
      : 'text-[0.92rem] font-extrabold text-[#83BFE3] md:text-[0.98rem]'

  return (
    <div className={['mt-auto border-t pt-3.5', light ? 'border-white/25' : 'border-[#83BFE3]/22'].join(' ')}>
      {qualifier ? (
        <span
          className={[
            'mb-0.5 block text-[0.58rem] font-semibold uppercase tracking-[0.12em]',
            light ? 'text-creamBrand/65' : 'text-muted',
          ].join(' ')}
        >
          {qualifier}
        </span>
      ) : null}
      <p className={['leading-tight tracking-tight [overflow-wrap:anywhere]', amtCls].join(' ')}>{amount}</p>
    </div>
  )
}

function IconBubble({ iconId, featured }: { iconId: string; featured?: boolean }) {
  return (
    <span
      className={[
        'inline-flex shrink-0 items-center justify-center rounded-2xl border shadow-soft-sm',
        featured
          ? 'h-12 w-12 border-white/35 bg-white/15 text-creamBrand backdrop-blur-sm'
          : 'h-11 w-11 border-[#83BFE3]/25 bg-[#83BFE3]/10 text-[#2a6a8a]',
      ].join(' ')}
      aria-hidden="true"
    >
      <svg width={featured ? 26 : 22} height={featured ? 26 : 22} viewBox="0 0 24 24" fill="none" className="[stroke-width:2]">
        <use href={`/svg/sprite.svg#${iconId}`} />
      </svg>
    </span>
  )
}

const SHOWCASE: ShowcaseItem[] = [
  {
    title: 'New patient consultation',
    desc: 'Full oral exam, digital screening, and a clear treatment roadmap tailored to your goals.',
    price: 'From PKR 3,500',
    iconId: 'icon-tooth',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=72',
    imageAlt: 'Dentist reviewing care with a patient in a bright modern surgery',
  },
  {
    title: 'Clear aligners',
    desc: 'Discreet orthodontic plans with digital bite analysis.',
    price: 'Custom quote',
    iconId: 'icon-aligners',
  },
  {
    title: 'Dental implants',
    desc: 'Replace missing teeth with planned implant placement.',
    price: 'Custom quote',
    iconId: 'icon-implants',
  },
  {
    title: 'Teeth whitening',
    desc: 'Safe in-clinic whitening for a brighter smile.',
    price: 'From PKR 15,000',
    iconId: 'icon-star-outline',
  },
  {
    title: 'Emergency care',
    desc: 'Same-day attention for pain, swelling, or trauma.',
    price: 'Starts at PKR 5,000',
    iconId: 'icon-bolt',
  },
  {
    title: 'Pediatric dentistry',
    desc: 'Gentle preventive and restorative care for children.',
    price: 'From PKR 4,500',
    iconId: 'icon-kids',
  },
]

export default function HomeServicesShowcase({
  omitAnchorId = false,
}: {
  omitAnchorId?: boolean
} = {}) {
  const [featured, ...rest] = SHOWCASE

  return (
    <section
      {...(!omitAnchorId ? { id: 'services' } : {})}
      className="relative overflow-hidden bg-gradient-to-b from-[#f3f9fd] via-white to-[#f9f9f9] py-10 md:py-16"
    >
      <div
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#83BFE3]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-16 h-64 w-64 rounded-full bg-skyBrand/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mb-7 flex flex-col gap-5 md:mb-9 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[42rem]">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-white/80 px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink2 shadow-soft-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#83BFE3]" aria-hidden="true" />
              Our services
            </span>
            <h2 className="mt-4 text-[clamp(1.55rem,2.6vw,2.35rem)] leading-[1.05] tracking-tight text-ink">
              Everything your smile needs, in one place.
            </h2>
            <p className="mt-3 max-w-[52ch] text-[0.95rem] leading-relaxed text-muted">
              From checkups and hygiene to implants, aligners, and emergencies — browse a few highlights below, then see
              the full fee guide and catalog on our services page.
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-skyBrand/35 bg-white px-5 text-[0.8rem] font-semibold text-ink2 shadow-soft-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#83BFE3]/80 hover:text-ink hover:shadow-soft-md lg:self-auto"
          >
            Full price list & services
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#83BFE3]/20 text-ink transition group-hover:bg-[#83BFE3]/35">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <use href="/svg/sprite.svg#icon-arrow-right" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          <article
            className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-black/10 shadow-soft-md sm:col-span-2 sm:min-h-[300px] lg:col-span-2 lg:row-span-2 lg:min-h-[420px]"
          >
            {featured.image ? (
              <img
                src={featured.image}
                alt={featured.imageAlt ?? ''}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              />
            ) : null}
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/45 to-ink/20"
              aria-hidden="true"
            />
            <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
              <IconBubble iconId={featured.iconId} featured />
              <h3 className="mt-5 text-[1.35rem] font-extrabold leading-tight text-[#83BFE3] sm:text-[1.5rem]">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-[40ch] text-[0.88rem] leading-relaxed text-creamBrand/90 sm:text-[0.92rem]">
                {featured.desc}
              </p>
              <div className="mt-auto">
                <ServicePriceLine price={featured.price} light />
              </div>
              <Link
                to="/services"
                className="mt-5 inline-flex w-fit items-center gap-2 text-[0.82rem] font-semibold text-creamBrand/90 underline-offset-4 transition hover:text-white hover:underline"
              >
                Explore all treatments
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-90">
                  <use href="/svg/sprite.svg#icon-arrow-right" />
                </svg>
              </Link>
            </div>
          </article>

          {rest.map((item) => (
            <article
              key={item.title}
              className="reveal flex min-h-[200px] flex-col rounded-2xl border border-black/8 bg-white/95 p-5 shadow-soft-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#83BFE3]/28 hover:shadow-soft-md sm:min-h-0"
            >
              <div className="flex items-start gap-3">
                <IconBubble iconId={item.iconId} />
                <div className="min-w-0 flex-1">
                  <h3 className="text-[1.02rem] font-extrabold leading-snug text-[#83BFE3]">{item.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
              <ServicePriceLine price={item.price} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
