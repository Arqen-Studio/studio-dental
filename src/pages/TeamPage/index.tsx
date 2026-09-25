import { useMemo, useState } from 'react'
import { TeamDoctorCard } from '../../components/TeamDoctorCard'
import { TEAM_DOCTORS } from '../../data/teamDoctors'
import ContactFormSection from '../../components/ContactFormSection'
import { SERVICES_DATA } from '../../data/services'
import { useAutoplayVideo } from '../../hooks/useAutoplayVideo'

const ALL_SERVICES = 'Select a service'
/**
 * Our own clinic footage, with a still from the same clip as the poster so the
 * panel is never empty while the video loads or if autoplay is refused.
 *
 * Which of the two branches each clip was shot at is not confirmed, so neither
 * the labels nor the poster alt text claims a branch or the people in shot.
 */
const TEAM_HERO_VIDEO = '/videos/clinic-team-720.mp4'
const TEAM_HERO_POSTER = '/videos/clinic-team-poster.jpg'
const TEAM_HERO_VIDEO_F7 = '/videos/treatment-room-720.mp4'
const TEAM_HERO_POSTER_F7 = '/videos/treatment-room-poster.jpg'

export default function TeamPage() {
  const [selectedService, setSelectedService] = useState(ALL_SERVICES)
  const dhaVideoRef = useAutoplayVideo()
  const f7VideoRef = useAutoplayVideo()

  /**
   * Driven by the services we actually offer, in the order they appear on the
   * services page, rather than by whatever labels happen to be on a doctor.
   * A service nobody is tagged with is left out so the filter can never return
   * an empty list; docs/client-questions.md tracks which those are and why.
   */
  const serviceOptions = useMemo(() => {
    const tagged = new Set(TEAM_DOCTORS.flatMap((doctor) => doctor.services))
    const offered = SERVICES_DATA.map((s) => s.title).filter((t) => tagged.has(t))
    return [ALL_SERVICES, ...offered]
  }, [])

  const filteredDoctors =
    selectedService === ALL_SERVICES
      ? TEAM_DOCTORS
      : TEAM_DOCTORS.filter((doctor) => doctor.services.includes(selectedService))

  return (
    <>
      {/* ── Hero, two stacked 50/50 rows ── */}
      <section className="no-reveal">
        {/* Row 1: photo left · text right, DHA Phase II */}
        <div className="grid min-h-[50vh] lg:grid-cols-2">
          {/* Photo */}
          <div className="relative min-h-[52vw] overflow-hidden lg:min-h-[50vh]">
            <video
              ref={dhaVideoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={TEAM_HERO_POSTER}
              aria-label="Studio Dental clinicians at work"
              className="absolute inset-0 h-full w-full object-cover object-center [animation:sd-hero-img-in_1.1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.3s_both]"
            >
              <source src={TEAM_HERO_VIDEO} type="video/mp4" />
            </video>
          </div>
          {/* Text */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-brand px-6 py-14 pt-[calc(78px+3rem)] md:px-12 lg:px-16 lg:pt-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(255,255,255,0.35) 0%, transparent 55%)' }}
              aria-hidden="true"
            />
            <div className="relative z-[1] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
              <h1 className="text-[clamp(2.4rem,4.5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-ink">
                DHA Phase II
              </h1>
              <ul className="mt-7 flex flex-col gap-0.5">
                {['Doctors', 'Services', 'Contact'].map((label) => (
                  <li key={label}>
                    <a
                      href="#doctors"
                      className="group inline-flex items-center gap-3 py-2 text-[1rem] font-semibold text-ink/75 transition duration-200 hover:text-ink"
                    >
                      <span className="h-px w-5 bg-ink/30 transition-all duration-300 group-hover:w-9 group-hover:bg-ink" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Row 2: text left · photo right, F-7 Markaz */}
        <div className="grid min-h-[50vh] lg:grid-cols-2">
          {/* Text */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-[#3F6F4B] px-6 py-14 md:px-12 lg:px-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 0% 100%, rgba(255,255,255,0.28) 0%, transparent 55%)' }}
              aria-hidden="true"
            />
            <div className="relative z-[1] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.7s_both]">
              <h2 className="text-[clamp(2.4rem,4.5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-creamBrand">
                F-7 Markaz
              </h2>
              <ul className="mt-7 flex flex-col gap-0.5">
                {['Doctors', 'Services', 'Contact'].map((label) => (
                  <li key={label}>
                    <a
                      href="#doctors"
                      className="group inline-flex items-center gap-3 py-2 text-[1rem] font-semibold text-creamBrand/90 transition duration-200 hover:text-creamBrand"
                    >
                      <span className="h-px w-5 bg-creamBrand/60 transition-all duration-300 group-hover:w-9 group-hover:bg-creamBrand" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Photo */}
          <div className="relative order-first min-h-[52vw] overflow-hidden lg:order-last lg:min-h-[50vh]">
            <video
              ref={f7VideoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={TEAM_HERO_POSTER_F7}
              aria-label="A treatment room at Studio Dental"
              className="absolute inset-0 h-full w-full object-cover object-center [animation:sd-hero-img-in_1.1s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]"
            >
              <source src={TEAM_HERO_VIDEO_F7} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section id="doctors" className="bg-[#F4F7F2] py-16 md:py-24">
        <div className="mx-auto w-full page-shell px-5 md:px-8">
          <h2 className="text-center text-[2rem] leading-none text-ink md:text-[2.25rem]">Doctors</h2>

          <div className="mt-6 max-w-[340px]">
            <label htmlFor="service-filter" className="sr-only">
              Select a service
            </label>
            <div className="relative">
              <select
                id="service-filter"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full appearance-none border-b-2 border-[#3F6F4B] bg-transparent pb-2.5 pr-9 text-[0.95rem] text-ink2 outline-none"
              >
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-ink2"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredDoctors.map((doctor) => (
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
        </div>
      </section>

      <ContactFormSection />
    </>
  )
}
