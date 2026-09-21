import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ServiceCard } from "../../components/ServiceCard";
import ContactFormSection from "../../components/ContactFormSection";

// ── service accordion data ─────────────────────────────────────────────────
type ServiceEntry = { id: string; title: string; children?: string[] };

const SERVICES: ServiceEntry[] = [
  { id: "dental-implantation",  title: "Dental implantation" },
  { id: "all-on-4-implants",    title: 'Implantation "All teeth on 4 implants"' },
  { id: "prosthetics",          title: "Prosthetics: teeth and implants" },
  {
    id: "dental-fillings",
    title: "Dental fillings (adults and children)",
    children: ["Dental fillings", "Pediatric dentistry"],
  },
  { id: "orthognathic-surgery", title: "Orthognathic surgery" },
  { id: "jaw-joint-treatment",  title: "Treatment of jaw joint pain" },
  {
    id: "teeth-straightening",
    title: "Teeth straightening",
    children: ["Braces", "Clear aligners"],
  },
  { id: "aesthetic-fillings",   title: "Aesthetic dental fillings" },
  {
    id: "periodontal-treatment",
    title: "Periodontal treatment (conservative and laser)",
    children: ["Conservative treatment", "Laser therapy"],
  },
  { id: "root-canal",           title: "Root canal treatment" },
  {
    id: "oral-hygiene",
    title: "Oral hygiene and whitening",
    children: ["Professional cleaning", "Teeth whitening"],
  },
  { id: "tooth-extraction",     title: "Tooth extraction" },
];

// ── home-page marquee data (kept for Hero section) ─────────────────────────
type ServiceItem = { title: string; desc: string; price: string };

const SERVICE_CATALOG: ServiceItem[] = [
  {
    title: "Dental Consultation",
    desc: "Comprehensive oral exam and treatment planning with digital screening.",
    price: "From PKR 3,500",
  },
  {
    title: "Scaling & Polishing",
    desc: "Professional cleaning to remove plaque, tartar, and surface stains.",
    price: "From PKR 6,000",
  },
  {
    title: "Tooth-Colored Fillings",
    desc: "Aesthetic restorations designed to match your natural teeth.",
    price: "From PKR 8,000",
  },
  {
    title: "Root Canal Treatment",
    desc: "Pain-relieving endodontic care to preserve infected teeth.",
    price: "From PKR 18,000",
  },
  {
    title: "Dental Crowns",
    desc: "Durable ceramic and zirconia crowns for strength and aesthetics.",
    price: "From PKR 25,000",
  },
  {
    title: "Braces & Aligners",
    desc: "Orthodontic treatment options tailored to bite and smile goals.",
    price: "Custom quote",
  },
  {
    title: "Teeth Whitening",
    desc: "Safe in-clinic and supervised whitening options for brighter teeth.",
    price: "From PKR 15,000",
  },
  {
    title: "Dental Veneers",
    desc: "Porcelain and composite veneers to improve smile shape and color.",
    price: "From PKR 30,000",
  },
  {
    title: "Wisdom Tooth Removal",
    desc: "Surgical and non-surgical removal for impacted or painful molars.",
    price: "From PKR 18,000",
  },
  {
    title: "Tooth Extraction",
    desc: "Simple extractions performed with comfort-focused protocols.",
    price: "From PKR 7,000",
  },
  {
    title: "Dental Implants",
    desc: "Single and multiple implant options with digital planning.",
    price: "Custom quote",
  },
  {
    title: "Smile Makeover",
    desc: "Comprehensive cosmetic treatment plans for balanced facial aesthetics.",
    price: "Custom quote",
  },
  {
    title: "Pediatric Dentistry",
    desc: "Preventive and restorative dental care tailored for children.",
    price: "From PKR 4,500",
  },
  {
    title: "Gum Treatment",
    desc: "Periodontal therapy for bleeding gums, recession, and gum infections.",
    price: "From PKR 12,000",
  },
  {
    title: "Dentures & Partials",
    desc: "Custom full and partial dentures for comfort and chewing function.",
    price: "From PKR 35,000",
  },
  {
    title: "Emergency Dental Care",
    desc: "Urgent same-day care for severe pain, swelling, trauma, and infection.",
    price: "Starts at PKR 5,000",
  },
];

