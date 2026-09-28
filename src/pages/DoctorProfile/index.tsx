import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { getDoctorBySlug } from '../../data/teamDoctors'

export default function DoctorProfile() {
  const { slug } = useParams<{ slug: string }>()
  const doctor = slug ? getDoctorBySlug(slug) : undefined

  if (!doctor) {
    return <Navigate to="/doctors" replace />
  }

  const mid = Math.ceil(doctor.practiceAreas.length / 2)
  const practiceLeft = doctor.practiceAreas.slice(0, mid)
  const practiceRight = doctor.practiceAreas.slice(mid)

  return (
    <div className="no-reveal bg-surface-sunken">
      {/* Hero, photo left · primary panel right */}
      <section className="grid min-h-[min(100dvh,920px)] lg:grid-cols-2">
        <div className="relative min-h-[52vw] bg-surface-sunken lg:min-h-0">
          {doctor.image && (
            <img
              src={doctor.image}
              alt={doctor.name}
              className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
            />
          )}
        </div>
        <div className="relative flex flex-col justify-center bg-surface-sunken px-6 py-14 pt-[calc(78px+2.5rem)] md:px-12 lg:px-16">
          <div className="relative z-[1] text-ink">
            {doctor.heroTitleLines && doctor.heroTitleLines.length > 0 ? (
              <>
                <h1 className="h1 text-ink">
                  {doctor.heroTitleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="mt-7 h3 text-ink">
                  {doctor.name}
                </p>
              </>
            ) : (
              <>
                <h1 className="h2 text-ink">
                  {doctor.name}
                </h1>
                {doctor.licenseLine && (
                  <p className="mt-4 max-w-[42ch] body font-medium text-ink">
                    {doctor.licenseLine}
                  </p>
                )}
              </>
            )}
            {doctor.heroTitleLines && doctor.heroTitleLines.length > 0 ? (
              <>
                {doctor.licenseLine && (
                  <p className="mt-5 max-w-[44ch] body font-medium text-ink">
                    {doctor.licenseLine}
                  </p>
                )}
                {doctor.locationLine && <p className="mt-2 body text-ink-muted">{doctor.locationLine}</p>}
              </>
            ) : (
              doctor.locationLine && (
                <p className="mt-3 body text-ink-muted">{doctor.locationLine}</p>
              )
            )}
          </div>
        </div>
      </section>

      {/* Practice areas, full viewport width */}
      <section className="w-full bg-surface py-12 md:py-16">
        <div className="mx-auto w-full max-w-[45rem] px-5 md:px-8">
          <ProfileSection title="Practice areas:" items={doctor.practiceAreas}>
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
        <ProfileSection title="Biography:" items={doctor.biography}>
          <div className="space-y-3 body text-ink">
            {doctor.biography.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </ProfileSection>

        <ProfileSection title="Education:" items={doctor.education}>
          <div className="space-y-4 body text-ink">
            {doctor.education.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </ProfileSection>

        <ProfileSection title="Membership:" items={doctor.membership}>
          <ul className="list-none space-y-2.5 body text-ink">
            {doctor.membership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ProfileSection>

        <ProfileSection title="Professional training:" items={doctor.professionalTraining}>
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
