import { Link, Navigate, useParams } from "react-router-dom";
import { SERVICES_DATA } from "../../data/services";
import { TEAM_DOCTORS } from "../../data/teamDoctors";
import { TeamDoctorCard } from "../../components/TeamDoctorCard";
import { PRICE_CATEGORIES, PRICE_NOTE } from "../../data/prices";
import PriceTable from "../../components/PriceTable";
import { useAutoplayVideo } from "../../hooks/useAutoplayVideo";
import { useBooking } from "../../lib/booking";
import SectionHeader from "../../components/SectionHeader";

const DENTIST_PHOTO = "/images/clinic/interior-portrait.jpg";



export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const videoRef = useAutoplayVideo();
  const openBooking = useBooking();
  const service = SERVICES_DATA.find((s) => s.id === id);
  const priceCategories = PRICE_CATEGORIES.filter((c) =>
    service?.priceCategories.includes(c.id)
  );

  if (!service) return <Navigate to="/services" replace />;

  const specialists = TEAM_DOCTORS.filter((d) =>
    d.services.some((s) => service.specialistTags.includes(s))
  );

  const otherServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 6);

  return (
    <>
      {/* ── Hero, full-screen split ── */}
      <section>
        <div className="grid lg:grid-cols-2 lg:min-h-screen">
          {/* Video, left */}
          <div className="relative min-h-[45vh] overflow-hidden lg:min-h-screen">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster="/videos/treatment-room-poster.jpg"
              className="absolute inset-0 h-full w-full object-cover object-center [animation:sd-hero-img-in_1.1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]"
            >
              <source
                src="/videos/treatment-room-720.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Text, right */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-surface-sunken px-6 py-14 pt-[calc(78px+3rem)] md:px-12 lg:px-16 lg:py-20 lg:pt-[calc(78px+4rem)]">
            <div className="relative z-[1] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
              <Link
                to="/services"
                className="mb-6 inline-flex items-center gap-2 small font-semibold text-ink-muted transition hover:text-ink"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                All treatments
              </Link>
              <h1 className="h1 text-ink">
                {service.title}
              </h1>
              <p className="mt-5 max-w-[46ch] body text-ink-muted">
                {service.subtitle}
              </p>
              <button
                type="button"
                onClick={openBooking}
                className="sd-btn sd-btn--primary sd-btn--lg mt-8"
              >
                Register for a consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro paragraph ── */}
      <section className="bg-surface-raised py-16 md:py-20">
        <div className="mx-auto w-full max-w-[39rem] px-5 md:px-8">
          <p className="body text-ink-muted">
            {service.intro}
          </p>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={openBooking}
              className="sd-btn sd-btn--primary sd-btn--md"
            >
              Register for a consultation
            </button>
          </div>
        </div>
      </section>

      {/* ── When necessary, alternating split rows ── */}
      <section className="bg-surface-raised">
        <div className="mx-auto w-full page-shell px-5 pb-10 pt-0 md:px-8">
          <SectionHeader eyebrow={service.title} title={service.whenHeading} />
        </div>

        {service.scenarios.map((scenario, i) => (
          <div key={i} className={`grid min-h-[45vh] lg:grid-cols-2 ${i > 0 ? "" : ""}`}>
            {i % 2 === 0 ? (
              <>
                {/* Text left */}
                <div className="flex flex-col justify-center bg-brand-soft px-6 py-12 md:px-12 lg:px-16">
                  <h3 className="h3 text-ink">
                    {scenario.title}
                  </h3>
                  <p className="mt-4 max-w-[50ch] body text-ink-muted">
                    {scenario.text}
                  </p>
                </div>
                {/* Image right */}
                <div className="relative min-h-[52vw] overflow-hidden lg:min-h-0">
                  <img
                    src={scenario.image}
                    alt={scenario.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image left */}
                <div className="relative order-last min-h-[52vw] overflow-hidden lg:order-first lg:min-h-0">
                  <img
                    src={scenario.image}
                    alt={scenario.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
                {/* Text right */}
                <div className="order-first flex flex-col justify-center bg-surface-sunken px-6 py-12 md:px-12 lg:order-last lg:px-16">
                  <h3 className="h3 text-ink">
                    {scenario.title}
                  </h3>
                  <p className="mt-4 max-w-[50ch] body text-ink-muted">
                    {scenario.text}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      {/* ── Prices ── */}
      <section className="bg-surface-raised py-16 md:py-20">
        <div className="mx-auto w-full max-w-[55rem] px-5 md:px-8">
          <SectionHeader eyebrow={service.title} title="Prices" className="mb-8" />
          <div className="flex flex-col gap-5">
            {priceCategories.map((cat, i) => (
              <PriceTable
                key={cat.id}
                category={cat}
                note={i === priceCategories.length - 1 ? PRICE_NOTE : undefined}
              />
            ))}
          </div>
          <Link to="/prices" className="sd-btn sd-btn--secondary sd-btn--md mt-8">
            See all prices
          </Link>
        </div>
      </section>

      {/* ── Specialists ── */}
      {specialists.length > 0 && (
        <section className="bg-surface-sunken py-16 md:py-20">
          <div className="mx-auto w-full page-shell px-5 md:px-8">
            <SectionHeader eyebrow="Doctors" title="Specialists" />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {specialists.map((doctor) => (
                <TeamDoctorCard
                  key={doctor.name}
                  slug={doctor.slug}
                  name={doctor.name}
                  creds={doctor.creds}
                  role={doctor.role}
                  image={doctor.image}
                  clinic={doctor.clinic}
                />
              ))}
            </div>
            <div className="mt-10">
              <Link to="/doctors" className="sd-btn sd-btn--secondary sd-btn--md">
                See all doctors
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── What happens, step by step ── */}
      <section className="bg-surface-raised py-16 md:py-20">
        <div className="mx-auto w-full max-w-[39rem] px-5 md:px-8">
          <SectionHeader eyebrow={service.title} title="What happens, step by step" />
          <ul className="mt-6 flex flex-col gap-4">
            {service.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand small font-semibold text-on-brand">
                  {i + 1}
                </span>
                <p className="body text-ink-muted">{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Other services ── */}
      <section>
        <div className="grid lg:grid-cols-2">
          {/* Text left, Stone bg */}
          <div className="relative flex flex-col justify-center bg-surface-sunken px-6 py-16 md:px-12 lg:min-h-[26rem] lg:px-16">
            <div className="relative z-[1]">
              <SectionHeader eyebrow="Treatments" title="Other treatments" />
              <ul className="mt-6 flex flex-col">
                {otherServices.map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.id}`}
                      className="flex items-center border-b border-line py-3 body text-ink-muted transition duration-150 hover:text-ink"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/services"
                  className="sd-btn sd-btn--secondary sd-btn--md"
                >
                  See all treatments
                </Link>
              </div>
            </div>
          </div>

          {/* Photo right */}
          <div className="relative hidden min-h-[21rem] overflow-hidden lg:block">
            <img
              src={DENTIST_PHOTO}
              alt="A treatment room at Studio Dental"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
}
