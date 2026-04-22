const STATS = [
  { value: '4.9★', label: 'Average patient rating' },
  { value: '10k+', label: 'Appointments delivered' },
  { value: '98%', label: 'Would recommend us' },
  { value: '24/7', label: 'Emergency support line' },
]

const FEATURES = [
  {
    title: 'Advanced tech, always',
    desc: 'Digital impressions, 3D imaging, and laser dentistry — no goopy moulds here.',
  },
  {
    title: 'Calm, aesthetic space',
    desc: 'A studio-inspired clinic that feels more like a spa than a hospital.',
  },
  {
    title: 'Clear, honest plans',
    desc: 'Detailed, easy-to-read treatment plans with transparent pricing up front.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="why"
      className="mx-4 overflow-hidden rounded-xl bg-ink py-16 text-creamBrand md:mx-8 md:py-24"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 py-14 md:px-8 md:py-20">
        <div className="mb-10 max-w-[720px] md:mb-14">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/40 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-skyBrand">
            <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
            Why Studio Dental
          </span>
          <h2 className="mt-4 text-balance text-creamBrand">Advanced care that actually feels good.</h2>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-6 border-y border-white/15 py-10 md:mb-14 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-[clamp(2rem,3vw+0.5rem,3rem)] font-extrabold leading-none tracking-tight text-skyBrand">
                {s.value}
              </div>
              <div className="mt-2 text-[0.9rem] text-creamBrand/70">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="border-t border-white/15 py-6">
              <div className="mb-4 text-[0.85rem] font-semibold tracking-[0.18em] text-skyBrand">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-[1.3rem] font-semibold text-creamBrand">{f.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-creamBrand/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
