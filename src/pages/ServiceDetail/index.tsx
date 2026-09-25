import { Link, Navigate, useParams } from "react-router-dom";
import { SERVICES_DATA } from "../../data/services";
import { TEAM_DOCTORS } from "../../data/teamDoctors";
import { TeamDoctorCard } from "../../components/TeamDoctorCard";
import { PRICE_CATEGORIES, formatPrice } from "../../data/prices";
import { useAutoplayVideo } from "../../hooks/useAutoplayVideo";

const DENTIST_PHOTO =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=75";

const CLINIC_CARDS = [
  {
    id: "dha",
    name: "DHA Phase II",
    address: "1st Floor, Plaza No. 26, Main Iqbal Boulevard",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=70",
  },
  {
    id: "f7",
    name: "F-7 Markaz",
    address: "Jinnah Super, F-7 Markaz",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=70",
  },
];

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const videoRef = useAutoplayVideo();
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
      <section className="no-reveal">
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
          <div className="relative flex flex-col justify-center overflow-hidden bg-brand px-6 py-14 pt-[calc(78px+3rem)] md:px-12 lg:px-16 lg:py-20 lg:pt-[calc(78px+4rem)]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(255,255,255,0.35) 0%, transparent 55%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-[1] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
              <Link
                to="/services"
                className="mb-6 inline-flex items-center gap-2 text-[0.8rem] font-semibold text-ink/60 transition hover:text-ink"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                All services
              </Link>
              <h1 className="text-[clamp(2rem,4.5vw,3.6rem)] font-extrabold leading-[1] tracking-tight text-ink">
                {service.title}
              </h1>
              <p className="mt-5 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink/70">
                {service.subtitle}
              </p>
              <button
                type="button"
                onClick={() =>
                  document
                    .querySelector<HTMLButtonElement>('[aria-label="Open online registration"]')
                    ?.click()
                }
                className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[0.9rem] font-semibold text-creamBrand transition duration-200 hover:bg-ink/85"
              >
                Register for a consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro paragraph ── */}
      <section className="reveal bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[39rem] px-5 text-center md:px-8">
          <p className="text-[1rem] leading-relaxed text-muted md:text-[1.05rem]">
            {service.intro}
          </p>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector<HTMLButtonElement>('[aria-label="Open online registration"]')
                  ?.click()
              }
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-[0.9rem] font-semibold text-ink transition duration-200 hover:bg-brand/80"
            >
              Register for a consultation
            </button>
          </div>
        </div>
      </section>

      {/* ── When necessary, alternating split rows ── */}
      <section className="reveal bg-white">
        <div className="mx-auto w-full page-shell px-5 pb-4 pt-0 text-center md:px-8">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold text-ink">
            {service.whenHeading}
          </h2>
        </div>

        {service.scenarios.map((scenario, i) => (
          <div key={i} className={`grid min-h-[45vh] lg:grid-cols-2 ${i > 0 ? "" : ""}`}>
            {i % 2 === 0 ? (
              <>
                {/* Text left */}
                <div className="flex flex-col justify-center bg-brand/10 px-6 py-12 md:px-12 lg:px-16">
                  <h3 className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold leading-tight text-ink">
                    {scenario.title}
                  </h3>
                  <p className="mt-4 max-w-[50ch] text-[0.95rem] leading-relaxed text-muted">
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
                <div className="order-first flex flex-col justify-center bg-brand px-6 py-12 md:px-12 lg:order-last lg:px-16">
                  <h3 className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold leading-tight text-ink">
                    {scenario.title}
                  </h3>
                  <p className="mt-4 max-w-[50ch] text-[0.95rem] leading-relaxed text-ink/70">
                    {scenario.text}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      {/* ── Prices ── */}
      <section className="reveal bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[55rem] px-5 md:px-8">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-ink">Prices</h2>
          <div className="mb-8 mt-3 h-px bg-ink/15" />

          {/* Price rows, the two branches price most treatments differently */}
          {priceCategories.map((cat) => (
            <div key={cat.id} className="mb-8 last:mb-0">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-6 border-b border-ink/15 pb-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-ink/45 sm:gap-x-10">
                <span>{cat.label}</span>
                <span className="text-right">DHA Phase II</span>
                <span className="text-right">F-7 Markaz</span>
              </div>
              {cat.items.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-x-6 px-1 py-3 text-[0.92rem] odd:bg-black/[0.03] sm:gap-x-10 sm:px-3"
                >
                  <span className="text-ink">{item.name}</span>
                  <span className="text-right font-semibold tabular-nums text-ink">
                    {"dha" in item ? formatPrice(item.dha) : <span className="text-[0.78rem] font-normal text-ink/35">Not offered</span>}
                  </span>
                  <span className="text-right font-semibold tabular-nums text-ink">
                    {"f7" in item ? formatPrice(item.f7) : <span className="text-[0.78rem] font-normal text-ink/35">Not offered</span>}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Disclaimer */}
          <div className="mt-6 rounded-xl bg-brand/10 px-5 py-4">
            <p className="text-[0.82rem] leading-relaxed text-ink/60">
              ! The exact price of treatment is determined after a doctor's examination, assessing
              the patient's condition and discussing the individual treatment plan and possible
              additional procedures. Prices may be updated at registration.
            </p>
          </div>

          {/* Clinic selector cards */}
          <p className="mt-10 text-center text-[0.88rem] text-ink/55">
            Select the clinic price list you want to see:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
            {CLINIC_CARDS.map((c) => (
              <Link
                key={c.id}
                to="/prices"
                className="group relative min-h-[10rem] overflow-hidden rounded-2xl"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/50" />
                <div className="relative flex h-full flex-col justify-between p-8">
                  <div>
                    <p className="text-[1.3rem] font-bold text-white">{c.name}</p>
                    <p className="mt-1 text-[0.8rem] text-white/65">{c.address}</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[0.85rem] font-semibold text-ink transition duration-200 group-hover:bg-brand">
                      View prices
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specialists ── */}
      {specialists.length > 0 && (
        <section className="reveal bg-[#F4F7F2] py-16 md:py-20">
          <div className="mx-auto w-full page-shell px-5 md:px-8">
            <h2 className="text-center text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-ink">
              Specialists
            </h2>
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
            <div className="mt-10 flex justify-center">
              <Link
                to="/doctors"
                className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-[0.9rem] font-semibold text-ink transition duration-200 hover:bg-brand/80"
              >
                More specialists
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Operation progress ── */}
      <section className="reveal bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[39rem] px-5 md:px-8">
          <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-ink">
            Operation progress:
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {service.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-[0.72rem] font-bold text-ink">
                  {i + 1}
                </span>
                <p className="text-[0.95rem] leading-relaxed text-muted">{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Other services ── */}
      <section className="no-reveal">
        <div className="grid lg:grid-cols-2">
          {/* Text left, brand bg */}
          <div className="relative flex flex-col justify-center bg-brand px-6 py-16 md:px-12 lg:min-h-[26rem] lg:px-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse 80% 60% at 0% 100%, rgba(255,255,255,0.32) 0%, transparent 55%)" }}
              aria-hidden="true"
            />
            <div className="relative z-[1]">
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-ink">
                Other services
              </h2>
              <ul className="mt-6 flex flex-col">
                {otherServices.map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.id}`}
                      className="flex items-center border-b border-ink/10 py-3 text-[0.95rem] text-ink/75 transition duration-150 hover:text-ink"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-[0.88rem] font-semibold text-creamBrand transition duration-200 hover:bg-ink/80"
                >
                  All services
                </Link>
              </div>
            </div>
          </div>

          {/* Photo right */}
          <div className="relative hidden min-h-[21rem] overflow-hidden lg:block">
            <img
              src={DENTIST_PHOTO}
              alt="Studio Dental specialists"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
}