// ── home-page services marquee (rendered inside Hero) ──────────────────────
function HomeServicesSection() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1.2fr_1fr_auto] lg:items-start">
          <div className="flex max-w-[760px] flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-skyBrand"
                aria-hidden="true"
              />
              Services
            </span>
            <h2>Dental services at Studio Dental.</h2>
            <p className="max-w-[60ch] text-[1.02rem] text-muted">
              Explore preventive, restorative, cosmetic, and surgical treatments
              with specialist-led care plans.
            </p>
          </div>
          <p className="max-w-[33ch] border-l-2 border-skyBrand/40 pl-3 pt-1.5 text-[0.78rem] font-semibold leading-snug text-ink2">
            Service cards move continuously so you can quickly scan options and
            visit the full services page for details.
          </p>
          <Link
            to="/services"
            className="group inline-flex h-[40px] items-center justify-center gap-2 self-start whitespace-nowrap rounded-full border border-skyBrand/30 bg-white px-5 text-[0.75rem] font-semibold text-ink2 shadow-soft-sm transition hover:-translate-y-0.5 hover:border-skyBrand/70 hover:text-ink hover:shadow-soft-md"
          >
            View all services
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-skyBrand/25 text-ink transition group-hover:bg-skyBrand/40">
              <ArrowRight size={11} strokeWidth={2.5} aria-hidden />
            </span>
          </Link>
        </div>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
          <div className="flex w-max animate-[sd-services-marquee_34s_linear_infinite] [will-change:transform]">
            <div className="flex gap-5 pr-5">
              {SERVICE_CATALOG.map((service) => (
                <ServiceCard
                  key={`home-a-${service.title}`}
                  {...service}
                  variant="marquee"
                />
              ))}
            </div>
            <div className="flex gap-5 pr-5" aria-hidden="true">
              {SERVICE_CATALOG.map((service) => (
                <ServiceCard
                  key={`home-b-${service.title}`}
                  {...service}
                  variant="marquee"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── main services page ─────────────────────────────────────────────────────
export default function Services() {
  const { pathname } = useLocation();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  if (pathname === "/") {
    return <HomeServicesSection />;
  }

  function toggle(idx: number) {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  }

  return (
    <>
      {/* ── 1. Split hero (primary gradient panel — matches Team / Mission campaign) ── */}
      <section className="no-reveal grid min-h-screen border-t border-skyBrand/25 pt-[78px] lg:grid-cols-2 lg:pt-0">
        {/* Left — primary gradient + accordion */}
        <div className="relative flex flex-col justify-center overflow-hidden border-b border-skyBrand/25 px-8 py-16 md:px-12 lg:border-b-0 lg:border-r lg:border-skyBrand/25 lg:px-16 lg:pt-[calc(78px+3rem)]">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#5aadde] via-skyBrand to-[#c9ebfc]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                "radial-gradient(ellipse 85% 65% at 100% 0%, rgba(255, 255, 255, 0.45) 0%, transparent 52%), radial-gradient(ellipse 70% 55% at 0% 100%, rgba(15, 27, 36, 0.08) 0%, transparent 50%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-[1] w-full max-w-[580px] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
            <h1 className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-tight text-ink">
              Services
            </h1>

            <ul className="mt-8 divide-y divide-ink/10">
              {SERVICES.map((svc, idx) => {
                const hasChildren = Boolean(svc.children?.length);
                const isOpen = openIdx === idx;
                return (
                  <li key={svc.title}>
                    {hasChildren ? (
                      <button
                        type="button"
                        onClick={() => toggle(idx)}
                        className="flex w-full items-center gap-3 py-3.5 text-left text-[0.95rem] font-normal text-ink/85 transition hover:text-ink"
                      >
                        <span className="flex-shrink-0 text-ink/50">
                          {isOpen ? (
                            <ChevronDown size={14} strokeWidth={2} />
                          ) : (
                            <ChevronRight size={14} strokeWidth={2} />
                          )}
                        </span>
                        {svc.title}
                      </button>
                    ) : (
                      <Link
                        to={`/services/${svc.id}`}
                        className="flex items-center justify-between py-3.5 pl-[22px] text-[0.95rem] text-ink/85 transition hover:text-ink"
                      >
                        {svc.title}
                        <ChevronRight size={14} strokeWidth={2} className="text-ink/30" />
                      </Link>
                    )}
                    {hasChildren && isOpen && (
                      <ul className="mb-2 ml-[22px] flex flex-col gap-1">
                        {svc.children!.map((child) => (
                          <li
                            key={child}
                            className="py-1.5 pl-4 text-[0.88rem] text-ink/65"
                          >
                            {child}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right — video */}
        <div className="relative order-first min-h-[50vw] overflow-hidden lg:order-last lg:min-h-screen">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/clinic-team-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover object-center [animation:sd-hero-img-in_1.1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]"
          >
            <source
              src="/videos/clinic-team-720.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
