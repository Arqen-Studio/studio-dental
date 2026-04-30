export type ServiceCardProps = {
  title: string
  desc: string
  price: string
  /** Narrow fixed-width card for home marquee */
  variant?: 'marquee' | 'grid'
}

/** Splits strings like "From PKR 3,500" / "Starts at PKR 5,000" for clearer display */
function splitPriceLine(price: string): { qualifier?: string; amount: string } {
  const t = price.trim()
  const m = t.match(/^(From|Starts at)\s+(.+)$/i)
  if (m) return { qualifier: m[1], amount: m[2] }
  return { amount: t }
}

function ServicePriceBlock({ price, compact }: { price: string; compact?: boolean }) {
  const { qualifier, amount } = splitPriceLine(price)
  const isQuote = /^custom quote$/i.test(amount)

  const amountClass = isQuote
    ? compact
      ? 'text-[0.88rem] font-bold text-ink'
      : 'text-[1rem] font-bold text-ink md:text-[1.06rem]'
    : compact
      ? 'text-[0.95rem] font-extrabold text-[#83BFE3]'
      : 'text-[1.06rem] font-extrabold text-[#83BFE3] md:text-[1.14rem]'

  return (
    <div className={['border-t border-[#83BFE3]/25', compact ? 'pt-3' : 'pt-4'].join(' ')}>
      {qualifier ? (
        <span
          className={[
            'mb-0.5 block font-semibold uppercase tracking-[0.12em] text-muted',
            compact ? 'text-[0.58rem]' : 'text-[0.62rem]',
          ].join(' ')}
        >
          {qualifier}
        </span>
      ) : null}
      <p className={['leading-tight tracking-tight [overflow-wrap:anywhere]', amountClass].join(' ')}>
        {amount}
      </p>
    </div>
  )
}

export function ServiceCard({ title, desc, price, variant = 'grid' }: ServiceCardProps) {
  if (variant === 'marquee') {
    return (
      <article className="flex min-h-[215px] w-[290px] flex-shrink-0 flex-col rounded-lg border border-black/10 bg-white p-5 shadow-soft-sm">
        <h3 className="text-[1rem] text-[#83BFE3]">{title}</h3>
        <p className="mt-2.5 flex-1 text-[0.86rem] leading-relaxed text-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
          {desc}
        </p>
        <div className="mt-auto pt-4">
          <ServicePriceBlock price={price} compact />
        </div>
      </article>
    )
  }

  return (
    <article className="flex h-full flex-col rounded-lg border border-black/10 bg-white p-6 shadow-soft-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-soft-md">
      <h3 className="text-[1.05rem] text-[#83BFE3]">{title}</h3>
      <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-muted">{desc}</p>
      <div className="mt-auto pt-5">
        <ServicePriceBlock price={price} />
      </div>
    </article>
  )
}
