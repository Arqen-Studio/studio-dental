import PriceTable from "../../components/PriceTable";
import SectionHeader from "../../components/SectionHeader";
import { PRICE_CATEGORIES, PRICE_NOTE } from "../../data/prices";

export default function Prices() {
  return (
    <>
      <section className="bg-surface px-5 pb-12 pt-[calc(var(--nav-h)+3rem)] md:px-8 md:pb-16">
        <div className="mx-auto w-full page-shell">
          <SectionHeader
            level={1}
            eyebrow="DHA Phase II · F-7 Markaz"
            title="Prices"
            lead="Both clinics' price lists, side by side. The exact cost of your treatment is agreed after an examination."
          />
        </div>
      </section>

      {/* Price lists: category links on the left from 1024px, tables on the right. */}
      <section className="bg-surface-sunken px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid w-full page-shell gap-8 lg:grid-cols-[14rem_1fr] lg:gap-12">
          <nav aria-label="Price categories" className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)] lg:self-start">
            <p className="sd-eyebrow">Categories</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 lg:flex-col">
              {PRICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="inline-flex min-h-11 items-center body text-ink-muted transition hover:text-brand"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex max-w-[var(--container-text)] flex-col gap-5">
            {PRICE_CATEGORIES.map((cat, i) => (
              <PriceTable
                key={cat.id}
                id={cat.id}
                category={cat}
                level={2}
                note={i === PRICE_CATEGORIES.length - 1 ? PRICE_NOTE : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-[var(--container-text)]">
          <SectionHeader eyebrow="How we price" title="Transparent pricing at Studio Dental" />
          <p className="mt-6 body text-ink-muted">
            At Studio Dental, we believe every patient deserves to know what their
            treatment will cost before it begins. All prices listed are indicative
            and based on standard clinical procedures. The final cost is determined
            after an in-person examination and discussion of your individual
            treatment plan.
          </p>
          <p className="mt-4 body text-ink-muted">
            Some treatments may require additional procedures, such as bone
            grafting before implant placement, or a build-up before a crown, which
            will always be communicated and agreed upon before any work begins.
            Our team is committed to providing clear, honest guidance at every step.
          </p>
          <p className="mt-4 body text-ink-muted">
            For a personalised cost estimate, book a consultation at either our
            <strong className="text-ink"> DHA Phase II</strong> or
            <strong className="text-ink"> F-7 Markaz</strong> clinic, the initial
            assessment and treatment planning session is complimentary.
          </p>
        </div>
      </section>
    </>
  );
}
