import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAutoplayVideo } from "../../hooks/useAutoplayVideo";
import MissionCampaignBanner from "../../components/MissionCampaignBanner";
import HomeClinicHub from "../../components/HomeClinicHub";
import HomeDoctorsCarousel from "../../components/HomeDoctorsCarousel";
import HomeServicesShowcase from "../../components/HomeServicesShowcase";

/** Studio Dental clinic walkaround, supplied by the client */
const HERO_VIDEO_HD = "/videos/clinic-walkaround-1600.mp4";
const HERO_VIDEO_SD = "/videos/clinic-walkaround-640.mp4";

const HERO_POSTER = "/videos/clinic-walkaround-poster.jpg";

export default function Hero() {
  const heroVideoRef = useAutoplayVideo();

  return (
    <>
      <section
        id="home"
        data-theme="dark"
        className="no-reveal relative isolate flex min-h-screen items-center overflow-hidden text-creamBrand"
      >
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <video
            ref={heroVideoRef}
            className="h-full w-full object-cover [animation:sd-hero-img-in_1.1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
          >
            <source
              src={HERO_VIDEO_SD}
              type="video/mp4"
              media="(max-width: 768px)"
            />
            <source src={HERO_VIDEO_HD} type="video/mp4" />
          </video>
          {/* Scrim behind the hero text (design system: --scrim only behind text on a photo). */}
          <div className="absolute inset-0 bg-scrim" />
        </div>

        <div className="relative z-10 mx-auto w-full page-shell px-5 pb-10 pt-[calc(78px+2rem)] md:px-8 [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
          <div className="mb-7 flex items-start">
            <div className="inline-flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-raw-porcelain/25 bg-raw-porcelain/10 px-4 py-1.5 text-[0.85rem] font-medium backdrop-blur">
                <span
                  className="h-2 w-2 rounded-full bg-raw-sage ring-4 ring-raw-sage/30"
                  aria-hidden="true"
                />
                Mission for life
              </span>
              
            </div>
          </div>

          <div className="mb-10 max-w-[46rem]">
            <h1 className="max-w-[19ch] font-heading text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-creamBrand">
              Dentistry you can trust, in the heart of Islamabad
            </h1>
            <p className="mt-5 max-w-[46ch] text-[1rem] leading-relaxed text-creamBrand/85 md:text-[1.08rem]">
              Two clinics, DHA Phase II and F-7 Markaz. From routine check-ups
              to implants and orthodontics.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-raw-porcelain px-6 py-3 text-[0.95rem] font-semibold text-raw-ink transition duration-300 ease-out hover:bg-raw-mist"
            >
              Book a consultation
              <span
                className="inline-flex h-[1.1rem] w-[22px] items-center justify-center rounded-full bg-black/10"
                aria-hidden="true"
              >
                <ArrowRight
                  size={11}
                  strokeWidth={2.5}
                  className="text-raw-ink"
                  aria-hidden
                />
              </span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-raw-porcelain bg-transparent px-6 py-3 text-[0.95rem] font-semibold text-raw-porcelain transition duration-300 ease-out hover:bg-raw-porcelain hover:text-raw-ink"
            >
              View all services
            </Link>
          </div>

          <div
            className="flex max-w-[32rem] flex-wrap items-center gap-5 rounded-lg border border-raw-porcelain/20 bg-raw-porcelain/10 px-5 py-4 backdrop-blur lg:w-fit lg:max-w-none lg:flex-nowrap lg:gap-7 lg:px-7"
          >
            <div className="flex flex-col gap-1">
              <strong className="text-[1.15rem] font-bold text-creamBrand">
                17+ years
              </strong>
              <span className="text-[0.82rem] text-creamBrand/70">
                of clinical experience
              </span>
            </div>
            <div
              className="hidden h-10 w-px bg-raw-porcelain/20 md:block"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1">
              <strong className="text-[1.15rem] font-bold text-creamBrand">
                Top doctors
              </strong>
              <span className="text-[0.82rem] text-creamBrand/70">
                from oral surgeons to orthodontists
              </span>
            </div>
            <div
              className="hidden h-10 w-px bg-raw-porcelain/20 md:block"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1">
              <strong className="text-[1.15rem] font-bold text-creamBrand">
                2 clinics
              </strong>
              <span className="text-[0.82rem] text-creamBrand/70">
                DHA Phase II and F-7 Markaz
              </span>
            </div>
          </div>
        </div>

        <Link
          to="/services"
          className="absolute bottom-7 left-1/2 z-10 hidden h-[2.1rem] w-[26px] -translate-x-1/2 items-start justify-center rounded-full border border-raw-porcelain/60 pt-1.5 md:inline-flex"
          aria-label="Go to services"
        >
          <span className="h-2 w-[3px] rounded bg-raw-porcelain animate-[sd-scroll_1.8s_cubic-bezier(0.22,1,0.36,1)_infinite]" />
        </Link>
      </section>

      <section
        className="bg-surface px-5 pb-7 pt-4 md:px-8 md:pb-10 md:pt-5"
        aria-label="Featured campaign"
      >
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
