const FEATURES = [
  {
    title: 'Modern diagnostics',
    desc: 'Advanced imaging and digital planning support precise and predictable treatment outcomes.',
  },
  {
    title: 'Comprehensive treatment',
    desc: 'From hygiene and fillings to implants, prosthetics, and orthodontics in one clinic network.',
  },
  {
    title: 'Strong clinical team',
    desc: 'Highly qualified dentists, surgeons, and prosthodontists focused on long-term oral health.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="why"
      data-theme="dark"
      className="no-reveal mx-4 mb-10 overflow-hidden rounded-xl border border-line bg-surface py-10 text-creamBrand md:mx-8 md:mb-16 md:py-16"
    >
      <div className="mx-auto w-full page-shell px-5 py-10 md:px-8 md:py-14 [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.45s_both]">
        <div className="mb-8 max-w-[36rem] md:mb-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-brand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Why Studio Dental
          </span>
          <h1 className="mt-4 text-balance text-creamBrand text-[clamp(2rem,1.5rem+2.2vw,3.1rem)] leading-[1.08]">Experienced specialists and modern dentistry.</h1>
        </div>

        <div
          className="mb-8 grid grid-cols-2 gap-6 border-y border-line py-8 md:mb-10 md:grid-cols-4"
        >
          <div>
            <div className="text-[clamp(2rem,3vw+0.5rem,3rem)] font-extrabold leading-none tracking-tight text-brand">
              17+
            </div>
            <div className="mt-2 text-[0.9rem] text-creamBrand/65">Years of experience</div>
          </div>
          <div>
            <div className="text-[clamp(2rem,3vw+0.5rem,3rem)] font-extrabold leading-none tracking-tight text-brand">
              2
            </div>
            <div className="mt-2 text-[0.9rem] text-creamBrand/65">Specialized clinics</div>
          </div>
          <div>
            <div className="text-[clamp(2rem,3vw+0.5rem,3rem)] font-extrabold leading-none tracking-tight text-brand">
              10+
            </div>
            <div className="mt-2 text-[0.9rem] text-creamBrand/65">Top specialists</div>
          </div>
          <div>
            <div className="text-[clamp(2rem,3vw+0.5rem,3rem)] font-extrabold leading-none tracking-tight text-brand">
              5000+
            </div>
            <div className="mt-2 text-[0.9rem] text-creamBrand/65">Happy clients treated</div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="border-t border-line py-6">
              <div className="mb-4 text-[0.85rem] font-semibold tracking-[0.18em] text-brand">
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
