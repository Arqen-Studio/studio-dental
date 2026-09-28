import type { ReactNode } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { doctorInitials, getDoctorBySlug, type TeamDoctor } from '../../data/teamDoctors'
import { useBooking } from '../../lib/booking'

/** Branch name from "DHA Phase II, Islamabad". Left out where the clinic has not said
 *  (the open question is in docs/client-questions.md). */
function Branch({ clinic }: { clinic: string }) {
  const branch = clinic.split(',')[0].trim()
  if (!branch) return null
  return (
    <span className="sd-badge sd-badge--brand">
      <MapPin className="sd-icon" size={14} strokeWidth={1.75} aria-hidden />
      {branch}
    </span>
  )
}

function BookButtons() {
  const openBooking = useBooking()
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button type="button" onClick={openBooking} className="sd-btn sd-btn--primary sd-btn--md max-sm:w-full">
        Book a consultation
      </button>
      <Link to="/doctors" className="sd-btn sd-btn--secondary sd-btn--md max-sm:w-full">
        See all doctors
      </Link>
    </div>
  )
}

/** Doctors whose profile form has not come back yet (docs/doctor-data-status.md). */
const isIncomplete = (doctor: TeamDoctor) => !doctor.role && doctor.biography.length === 0

export default function DoctorProfile() {
  const { slug } = useParams<{ slug: string }>()
  const doctor = slug ? getDoctorBySlug(slug) : undefined

  if (!doctor) {
    return <Navigate to="/doctors" replace />
  }

  const mid = Math.ceil(doctor.practiceAreas.length / 2)
  const practiceLeft = doctor.practiceAreas.slice(0, mid)
  const practiceRight = doctor.practiceAreas.slice(mid)

  // A short page rather than a near-empty one while the profile is completed.
  if (isIncomplete(doctor)) {
    return (
      <section className="bg-surface px-5 pb-16 pt-[calc(var(--nav-h)+3rem)] md:px-8 md:pb-24">
        <div className="mx-auto grid w-full page-shell items-center gap-10 md:grid-cols-[minmax(0,20rem)_1fr]">
          {doctor.image && (
            <img
              src={doctor.image}
              alt={doctor.name}
              className="aspect-[4/5] w-full rounded-t-full rounded-b-lg bg-raw-ink object-cover"
            />
          )}
          <div>
            <p className="sd-eyebrow">Doctors</p>
            <h1 className="mt-3 h1 text-ink">{doctor.name}</h1>
            <div className="mt-4">
              <Branch clinic={doctor.clinic} />
            </div>
            <p className="mt-6 max-w-[46ch] body text-ink-muted">
              A full profile for {doctor.name} is on its way. To book with them, send
              a request and the clinic will call you to agree a time.
            </p>
            <BookButtons />
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-surface">
      {/* Hero: portrait left, name and credentials on Stone right */}
      <section className="grid min-h-[min(100dvh,920px)] lg:grid-cols-2">
        <div className="relative flex min-h-[52vw] items-center justify-center bg-raw-ink lg:min-h-0">
          {doctor.image ? (
            <img
              src={doctor.image}
              alt={doctor.name}
              className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
            />
          ) : (
            // Portrait pending: initials on the charcoal backdrop, as on the cards.
            <span className="sd-doctor__initials" role="img" aria-label={doctor.name}>
              {doctorInitials(doctor.name)}
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center bg-surface-sunken px-6 py-14 md:px-12 lg:px-16 lg:pt-[calc(var(--nav-h)+3rem)]">
          <p className="sd-eyebrow">Doctors</p>
          <h1 className="mt-3 h1 text-ink">{doctor.name}</h1>
          {doctor.role && <p className="mt-4 lead text-ink">{doctor.role}</p>}
          {doctor.creds && <p className="mt-3 max-w-[48ch] body text-ink-muted">{doctor.creds}</p>}
          {doctor.licenseLine && <p className="mt-2 max-w-[48ch] small text-ink-muted">{doctor.licenseLine}</p>}
          <div className="mt-5">
            <Branch clinic={doctor.clinic} />
          </div>
          <BookButtons />
        </div>
      </section>

      {/* Practice areas, full viewport width */}
      <section className="w-full bg-surface py-12 md:py-16">
        <div className="mx-auto w-full max-w-[45rem] px-5 md:px-8">
          <ProfileSection title="Practice areas" items={doctor.practiceAreas}>
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
              <ul className="list-disc space-y-2.5 pl-5 body text-ink marker:text-brand">
                {practiceLeft.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="list-disc space-y-2.5 pl-5 body text-ink marker:text-brand">
                {practiceRight.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </ProfileSection>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[45rem] px-5 py-12 md:px-8 md:py-16">
        <ProfileSection title="Biography" items={doctor.biography}>
          <div className="space-y-3 body text-ink">
            {doctor.biography.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </ProfileSection>

        <ProfileSection title="Education" items={doctor.education}>
          <div className="space-y-4 body text-ink">
            {doctor.education.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </ProfileSection>

        <ProfileSection title="Membership" items={doctor.membership}>
          <ul className="list-none space-y-2.5 body text-ink">
            {doctor.membership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ProfileSection>

        <ProfileSection title="Professional training" items={doctor.professionalTraining}>
          <ul className="space-y-3 body text-ink">
            {doctor.professionalTraining.map((item) => (
              <li key={item} className="flex gap-2.5">
                <ArrowRight className="mt-0.5 h-[1.1em] w-[1.1em] shrink-0 text-brand" strokeWidth={2} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ProfileSection>
      </div>
    </div>
  )
}

function ProfileSection({ title, items, children }: { title: string; items?: unknown[]; children: ReactNode }) {
  if (items && items.length === 0) return null
  return (
    <section className="pb-12 md:pb-14">
      <h2 className="h4 text-ink">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}
