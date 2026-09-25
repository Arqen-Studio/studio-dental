export type ClinicLocation = {
  id: string
  name: string
  city: string
  photo: string
  address: string
  mapUrl: string
  phone: string
  email: string
  hours: string[]
}

export const CLINICS: ClinicLocation[] = [
  {
    id: 'dha',
    name: 'DHA Phase II',
    city: 'DHA Phase II',
    photo: '/images/clinic/interior-a.jpg',
    address: '1st Floor, Plaza No. 26, Main Iqbal Boulevard, Sector C, DHA Phase II, Islamabad',
    mapUrl: 'https://maps.google.com/?q=DHA+Phase+II+Islamabad',
    phone: '+92 329 9961999',
    email: 'thestudiodentalclinic@gmail.com',
    hours: ['Mon – Fri  10:00 – 20:00', 'Sat  10:00 – 17:00'],
  },
  {
    id: 'f7',
    name: 'F-7 Markaz',
    city: 'F-7 Markaz',
    photo: '/images/clinic/interior-b.jpg',
    address: 'Jinnah Super, F-7 Markaz, Islamabad',
    mapUrl: 'https://maps.google.com/?q=F-7+Markaz+Islamabad',
    phone: '+92 329 3519999',
    email: 'thestudiodentalclinic@gmail.com',
    hours: ['Mon – Fri  10:00 – 20:00', 'Sat  10:00 – 17:00'],
  },
]
