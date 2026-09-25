import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAutoplayVideo } from "../../hooks/useAutoplayVideo";
import ContactFormSection from "../../components/ContactFormSection";

// ── service accordion data ─────────────────────────────────────────────────
type ServiceEntry = { id: string; title: string };

const SERVICES: ServiceEntry[] = [
  { id: "dental-implantation",  title: "Dental implantation" },
  { id: "prosthetics",          title: "Prosthetics: teeth and implants" },
  { id: "dental-fillings",      title: "Dental fillings" },
  { id: "teeth-straightening",  title: "Teeth straightening" },
  { id: "aesthetic-fillings",   title: "Aesthetic dental fillings" },
  { id: "root-canal",           title: "Root canal treatment" },
  { id: "oral-hygiene",         title: "Oral hygiene and whitening" },
  { id: "tooth-extraction",     title: "Tooth extraction" },
  { id: "childrens-dentistry",  title: "Children\u2019s dentistry" },
];


// ── main services page ─────────────────────────────────────────────────────
export default function Services() {
  const videoRef = useAutoplayVideo();


  return (
    <>
      {/* ── 1. Split hero (primary gradient panel, matches Team / Mission campaign) ── */}
      <section className="no-reveal grid min-h-screen border-t border-brand/25 pt-[78px] lg:grid-cols-2 lg:pt-0">
        {/* Left, primary gradient + accordion */}
        <div className="relative flex flex-col justify-center overflow-hidden border-b border-brand/25 px-8 py-16 md:px-12 lg:border-b-0 lg:border-r lg:border-brand/25 lg:px-16 lg:pt-[calc(78px+3rem)]">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3F6F4B] via-brand to-[#D6E2CF]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                "radial-gradient(ellipse 85% 65% at 100% 0%, rgba(255, 255, 255, 0.45) 0%, transparent 52%), radial-gradient(ellipse 70% 55% at 0% 100%, rgba(28, 59, 37, 0.08) 0%, transparent 50%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-[1] w-full max-w-[29rem] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
            <h1 className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-tight text-ink">
              Services
            </h1>

            <ul className="mt-8 divide-y divide-ink/10">
              {SERVICES.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={`/services/${svc.id}`}
                    className="flex items-center justify-between gap-3 py-3.5 text-[1.1rem] text-ink/85 transition hover:text-ink"
                  >
                    {svc.title}
                    <ChevronRight size={14} strokeWidth={2} className="flex-shrink-0 text-ink/30" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right, video */}
        <div className="relative order-first min-h-[50vw] overflow-hidden lg:order-last lg:min-h-screen">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/clinic-room-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover object-center [animation:sd-hero-img-in_1.1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]"
          >
            <source
              src="/videos/clinic-room-720.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
