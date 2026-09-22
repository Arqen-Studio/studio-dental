import React from "react";
import {
  PRICE_CLINICS,
  categoriesForClinic,
  formatPrice,
  type ClinicId,
} from "../../data/prices";

const CLINICS = PRICE_CLINICS;

export default function Prices() {
  const [selectedClinic, setSelectedClinic] = React.useState<ClinicId | null>(null);
  const categories = selectedClinic ? categoriesForClinic(selectedClinic) : [];
  const [listKey, setListKey] = React.useState(0);

  React.useLayoutEffect(() => {
    history.scrollRestoration = 'manual';
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  function handleClinicSelect(id: ClinicId) {
    setSelectedClinic(id);
    setListKey((k) => k + 1);
  }

  return (
    <>
      {/* ── Hero, full-screen split ── */}
      <section className="no-reveal lg:min-h-screen">
        <div className="grid lg:grid-cols-2">
          {/* Left panel */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-skyBrand px-6 pb-14 pt-[calc(78px+2.5rem)] md:px-12 lg:min-h-screen lg:px-16 lg:pt-[calc(78px+3rem)]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(255,255,255,0.38) 0%, transparent 55%)" }}
              aria-hidden="true"
            />
            <div className="relative z-[1] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.45s_both]">
              <h1 className="text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold leading-[1] tracking-tight text-ink">
                Service prices
              </h1>
              <p className="mt-3 text-[0.85rem] text-ink/60">
                Select which clinic's price list to view:
              </p>

              {/* Clinic selector cards */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:max-w-[420px]">
                {CLINICS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleClinicSelect(c.id)}
                    className={[
                      "rounded-xl px-4 py-3.5 text-left backdrop-blur-sm transition duration-200",
                      selectedClinic === c.id
                        ? "bg-white/65 shadow-soft-sm"
                        : "bg-white/30 hover:bg-white/50",
                    ].join(" ")}
                  >
                    <p className="text-[0.95rem] font-bold text-ink">{c.name}</p>
                    <p className="mt-0.5 text-[0.73rem] text-ink/55">{c.address}</p>
                  </button>
                ))}
              </div>

              {/* Category links, re-animate on every clinic switch */}
              {selectedClinic && (
                <ul
                  key={listKey}
                  className="mt-6 flex flex-col [animation:sd-hero-text-in_0.7s_cubic-bezier(0.25,0.46,0.45,0.94)_both]"
                >
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <a
                        href={`#${cat.id}`}
                        className="flex items-center justify-between border-b border-ink/10 py-2.5 text-[0.95rem] font-medium text-ink/80 transition duration-150 hover:text-ink"
                      >
                        {cat.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              <p className={[
                "max-w-[50ch] text-[0.75rem] leading-relaxed text-ink/45",
                selectedClinic ? "mt-6" : "mt-8",
              ].join(" ")}>
                The exact treatment cost is determined after a doctor's examination,
                taking into account the patient's condition and an individual
                treatment plan. Prices may be updated at registration.
              </p>
            </div>
          </div>

          {/* Right panel, photo */}
          <div className="relative hidden overflow-hidden lg:block lg:min-h-screen">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=75"
              alt="Patient reviewing treatment plan"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center [animation:sd-hero-img-in_1.1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]"
            />
          </div>
        </div>
      </section>

      {/* ── Info text, hidden once a clinic is selected ── */}
      <section className={`reveal bg-white py-14 md:py-20 ${selectedClinic ? "hidden" : ""}`}>
        <div className="mx-auto w-full max-w-[780px] px-5 md:px-8">
          <h2 className="text-[1.2rem] font-bold text-ink">
            Transparent pricing at Studio Dental
          </h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-muted">
            At Studio Dental, we believe every patient deserves to know what their
            treatment will cost before it begins. All prices listed are indicative
            and based on standard clinical procedures. The final cost is determined
            after an in-person examination and discussion of your individual
            treatment plan.
          </p>
          <p className="mt-4 text-[1rem] leading-relaxed text-muted">
            Some treatments may require additional procedures, such as bone
            grafting before implant placement, or a build-up before a crown, which
            will always be communicated and agreed upon before any work begins.
            Our team is committed to providing clear, honest guidance at every step.
          </p>
          <p className="mt-4 text-[1rem] leading-relaxed text-muted">
            For a personalised cost estimate, book a consultation at either our
            <strong className="text-ink"> DHA Phase II</strong> or
            <strong className="text-ink"> F-7 Markaz</strong> clinic, the initial
            assessment and treatment planning session is complimentary.
          </p>
        </div>
      </section>

      {/* ── Price sections, rendered only after clinic selected ── */}
      {selectedClinic && categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="scroll-mt-[78px]">
          {/* Category heading band */}
          <div className="bg-[#ddf0f8] py-10 text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-tight text-skyBrand">
              {cat.label}
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-12 bg-skyBrand/50" />
          </div>

          {/* Price rows */}
          <div className="bg-white py-10">
            <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8">
              <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 px-4 py-3 odd:bg-black/[0.025]"
                  >
                    <span className="text-[0.92rem] text-ink">{item.name}</span>
                    <span className="flex-shrink-0 text-[0.92rem] font-semibold text-ink">
                      {formatPrice(item[selectedClinic])}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

    </>
  );
}
