import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MissionCampaignBanner from "../../components/MissionCampaignBanner";
import HomeClinicHub from "../../components/HomeClinicHub";
import HomeDoctorsCarousel from "../../components/HomeDoctorsCarousel";
import HomeServicesShowcase from "../../components/HomeServicesShowcase";
import { CLINICS, YEARS_OF_EXPERIENCE } from "../../data/clinics";
import { TEAM_DOCTORS } from "../../data/teamDoctors";
import { useBooking } from "../../lib/booking";

/** The arch frame (pill top, radius-lg bottom) is the brand's one signature shape per view. */
const HERO_PHOTO = "/images/clinic/interior-portrait.jpg";

/** Static figures, rendered as text (no count-up); every value comes from src/data. */
const STATS = [
  { value: `${YEARS_OF_EXPERIENCE}+ years`, label: "of clinical experience" },
  { value: `${TEAM_DOCTORS.length} doctors`, label: "from general dentists to specialists" },
  { value: `${CLINICS.length} clinics`, label: CLINICS.map((c) => c.name).join(" and ") },
];

export default function Hero() {
  const openBooking = useBooking();

  return (
    <>
      {/* Light hero (brand guide, Applications): copy left, arch-framed photo right. */}
      <section id="home" className="bg-surface px-5 pb-16 pt-[calc(var(--nav-h)+1.5rem)] sm:pt-[calc(var(--nav-h)+2.5rem)] md:px-8 md:pb-24 lg:pt-[calc(var(--nav-h)+4rem)]">
        <div className="mx-auto grid w-full max-w-[var(--container-wide)] items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="sd-eyebrow">DHA Phase II · F-7 Markaz</p>
            <h1 className="display max-w-[16ch] text-ink">
              Dentistry you can trust, in the heart of Islamabad
            </h1>
            <p className="lead max-w-[46ch] text-ink-muted">
              Two clinics, DHA Phase II and F-7 Markaz. From routine check-ups to
              implants and orthodontics.
            </p>

            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={openBooking} className="sd-btn sd-btn--primary sd-btn--lg max-sm:w-full">
                <span>Book a consultation</span>
                <ArrowRight className="sd-icon" size={18} strokeWidth={1.75} aria-hidden />
              </button>
              <Link to="/prices" className="sd-btn sd-btn--secondary sd-btn--lg max-sm:w-full">
                See prices
              </Link>
            </div>

            <dl className="mt-2 grid grid-cols-3 gap-3 border-t border-line pt-6 sm:gap-5">
              {STATS.map((s) => (
                <div key={s.value} className="sd-stat">
                  <dt className="sd-stat__label order-2">{s.label}</dt>
                  <dd className="sd-stat__value order-1 m-0">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <img
            src={HERO_PHOTO}
            alt="A treatment room at Studio Dental"
            className="h-[320px] w-full max-w-[16rem] justify-self-center sm:h-[420px] sm:max-w-[26rem] rounded-t-full rounded-b-lg bg-surface-sunken object-cover md:h-[520px] lg:h-[560px] lg:max-w-none"
          />
        </div>
      </section>

      <section className="bg-surface-sunken px-5 py-16 md:px-8 md:py-24" aria-label="Featured campaign">
        <div className="mx-auto page-shell">
          <MissionCampaignBanner />
        </div>
      </section>

      <HomeServicesShowcase />
      <HomeDoctorsCarousel />

      <HomeClinicHub />
    </>
  );
}
