const REVIEWS = [
  {
    quote:
      'The whole place feels like a spa. My dentist walked me through every step on a screen — no jargon. Genuinely the first time I haven\u2019t dreaded a cleaning.',
    name: 'Amelia R.',
    role: 'Patient since 2024',
  },
  {
    quote:
      'My Invisalign results are unreal. They made a plan that fit my budget and my weirdly busy schedule. Can\u2019t stop smiling.',
    name: 'Daniel P.',
    role: 'Invisalign treatment',
  },
  {
    quote:
      'My kids actually look forward to going. Kind staff, gentle hands, and the waiting area is calm instead of chaotic.',
    name: 'Sofia M.',
    role: 'Family patient',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-creamBrand py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mx-auto mb-8 flex max-w-[720px] flex-col items-center gap-3 text-center md:mb-12">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
            Kind words
          </span>
          <h2>Real smiles, real stories.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="relative flex flex-col gap-5 overflow-hidden rounded-lg border border-black/10 bg-white p-6 shadow-soft-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-skyBrand/40 hover:shadow-soft-md"
            >
              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-skyBrand to-transparent" aria-hidden="true" />
              <div className="inline-flex gap-0.5 text-skyBrand" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.3 5.5 22l1.7-7.4-5.7-5 7.5-.7L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="m-0 flex-1 text-[1.02rem] leading-relaxed text-ink2">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-black/10 pt-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-skyBrand text-[1.1rem] font-bold text-ink" aria-hidden="true">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[0.98rem] font-semibold text-ink">{r.name}</div>
                  <div className="text-[0.82rem] text-muted">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
