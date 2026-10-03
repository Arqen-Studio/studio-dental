import doctorsData from './teamDoctors.json'

export type TeamDoctor = {
  slug: string
  name: string
  creds: string
  role: string
  image: string
  clinic: string
  bio: string
  services: string[]
  heroTitleLines?: string[]
  licenseLine: string
  locationLine: string
  practiceAreas: string[]
  biography: string[]
  education: string[]
  membership: string[]
  professionalTraining: string[]
}

/** Doctor content lives in teamDoctors.json so it reads as data, not code.
 *  The JSON is type-checked against TeamDoctor on import. */
export const TEAM_DOCTORS: TeamDoctor[] = doctorsData

export function getDoctorBySlug(slug: string): TeamDoctor | undefined {
  return TEAM_DOCTORS.find((d) => d.slug === slug)
}
