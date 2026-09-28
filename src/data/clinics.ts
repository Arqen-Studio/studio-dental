export type ClinicLocation = {
  id: string
  name: string
  city: string
  photo: string
  address: string
  mapUrl: string
  phone: string
  email: string
  /** [days, times] pairs, in the voice format: ['Mon–Fri', '10:00–20:00'] */
  hours: [string, string][]
}

export const CLINICS: ClinicLocation[] = [
  {
    id: 'dha',
    name: 'DHA Phase II',
    city: 'DHA Phase II',
    photo: '/images/clinic/interior-a.jpg',
    address: '1st Floor, Plaza No. 26, Main Iqbal Boulevard, Sector C, DHA Phase II, Islamabad',
    // [TODO: confirm with client] a search link, not the branch's Google Business Profile URL.
    mapUrl: 'https://maps.google.com/?q=DHA+Phase+II+Islamabad',
    phone: '+92 329 9961999',
    email: 'thestudiodentalclinic@gmail.com',
    hours: [['Mon–Fri', '10:00–20:00'], ['Sat', '10:00–17:00']],
  },
  {
    id: 'f7',
    name: 'F-7 Markaz',
    city: 'F-7 Markaz',
    photo: '/images/clinic/interior-b.jpg',
    address: 'Jinnah Super, F-7 Markaz, Islamabad',
    // [TODO: confirm with client] a search link, not the branch's Google Business Profile URL.
    mapUrl: 'https://maps.google.com/?q=F-7+Markaz+Islamabad',
    phone: '+92 329 3519999',
    email: 'thestudiodentalclinic@gmail.com',
    hours: [['Mon–Fri', '10:00–20:00'], ['Sat', '10:00–17:00']],
  },
]

/** The number the header and form messages show (the DHA Phase II line). */
export const MAIN_PHONE = CLINICS[0].phone

/** `+92 329 9961999` → `tel:+923299961999` */
export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`

/**
 * [TODO: confirm with client] This URL came with the repository; the clinic has
 * not confirmed it is their profile (it is not in docs/client-questions.md).
 */
export const INSTAGRAM_URL = 'https://www.instagram.com/studiodentalpk?igsh=MWt5cmJzbzZhbms2bw%3D%3D'

/**
 * The clinic's years of experience, used everywhere the site states it.
 * [TODO: confirm with client] The site said 17; Dr. Yousaf Kamal's biography
 * says sixteen years of his own experience. See docs/client-questions.md.
 */
export const YEARS_OF_EXPERIENCE = 17
