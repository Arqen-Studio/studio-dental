import { Link } from "react-router-dom";
import ClinicCard from "../../components/ClinicCard";
import SectionHeader from "../../components/SectionHeader";
import { CLINICS } from "../../data/clinics";

export default function Clinics() {
  return (
    <>
      <section className="bg-surface px-5 pb-12 pt-[calc(var(--nav-h)+3rem)] md:px-8 md:pb-16">
        <div className="mx-auto w-full page-shell">
          <SectionHeader
            level={1}
            eyebrow="Islamabad"
            title="Clinics"
            lead="Two branches, DHA Phase II and F-7 Markaz, with the same opening hours."
          />
        </div>
      </section>

      <section className="bg-surface-sunken px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid w-full page-shell grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
          {CLINICS.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} photo />
          ))}
        </div>
      </section>

      {/* ── "You will be welcomed." — teaser to the team page ── */}
      <section className="bg-surface px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex w-full max-w-[46rem] flex-col items-center">
          <SectionHeader
            align="center"
            eyebrow="Doctors"
            title="You will be welcomed."
            lead="The same team looks after patients at both branches, from routine check-ups to implants and orthodontics. Get to know the people who will be treating you."
          />
          <Link to="/doctors" className="sd-btn sd-btn--primary sd-btn--md mt-8">
            Meet the team
          </Link>
        </div>
      </section>
    </>
  );
}
