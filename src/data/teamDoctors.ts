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

export const TEAM_DOCTORS: TeamDoctor[] = [
  {
    slug: 'yousaf-kamal',
    name: 'Dr. Yousaf Kamal',
    creds: 'BDS, MSc (Kings College London, UK), DDPH (RCS England)',
    role: 'Implantologist and cosmetic dentist',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=70',
    clinic: 'DHA Phase II, Islamabad',
    bio:
      'Has run marathons across three continents. The endurance and focus required at mile 26 are the same qualities he brings to every implant procedure.',
    services: ['Implants', 'Cosmetic Dentistry'],
    heroTitleLines: ['BDS, MSc, DDPH', 'Implantologist', 'Cosmetic dentist'],
    licenseLine: 'License / registration: CPSP–verified restorative & implant training (UK)',
    locationLine: 'Islamabad / DHA Phase II clinic',
    practiceAreas: [
      'Surgical and restorative dental implants',
      'Full-arch fixed and removable implant prosthetics',
      'Smile design and porcelain veneers',
      'Bone grafting and ridge augmentation (multidisciplinary)',
      'Minimally invasive cosmetic bonding and whitening',
      'Digital planning for predictable implant placement',
    ],
    biography: [
      'Lead clinician for advanced implant and cosmetic cases at Studio Dental DHA Phase II.',
      'Focuses on treatment plans that balance long-term function, aesthetics, and maintenance.',
      'Regularly mentors associates on occlusion, prosthetic workflows, and complication prevention.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS); postgraduate MSc in implant-related restorative dentistry from Kings College London, UK.',
      'Diploma in Dental Public Health (DDPH), Royal College of Surgeons of England.',
      'Advanced continuum in immediate loading, soft-tissue sculpting, and full-arch rehabilitation.',
    ],
    membership: [
      'Pakistan Dental Association',
      'International Team for Implantology (study clubs & continuing education)',
      'Regional restorative dentistry study group — Islamabad chapter',
    ],
    professionalTraining: [
      'Courses / conferences / hands-on modules in implant surgery and prosthetics',
      'Clinical audits and case presentations with peer review',
      'Publications and lectures on digital workflows in implant dentistry',
    ],
  },
  {
    slug: 'nayab-farooq',
    name: 'Dr. Nayab Farooq',
    creds: 'BDS, C-Endo',
    role: 'Endodontic and restorative dentist',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=70',
    clinic: 'F-7 Markaz, Islamabad',
    bio:
      'An avid painter who finds that the patience and precision of art translates perfectly to the delicate craft of root canal therapy.',
    services: ['Root Canal', 'Restorative Dentistry'],
    licenseLine: 'Clinical registration: Pakistan Medical & Dental Council',
    locationLine: 'Islamabad / F-7 Markaz clinic',
    practiceAreas: [
      'Microscopic and conventional root canal therapy',
      'Retreatment of previously treated teeth',
      'Vital pulp therapy and apexification',
      'Post-endodontic core buildup and crown prep',
      'Direct composite restorations and occlusal rehabilitation',
      'Cracked-tooth assessment and splinting where indicated',
    ],
    biography: [
      'Provides referral-grade endodontics alongside everyday restorative care.',
      'Known for gentle anesthesia technique and clear explanation of treatment steps.',
      'Collaborates with prosthodontic colleagues on teeth slated for crowns after RCT.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS) with focused training in conservative dentistry.',
      'Certified endodontist-level coursework (C-Endo) including rotary instrumentation and obturation systems.',
    ],
    membership: [
      'Pakistan Endodontic Society',
      'American Association of Endodontists — affiliate continuing education participant',
    ],
    professionalTraining: [
      'Hands-on workshops in rubber dam isolation, rotary NiTi, and warm gutta-percha',
      'Case reviews with restorative team on structurally compromised teeth',
      'Patient communication seminars for anxiety reduction',
    ],
  },
  {
    slug: 'umair-usman',
    name: 'Dr. Umair Usman',
    creds: 'FCPS-R (CPSP), C. Restorative',
    role: 'Restorative and rehabilitative dentist',
    image:
      'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=70',
    clinic: 'DHA Phase II, Islamabad',
    bio:
      'A cycling enthusiast who believes the rhythm and balance found on the road mirrors the harmony needed in restorative dentistry.',
    services: ['Restorative Dentistry', 'Smile Design'],
    licenseLine: 'FCPS Restorative Dentistry — College of Physicians & Surgeons Pakistan',
    locationLine: 'Islamabad / DHA Phase II clinic',
    practiceAreas: [
      'Full-mouth rehabilitation and occlusal reorganisation',
      'Indirect restorations: crowns, bridges, onlays',
      'Wear cases and vertical dimension evaluation',
      'Adhesive dentistry and biomimetic protocols',
      'Smile design mock-ups and provisional phases',
      'TMJ-friendly restorative planning with splint therapy referrals',
    ],
    biography: [
      'Builds phased treatment roadmaps for patients with heavily worn or failing dentitions.',
      'Emphasizes photographic documentation and mounted casts when complexity warrants.',
      'Coordinates with periodontics and orthodontics for interdisciplinary outcomes.',
    ],
    education: [
      'Fellowship of the College of Physicians and Surgeons Pakistan (FCPS) in Restorative Dentistry.',
      'Certificate in advanced restorative techniques (C. Restorative) with emphasis on occlusion.',
    ],
    membership: [
      'College of Physicians & Surgeons Pakistan',
      'Pakistan Academy of Restorative Dentistry',
    ],
    professionalTraining: [
      'Annual updates in adhesive systems, ceramics, and cement selection',
      'Study clubs on failures in fixed prosthodontics',
      'Teaching sessions for junior dentists on prep design',
    ],
  },
  {
    slug: 'amna-hassan',
    name: 'Dr. Amna Hassan',
    creds: 'BDS, FCPS (OMFS), International Certified Facial Aesthetician',
    role: 'OMFS specialist',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=70',
    clinic: 'F-7 Markaz, Islamabad',
    bio:
      'Loves hiking and mountaineering. The focus required at altitude is the same precision she brings to every oral surgery procedure.',
    services: ['Oral Surgery', 'Facial Aesthetics'],
    licenseLine: 'FCPS Oral & Maxillofacial Surgery — CPSP',
    locationLine: 'Islamabad / F-7 Markaz clinic',
    practiceAreas: [
      'Third molar and complicated extractions',
      'Dental alveolar surgery and pre-prosthetic preparation',
      'Biopsy and oral pathology work-up',
      'Facial aesthetic injectables (certified non-surgical protocols)',
      'Pre-implant bone assessment with multidisciplinary planning',
      'Management of odontogenic infections',
    ],
    biography: [
      'Provides hospital-standard surgical discipline in an outpatient dental setting.',
      'Integrates facial aesthetics only where medically appropriate and consent is thorough.',
      'Supports implant surgeons with ridge splits and grafting referrals.',
    ],
    education: [
      'Bachelor of Dental Surgery followed by FCPS residency in Oral & Maxillofacial Surgery.',
      'International certification in facial aesthetics with emphasis on anatomy and complication management.',
    ],
    membership: [
      'Pakistan Association of Oral & Maxillofacial Surgeons',
      'International Association of Oral & Maxillofacial Surgeons — affiliated member',
    ],
    professionalTraining: [
      'Advanced trauma and infection-control simulations',
      'Aesthetic cadaver and ultrasound-guided workshops',
      'Multidisciplinary tumour board observerships',
    ],
  },
  {
    slug: 'aqsa-malik',
    name: 'Dr. Aqsa Malik',
    creds: 'Clearpath Certified, IADSR Certified',
    role: 'Aligners and contemporary dentistry',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=70',
    clinic: 'DHA Phase II, Islamabad',
    bio:
      'A yoga practitioner who channels mindfulness and attention to detail into designing perfect, comfortable aligner treatment plans.',
    services: ['Aligners', 'General Dentistry'],
    licenseLine: 'Clear aligner therapy certifications on file',
    locationLine: 'Islamabad / DHA Phase II clinic',
    practiceAreas: [
      'Clear aligner orthodontics for teens and adults',
      'Interdisciplinary spacing closure before restorative work',
      'Attachment optimization and refinement staging',
      'Minimally invasive cosmetic dentistry',
      'Preventive programmes and remineralisation protocols',
      'Retention planning and night-guard integration',
    ],
    biography: [
      'Coordinates digital scans with restorative colleagues when implants or veneers follow alignment.',
      'Prefers conservative enamel stripping only within evidence-based limits.',
    ],
    education: [
      'Bachelor of Dental Surgery with postgraduate certifications in Clearpath aligner therapy.',
      'IADSR-certified coursework in contemporary minimally invasive dentistry.',
    ],
    membership: [
      'International Association for Dental Research — affiliate participant',
      'Digital orthodontics study circle — Islamabad',
    ],
    professionalTraining: [
      'Annual aligner biomechanics updates',
      'Photography and smile-line analysis workshops',
      'Patient consent and expectation-management training',
    ],
  },
  {
    slug: 'hassan-ali',
    name: 'Dr. Hassan Ali',
    creds: 'BDS, RDS',
    role: 'General and preventive dentistry',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=70',
    clinic: 'F-7 Markaz, Islamabad',
    bio:
      'Passionate about cooking — the curiosity to understand textures and nuances in food is the same curiosity he applies to patient care.',
    services: ['General Dentistry', 'Preventive Care'],
    licenseLine: 'Registered Dental Surgeon (RDS)',
    locationLine: 'Islamabad / F-7 Markaz clinic',
    practiceAreas: [
      'Comprehensive exams and risk-based recall intervals',
      'Periodontal maintenance and non-surgical scaling',
      'Paediatric-friendly preventive visits',
      'Silver diamine fluoride and sealants where indicated',
      'Simple restorative dentistry and emergency pain relief',
      'Oral-health coaching for diabetics and hypertension patients',
    ],
    biography: [
      'First point of contact for families establishing a dental home at Studio Dental.',
      'Screens for sleep-bruxism signs and refers to restorative colleagues when needed.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS) with hospital rotations in medicine and surgery.',
      'Registered Dental Surgeon credential with continuing education in preventive science.',
    ],
    membership: [
      'Pakistan Dental Association',
      'Preventive dentistry forum — online journal club',
    ],
    professionalTraining: [
      'Caries-risk assessment and CAMBRA-style protocols',
      'Behaviour guidance for anxious patients',
      'Infection control refresher programmes',
    ],
  },
]

export function getDoctorBySlug(slug: string): TeamDoctor | undefined {
  return TEAM_DOCTORS.find((d) => d.slug === slug)
}
