import SectionHeader from "../../components/SectionHeader";

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
      className="mx-4 overflow-hidden rounded-lg border border-line bg-surface py-10 text-ink md:mx-8 md:py-16"
    >
      <div className="mx-auto w-full page-shell px-5 py-10 md:px-8 md:py-14 [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.45s_both]">
        <SectionHeader level={1} eyebrow="Why Studio Dental" title="Experienced specialists and modern dentistry." className="mb-8 md:mb-10" />

        <div
          className="mb-8 grid grid-cols-2 gap-6 border-y border-line py-8 md:mb-10 md:grid-cols-4"
        >
          <div>
            <div className="h1 text-brand">
              17+
            </div>
            <div className="mt-2 body text-ink-muted">Years of experience</div>
          </div>
          <div>
            <div className="h1 text-brand">
              2
            </div>
            <div className="mt-2 body text-ink-muted">Specialized clinics</div>
          </div>
          <div>
            <div className="h1 text-brand">
              10+
            </div>
            <div className="mt-2 body text-ink-muted">Top specialists</div>
          </div>
          <div>
            <div className="h1 text-brand">
              5000+
            </div>
            <div className="mt-2 body text-ink-muted">Happy clients treated</div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="border-t border-line py-6">
              <div className="mb-4 small font-semibold text-brand">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="h4 text-ink">{f.title}</h3>
              <p className="mt-2 body text-ink-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
