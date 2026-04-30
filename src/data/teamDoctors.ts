export type TeamDoctor = {
  name: string
  creds: string
  role: string
  image: string
  clinic: string
  services: string[]
}

export const TEAM_DOCTORS: TeamDoctor[] = [
  {
    name: 'Dr. Yousaf Kamal',
    creds: 'BDS, MSc (Kings College London, UK), DDPH (RCS England)',
    role: 'Implantologist and cosmetic dentist',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=70',
    clinic: 'DHA Phase II, Islamabad',
    services: ['Implants', 'Cosmetic Dentistry'],
  },
  {
    name: 'Dr. Nayab Farooq',
    creds: 'BDS, C-Endo',
    role: 'Endodontic and restorative dentist',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=70',
    clinic: 'F-7 Markaz, Islamabad',
    services: ['Root Canal', 'Restorative Dentistry'],
  },
  {
    name: 'Dr. Umair Usman',
    creds: 'FCPS-R (CPSP), C. Restorative',
    role: 'Restorative and rehabilitative dentist',
    image:
      'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=70',
    clinic: 'DHA Phase II, Islamabad',
    services: ['Restorative Dentistry', 'Smile Design'],
  },
  {
    name: 'Dr. Amna Hassan',
    creds: 'BDS, FCPS (OMFS), International Certified Facial Aesthetician',
    role: 'OMFS specialist',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=70',
    clinic: 'F-7 Markaz, Islamabad',
    services: ['Oral Surgery', 'Facial Aesthetics'],
  },
  {
    name: 'Dr. Aqsa Malik',
    creds: 'Clearpath Certified, IADSR Certified',
    role: 'Aligners and contemporary dentistry',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=70',
    clinic: 'DHA Phase II, Islamabad',
    services: ['Aligners', 'General Dentistry'],
  },
  {
    name: 'Dr. Hassan Ali',
    creds: 'BDS, RDS',
    role: 'General and preventive dentistry',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=70',
    clinic: 'F-7 Markaz, Islamabad',
    services: ['General Dentistry', 'Preventive Care'],
  },
]
