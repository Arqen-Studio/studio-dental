import { useMemo, useState } from 'react'
import { TeamDoctorCard } from '../components/TeamDoctorCard'

type TeamDoctor = {
  name: string
  creds: string
  role: string
  image: string
  clinic: string
  services: string[]
}

const TEAM_DOCTORS: TeamDoctor[] = [
  {
    name: 'Dr. Yousaf Kamal',
    creds: 'BDS, MSc (Kings College London, UK), DDPH (RCS England)',
    role: 'Implantologist and cosmetic dentist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=70',
    clinic: 'DHA Phase II, Islamabad',
    services: ['Implants', 'Cosmetic Dentistry'],
  },
  {
    name: 'Dr. Nayab Farooq',
    creds: 'BDS, C-Endo',
    role: 'Endodontic and restorative dentist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=70',
    clinic: 'F-7 Markaz, Islamabad',
    services: ['Root Canal', 'Restorative Dentistry'],
  },
  {
    name: 'Dr. Umair Usman',
    creds: 'FCPS-R (CPSP), C. Restorative',
    role: 'Restorative and rehabilitative dentist',
    image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=70',
    clinic: 'DHA Phase II, Islamabad',
    services: ['Restorative Dentistry', 'Smile Design'],
  },
  {
    name: 'Dr. Amna Hassan',
    creds: 'BDS, FCPS (OMFS), International Certified Facial Aesthetician',
    role: 'OMFS specialist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=70',
    clinic: 'F-7 Markaz, Islamabad',
    services: ['Oral Surgery', 'Facial Aesthetics'],
  },
  {
    name: 'Dr. Aqsa Malik',
    creds: 'Clearpath Certified, IADSR Certified',
    role: 'Aligners and contemporary dentistry',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=70',
    clinic: 'DHA Phase II, Islamabad',
    services: ['Aligners', 'General Dentistry'],
  },
  {
    name: 'Dr. Hassan Ali',
    creds: 'BDS, RDS',
    role: 'General and preventive dentistry',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=70',
    clinic: 'F-7 Markaz, Islamabad',
    services: ['General Dentistry', 'Preventive Care'],
  },
]

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
      <section className="relative min-h-screen overflow-hidden bg-ink text-creamBrand">
        <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="bg-gradient-to-br from-ink via-ink2 to-[#1d6078]">
            <div className="mx-auto flex h-full w-full max-w-[620px] flex-col justify-center px-5 pb-14 pt-[calc(78px+2.2rem)] md:px-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em]">
                <img src="/favicon.svg" alt="" className="h-3.5 w-3.5 object-contain" />
                Studio Dental Team
              </span>
              <h1 className="mt-5 text-[clamp(2rem,3.6vw,3.4rem)] leading-[0.98] text-creamBrand">
                Meet our dental specialists.
              </h1>
              <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-creamBrand/80">
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
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/20 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f3] py-16 md:py-24">
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
