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
    <div className="no-reveal bg-[#F4F7F2]">
      {/* Hero, photo left · primary panel right */}
      <section className="grid min-h-[min(100dvh,920px)] lg:grid-cols-2">
        <div className="relative min-h-[52vw] bg-[#C9D2C4] lg:min-h-0">
          {doctor.image && (
            <img
              src={doctor.image}
              alt={doctor.name}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          )}
        </div>
        <div className="relative flex flex-col justify-center bg-brand px-6 py-14 pt-[calc(78px+2.5rem)] md:px-12 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              background:
                'radial-gradient(ellipse 85% 55% at 100% 0%, rgba(255,255,255,0.85) 0%, transparent 58%)',
            }}
            aria-hidden
          />
          <div className="relative z-[1] text-ink">
            {doctor.heroTitleLines && doctor.heroTitleLines.length > 0 ? (
              <>
                <h1 className="font-heading text-[clamp(1.85rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-tight text-ink">
                  {doctor.heroTitleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="mt-7 text-[clamp(1.15rem,2.2vw,1.5rem)] font-bold leading-snug text-ink">
                  {doctor.name}
                </p>
              </>
            ) : (
              <>
                <h1 className="font-heading text-[clamp(1.85rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-tight text-ink">
                  {doctor.name}
                </h1>
                {doctor.licenseLine && (
                  <p className="mt-4 max-w-[42ch] text-[0.95rem] font-medium leading-relaxed text-ink2 md:text-[1.05rem]">
                    {doctor.licenseLine}
                  </p>
                )}
              </>
            )}
            {doctor.heroTitleLines && doctor.heroTitleLines.length > 0 ? (
              <>
                {doctor.licenseLine && (
                  <p className="mt-5 max-w-[44ch] text-[0.92rem] font-medium leading-relaxed text-ink2 md:text-[1rem]">
                    {doctor.licenseLine}
                  </p>
                )}
                {doctor.locationLine && <p className="mt-2 text-[0.92rem] text-muted md:text-[1rem]">{doctor.locationLine}</p>}
              </>
            ) : (
              doctor.locationLine && (
                <p className="mt-3 text-[0.92rem] text-muted md:text-[1rem]">{doctor.locationLine}</p>
              )
            )}
          </div>
        </div>
      </section>

      {/* Practice areas, full viewport width */}
      <section className="w-full bg-[#F4F7F2] py-12 md:py-16">
        <div className="mx-auto w-full max-w-[45rem] px-5 md:px-8">
          <ProfileSection title="Practice areas:" items={doctor.practiceAreas}>
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
              <ul className="list-disc space-y-2.5 pl-5 text-[0.95rem] leading-relaxed text-ink2 marker:text-brand">
                {practiceLeft.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="list-disc space-y-2.5 pl-5 text-[0.95rem] leading-relaxed text-ink2 marker:text-brand">
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
          <div className="space-y-3 text-[0.95rem] leading-relaxed text-ink2">
            {doctor.biography.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </ProfileSection>

        <ProfileSection title="Education:" items={doctor.education}>
          <div className="space-y-4 text-[0.95rem] leading-relaxed text-ink2">
            {doctor.education.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </ProfileSection>

        <ProfileSection title="Membership:" items={doctor.membership}>
          <ul className="list-none space-y-2.5 text-[0.95rem] leading-relaxed text-ink2">
            {doctor.membership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ProfileSection>

        <ProfileSection title="Professional training:" items={doctor.professionalTraining}>
          <ul className="space-y-3 text-[0.95rem] leading-relaxed text-ink2">
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
      <h2 className="font-heading text-[1.35rem] font-extrabold tracking-tight text-ink md:text-[1.5rem]">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}
