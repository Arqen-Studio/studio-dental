import SectionHeader from "../../components/SectionHeader";
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
      'Both branches\u2019 price lists are on this site. Some treatments are offered at one branch only, and a few are marked "On request" where there is no fixed rate. You can read the full list before you pick up the phone, and the final cost is agreed after an examination rather than arriving as a surprise.',
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
      <section className="bg-surface-sunken pb-16 pt-[calc(78px+2rem)] md:pb-20 md:pt-[calc(78px+2.5rem)]">
        <div className="mx-auto page-shell px-5 md:px-8 [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.45s_both]">
          <SectionHeader
            level={1}
            eyebrow="Our mission"
            title="A mission for life"
            lead="Teeth are meant to last a lifetime. Nearly everything that goes wrong with them is easier to treat early than late, and easier still to avoid altogether. That is the work."
          />
        </div>
      </section>

      <section className="bg-surface-raised py-16 md:py-20">
        <div className="mx-auto page-shell px-5 md:px-8">
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <h2 className="h4 text-ink">
                  {p.title}
                </h2>
                <p className="mt-3 body text-ink-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-sunken py-16 md:py-20">
        <div className="mx-auto max-w-[43rem] px-5 text-center md:px-8">
          <p className="h3 text-ink">
            &ldquo;Our goal is not simply to treat dental problems, but to
            create healthy, confident smiles that last.&rdquo;
          </p>
          <p className="mt-5 label text-ink">
            Dr. Yousaf Kamal
          </p>
          <p className="body text-ink-muted">Consultant dental surgeon</p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/services"
              className="sd-btn sd-btn--primary sd-btn--md"
            >
              See what we treat
            </Link>
            <Link
              to="/prices"
              className="sd-btn sd-btn--secondary sd-btn--md"
            >
              View the price list
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
