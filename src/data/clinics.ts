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
    photo: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=75',
    address: 'Plaza No. 26, Main Iqbal Boulevard, DHA Phase II, Islamabad',
    mapUrl: 'https://maps.google.com/?q=DHA+Phase+II+Islamabad',
    phone: '+92 329 9961999',
    email: 'info@thestudiodental.com',
    hours: ['Mon – Fri  10:00 – 20:00', 'Sat  10:00 – 17:00'],
  },
  {
    id: 'f7',
    name: 'F-7 Markaz',
    city: 'F-7 Markaz',
    photo: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=75',
    address: 'Office #7, 2nd Floor, Near Shoe Planet, F-7 Markaz, Islamabad',
    mapUrl: 'https://maps.google.com/?q=F-7+Markaz+Islamabad',
    phone: '+92 329 3519999',
    email: 'info@thestudiodental.com',
    hours: ['Mon – Fri  10:00 – 20:00', 'Sat  10:00 – 17:00'],
  },
]
