import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { TeamDoctorCard } from '../../components/TeamDoctorCard'
import { TEAM_DOCTORS } from '../../data/teamDoctors'
import ContactFormSection from '../../components/ContactFormSection'
import { SERVICES_DATA } from '../../data/services'
import { useAutoplayVideo } from '../../hooks/useAutoplayVideo'
import SectionHeader from '../../components/SectionHeader'
import { Field } from '../../components/Field'

const ALL_SERVICES = 'All treatments'
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
*  contact form. The two branch panels are identical Stone panels. */
const PANEL_LINKS = [
  { label: 'Doctors', href: '#doctors' },
  { label: 'Treatments', href: '/services' },
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

function PanelLinks() {
  const cls = 'group inline-flex min-h-11 items-center gap-3 label text-ink-muted transition duration-200 hover:text-ink'
  return (
    <ul className="mt-7 flex flex-col gap-0.5">
      {PANEL_LINKS.map(({ label, href }) => {
        const inner = (
          <>
            <span className="h-px w-5 bg-ink/30 transition-all duration-300 group-hover:w-9 group-hover:bg-ink" />
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
      {/* ── Page title ── */}
      <section className="bg-surface px-5 pb-12 pt-[calc(78px+3rem)] md:px-8 md:pb-16">
        <div className="mx-auto w-full page-shell">
          <SectionHeader level={1} eyebrow="DHA Phase II · F-7 Markaz" title="Doctors" />
        </div>
      </section>

      {/* ── The two branches, equal Stone panels ── */}
      <section>
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
          <div className="relative flex flex-col justify-center overflow-hidden bg-surface-sunken px-6 py-14 md:px-12 lg:px-16">
            <div className="relative z-[1] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
              <h2 className="h2 text-ink">
                DHA Phase II
              </h2>
              <PanelLinks />
            </div>
          </div>
        </div>

        {/* Row 2: text left · photo right, F-7 Markaz */}
        <div className="grid min-h-[50vh] lg:grid-cols-2">
          {/* Text */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-surface-sunken px-6 py-14 md:px-12 lg:px-16">
            <div className="relative z-[1] [animation:sd-hero-text-in_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)_0.5s_both]">
              <h2 className="h2 text-ink">
                F-7 Markaz
              </h2>
              <PanelLinks />
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

      <section id="doctors" className="bg-surface py-16 md:py-24">
        <div className="mx-auto w-full page-shell px-5 md:px-8">
          <SectionHeader eyebrow="Team" title="Find a doctor" />

          <div className="mt-8 max-w-[340px]">
            <Field id="service-filter" label="Treatment">
              <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
