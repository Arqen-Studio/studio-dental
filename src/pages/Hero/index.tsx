import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCountUp, useInView } from "../../hooks/useCountUp";
import MissionCampaignBanner from "../../components/MissionCampaignBanner";
import HomeClinicHub from "../../components/HomeClinicHub";
// import HomePopularServices from "../../components/HomePopularServices";
import HomeDoctorsCarousel from "../../components/HomeDoctorsCarousel";
import HomeServicesShowcase from "../../components/HomeServicesShowcase";

/** Dental clinic footage — Pexels (royalty-free): “A Dentist Cleaning the Teeth of a Man”, Pavel Danilyuk */
const HERO_VIDEO_HD =
  "https://videos.pexels.com/video-files/6763244/6763244-hd_1920_1080_25fps.mp4";
const HERO_VIDEO_SD =
  "https://videos.pexels.com/video-files/6763244/6763244-sd_640_360_25fps.mp4";

const HERO_POSTER =
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=60";

export default function Hero() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const { ref: heroStatsRef, inView: heroStatsInView } =
    useInView<HTMLDivElement>(0.3);
  const yearsCount = useCountUp(17, heroStatsInView);
  const clinicsCount = useCountUp(2, heroStatsInView);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay can still be blocked by browser policies.
      }
    };

    void tryPlay();
  }, []);

  return (
    <>
      <section
        id="home"
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
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15, 27, 36, 0.55) 0%, rgba(15, 27, 36, 0.35) 45%, rgba(15, 27, 36, 0.75) 100%), linear-gradient(120deg, rgba(47, 131, 184, 0.35) 0%, rgba(135, 206, 250, 0.05) 60%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 pb-10 pt-[calc(78px+2rem)] md:px-8 [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
          <div className="mb-8 flex h-[220px] items-start md:h-[260px]">
            <div className="inline-flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.85rem] font-medium backdrop-blur">
                <span
                  className="h-2 w-2 rounded-full bg-skyBrand"
                  style={{ boxShadow: "0 0 0 4px rgba(135, 206, 250, 0.3)" }}
                  aria-hidden="true"
                />
                Mission for life
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.8rem] font-semibold tracking-[0.04em] text-creamBrand backdrop-blur">
                <img
                  src="/favicon.svg"
                  alt=""
                  className="h-4 w-4 object-contain"
                />
                Studio Dental
              </span>
            </div>
          </div>

          {/*
          Previous hero text (kept as requested):
          "Gentle, modern dental care designed around you."
          "Studio Dental blends advanced technology with a warm, aesthetic experience — so every visit feels calm, clear, and genuinely good."
        */}

          <div className="mb-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-skyBrand px-6 py-3 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky"
            >
              Online registration
              <span
                className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/10"
                aria-hidden="true"
              >
                <ArrowRight
                  size={11}
                  strokeWidth={2.5}
                  className="text-ink"
                  aria-hidden
                />
              </span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-[#f9f9f9] px-6 py-3 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft-md"
            >
              View all services
            </Link>
          </div>

          <div
            ref={heroStatsRef}
            className="flex max-w-[640px] flex-wrap items-center gap-5 rounded-lg border border-white/20 bg-white/10 px-5 py-4 backdrop-blur"
          >
            <div className="flex flex-col gap-1">
              <strong className="text-[1.15rem] font-bold text-creamBrand">
                {yearsCount}+ years
              </strong>
              <span className="text-[0.82rem] text-creamBrand/70">
                of clinical experience
              </span>
            </div>
            <div
              className="hidden h-10 w-px bg-white/20 md:block"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1">
              <strong className="text-[1.15rem] font-bold text-creamBrand">
                Top doctors
              </strong>
              <span className="text-[0.82rem] text-creamBrand/70">
                from surgeons to prosthodontists
              </span>
            </div>
            <div
              className="hidden h-10 w-px bg-white/20 md:block"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1">
              <strong className="text-[1.15rem] font-bold text-creamBrand">
                {clinicsCount} clinics
              </strong>
              <span className="text-[0.82rem] text-creamBrand/70">
                DHA Phase II and F-7 Markaz
              </span>
            </div>
          </div>
        </div>

        <Link
          to="/services"
          className="absolute bottom-7 left-1/2 z-10 hidden h-[42px] w-[26px] -translate-x-1/2 items-start justify-center rounded-full border border-white/60 pt-1.5 md:inline-flex"
          aria-label="Go to services"
        >
          <span className="h-2 w-[3px] rounded bg-[#f9f9f9] animate-[sd-scroll_1.8s_cubic-bezier(0.22,1,0.36,1)_infinite]" />
        </Link>
      </section>

      <section
        className="bg-[#f9f9f9] px-5 pb-7 pt-4 md:px-8 md:pb-10 md:pt-5"
        aria-label="Featured campaign"
      >
        <div className="mx-auto max-w-[1240px]">
          <MissionCampaignBanner />
        </div>
      </section>

      {/* <HomePopularServices /> */}
      <HomeServicesShowcase />
      <HomeDoctorsCarousel />

      <HomeClinicHub />
    </>
  );
}
