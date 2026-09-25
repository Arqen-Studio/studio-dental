import { Link } from 'react-router-dom'

/**
 * Written from what the clinic's own doctors say in their profiles and from
 * the published rate lists. It makes no claim that is not supported there,
 * so it can stand until the clinic supplies its own wording.
 */
const PRINCIPLES = [
  {
    title: 'Treating the cause, not just the tooth',
    body:
      'A filling that fixes today and fails in two years has not really fixed anything. Our doctors plan around how a tooth will hold up over years of use, which sometimes means a longer conversation before any treatment starts.',
  },
  {
    title: 'Keeping what is already yours',
    body:
      'Natural tooth structure cannot be replaced once it is gone. Wherever a conservative option will do the job, that is the one we take, and treatment is kept to what the tooth actually needs.',
  },
  {
    title: 'Knowing the cost before you begin',
    body:
      'Every treatment we offer is priced on this site, for both branches. You can read the full list before you pick up the phone, and the final cost is agreed after an examination rather than arriving as a surprise.',
  },
  {
    title: 'Starting early',
    body:
      'A child who is comfortable at the dentist becomes an adult who keeps going. Children are seen at both branches, and first visits are unhurried, with everything explained before it happens.',
  },
]

export default function MissionCampaign() {
  return (
    <>
      <section className="no-reveal bg-gradient-to-b from-brand via-[#E8EFE3] to-white pb-16 pt-[calc(78px+2rem)] md:pb-20 md:pt-[calc(78px+2.5rem)]">
        <div className="mx-auto page-shell px-5 md:px-8 [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.45s_both]">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/15 px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Our mission
          </span>
          <h1 className="mt-4 max-w-[20ch] font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight tracking-tight text-ink">
            A mission for life
          </h1>
          <p className="mt-5 max-w-[62ch] text-[1.05rem] leading-relaxed text-ink2">
            Teeth are meant to last a lifetime. Nearly everything that goes
            wrong with them is easier to treat early than late, and easier
            still to avoid altogether. That is the work.
          </p>
        </div>
      </section>

      <section className="reveal bg-white py-16 md:py-20">
        <div className="mx-auto page-shell px-5 md:px-8">
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <h2 className="text-[1.2rem] font-bold leading-snug text-ink md:text-[1.3rem]">
                  {p.title}
                </h2>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal bg-creamBrand py-16 md:py-20">
        <div className="mx-auto max-w-[860px] px-5 text-center md:px-8">
          <p className="font-heading text-[clamp(1.3rem,2.6vw,1.9rem)] font-bold leading-snug tracking-tight text-ink">
            &ldquo;Our goal is not simply to treat dental problems, but to
            create healthy, confident smiles that last.&rdquo;
          </p>
          <p className="mt-5 text-[0.92rem] font-semibold text-ink2">
            Dr. Yousaf Kamal
          </p>
          <p className="text-[0.88rem] text-muted">Consultant dental surgeon</p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[0.9rem] font-semibold text-creamBrand transition duration-200 hover:bg-ink/85"
            >
              See what we treat
            </Link>
            <Link
              to="/prices"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-3.5 text-[0.9rem] font-semibold text-ink transition duration-200 hover:bg-ink/5"
            >
              View the price list
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
