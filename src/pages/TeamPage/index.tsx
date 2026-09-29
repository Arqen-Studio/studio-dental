import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
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

/** Each branch panel links to the doctors grid, the services page and the
 *  contact form. Two tones: dark text on the light DHA panel, light text on
 *  the dark F-7 panel. */
const PANEL_LINKS = [
  { label: 'Doctors', href: '#doctors' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact-us' },
] as const

function scrollToHash(e: React.MouseEvent, href: string) {
  const el = document.querySelector(href)
  if (!el) return
  e.preventDefault()
  const header = document.querySelector('header')
  const offset = (header?.getBoundingClientRect().height ?? 0) + 8
  const y = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: y, behavior: 'auto' })
  history.replaceState(null, '', href)
}

function PanelLinks({ tone }: { tone: 'dark' | 'light' }) {
  const text = tone === 'dark' ? 'text-ink/75 hover:text-ink' : 'text-creamBrand/90 hover:text-creamBrand'
  const dash = tone === 'dark' ? 'bg-ink/30 group-hover:bg-ink' : 'bg-creamBrand/60 group-hover:bg-creamBrand'
  const cls = `group inline-flex items-center gap-3 py-2 text-[1rem] font-semibold ${text} transition duration-200`
  return (
    <ul className="mt-7 flex flex-col gap-0.5">
      {PANEL_LINKS.map(({ label, href }) => {
        const inner = (
          <>
            <span className={`h-px w-5 ${dash} transition-all duration-300 group-hover:w-9`} />
            {label}
          </>
        )
        return (
          <li key={label}>
            {href.startsWith('#') ? (
              <a href={href} onClick={(e) => scrollToHash(e, href)} className={cls}>{inner}</a>
            ) : (
              <Link to={href} className={cls}>{inner}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

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
          <div data-theme="evergreen" className="relative flex flex-col justify-center overflow-hidden bg-brand-soft px-6 py-14 pt-[calc(78px+3rem)] md:px-12 lg:px-16 lg:pt-14">
            <div className="relative z-[1] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
              <h1 className="text-[clamp(2.4rem,4.5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-ink">
                DHA Phase II
              </h1>
              <PanelLinks tone="dark" />
            </div>
          </div>
        </div>

        {/* Row 2: text left · photo right, F-7 Markaz */}
        <div className="grid min-h-[50vh] lg:grid-cols-2">
          {/* Text */}
          <div data-theme="evergreen" className="relative flex flex-col justify-center overflow-hidden bg-brand-soft px-6 py-14 md:px-12 lg:px-16">
            <div className="relative z-[1] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.7s_both]">
              <h2 className="text-[clamp(2.4rem,4.5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-ink">
                F-7 Markaz
              </h2>
              <PanelLinks tone="dark" />
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

      <section id="doctors" className="bg-surface-sunken py-16 md:py-24">
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
                className="w-full min-h-11 appearance-none border-b-2 border-brand bg-transparent pb-2.5 pr-9 text-[0.95rem] text-ink2"
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
