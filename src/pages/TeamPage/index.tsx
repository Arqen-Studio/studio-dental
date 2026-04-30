import { useMemo, useState } from 'react'
import { TeamDoctorCard } from '../../components/TeamDoctorCard'
import { TEAM_DOCTORS } from '../../data/teamDoctors'

const ALL_SERVICES = 'Select a service'
const TEAM_HERO_IMAGE = '/images/team-hero.png'

export default function TeamPage() {
  const [selectedService, setSelectedService] = useState(ALL_SERVICES)

  const serviceOptions = useMemo(() => {
    const all = TEAM_DOCTORS.flatMap((doctor) => doctor.services)
    return [ALL_SERVICES, ...Array.from(new Set(all))]
  }, [])

  const filteredDoctors =
    selectedService === ALL_SERVICES
      ? TEAM_DOCTORS
      : TEAM_DOCTORS.filter((doctor) => doctor.services.includes(selectedService))

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-creamBrand text-ink">
        <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="border-b border-black/10 bg-creamBrand lg:border-b-0 lg:border-r lg:border-black/10">
            <div className="mx-auto flex h-full w-full max-w-[620px] flex-col justify-center px-5 pb-14 pt-[calc(78px+2.2rem)] md:px-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-skyBrand/15 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-ink2">
                <img src="/favicon.svg" alt="" className="h-3.5 w-3.5 object-contain" />
                Studio Dental Team
              </span>
              <h1 className="mt-5 text-[clamp(2rem,3.6vw,3.4rem)] leading-[0.98] text-ink">
                Meet our dental specialists.
              </h1>
              <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-muted">
                Our multidisciplinary team combines modern clinical skills with a
                patient-first approach. From general dentistry and restorative care
                to surgery and aligners, each doctor focuses on safe treatment, clear
                guidance, and long-term results.
              </p>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-screen">
            <img
              src={TEAM_HERO_IMAGE}
              alt="Studio Dental doctors team in clinic"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-creamBrand py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
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
                className="w-full appearance-none border-b-2 border-[#74afa9] bg-transparent pb-2.5 pr-9 text-[0.95rem] text-ink2 outline-none"
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
    </>
  )
}
