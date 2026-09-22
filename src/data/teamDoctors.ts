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
      '/images/doctors/dr-yousuf.jpg',
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
      'Regional restorative dentistry study group, Islamabad chapter',
    ],
    professionalTraining: [
      'Courses / conferences / hands-on modules in implant surgery and prosthetics',
      'Clinical audits and case presentations with peer review',
      'Publications and lectures on digital workflows in implant dentistry',
    ],
  },
  {
    slug: 'umair-usman',
    name: 'Dr. Umair Usman',
    creds: 'FCPS-R (CPSP), C. Restorative',
    role: 'Restorative and rehabilitative dentist',
    image:
      '/images/doctors/dr-umair.jpg',
    clinic: 'DHA Phase II, Islamabad',
    bio:
      'A cycling enthusiast who believes the rhythm and balance found on the road mirrors the harmony needed in restorative dentistry.',
    services: ['Restorative Dentistry', 'Smile Design'],
    licenseLine: 'FCPS Restorative Dentistry, College of Physicians & Surgeons Pakistan',
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
      '/images/doctors/dr-amna.jpg',
    clinic: 'F-7 Markaz, Islamabad',
    bio:
      'Loves hiking and mountaineering. The focus required at altitude is the same precision she brings to every oral surgery procedure.',
    services: ['Oral Surgery', 'Facial Aesthetics'],
    licenseLine: 'FCPS Oral & Maxillofacial Surgery, CPSP',
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
      'International Association of Oral & Maxillofacial Surgeons, affiliated member',
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
      '/images/doctors/dr-aqsa.jpg',
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
      'International Association for Dental Research, affiliate participant',
      'Digital orthodontics study circle, Islamabad',
    ],
    professionalTraining: [
      'Annual aligner biomechanics updates',
      'Photography and smile-line analysis workshops',
      'Patient consent and expectation-management training',
    ],
  },
  {
    slug: 'rida-shahzad',
    name: 'Dr. Rida Shahzad',
    creds: 'BDS, FCPS (Operative Dentistry)',
    role: 'Endodontist and restorative dentist',
    image: '/images/doctors/dr-rida.jpg',
    clinic: 'F-7 Markaz, Islamabad',
    bio:
      'Restores vintage fountain pens in her spare time. The steady hand and patience that hobby demands is the same one she brings to every root canal.',
    services: ['Root Canal', 'Restorative Dentistry'],
    heroTitleLines: ['BDS, FCPS', 'Endodontist', 'Restorative dentist'],
    licenseLine: 'License / registration: PMDC-registered; FCPS Operative Dentistry',
    locationLine: 'Islamabad / F-7 Markaz clinic',
    practiceAreas: [
      'Primary and re-treatment root canal therapy',
      'Rotary endodontics under magnification',
      'Post and core build-ups',
      'Management of dental trauma',
      'Complex multi-canal molar cases',
      'Cracked tooth diagnosis and management',
    ],
    biography: [
      'Leads endodontic care at Studio Dental F-7 Markaz.',
      'Focuses on saving teeth that have been referred for extraction elsewhere.',
      'Committed to pain-free technique and thorough anaesthesia protocols.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS).',
      'Fellowship of the College of Physicians and Surgeons Pakistan (FCPS) in Operative Dentistry.',
      'Continuing education in rotary instrumentation and apex location.',
    ],
    membership: [
      'Pakistan Dental Association',
      'Pakistan Endodontic Society',
    ],
    professionalTraining: [
      'Hands-on modules in microscope-assisted endodontics',
      'Case audits on retreatment outcomes',
    ],
  },
  {
    slug: 'maria-iqbal',
    name: 'Dr. Maria Iqbal',
    creds: 'BDS, MPH',
    role: 'General and preventive dentist',
    image: '/images/doctors/dr-maria.jpg',
    clinic: 'DHA Phase II, Islamabad',
    bio:
      'Volunteers at community screening camps most weekends, which shapes how she talks to patients about prevention rather than repair.',
    services: ['General Dentistry', 'Preventive Care'],
    heroTitleLines: ['BDS, MPH', 'General dentist', 'Preventive care'],
    licenseLine: 'License / registration: PMDC-registered; MPH in community health',
    locationLine: 'Islamabad / DHA Phase II clinic',
    practiceAreas: [
      'Routine examination and risk assessment',
      'Professional scaling and polishing',
      'Fluoride therapy and fissure sealants',
      'Oral hygiene coaching',
      'Early caries detection',
      'Recall and maintenance planning',
    ],
    biography: [
      'First point of contact for many patients at DHA Phase II.',
      'Builds long-term prevention plans rather than one-off fixes.',
      'Runs the practice recall programme and hygiene protocols.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS).',
      'Master of Public Health with a focus on community oral health.',
      'Certification in minimally invasive caries management.',
    ],
    membership: [
      'Pakistan Dental Association',
      'Public health dentistry working group',
    ],
    professionalTraining: [
      'Workshops in preventive protocols and patient communication',
      'Community outreach and screening programmes',
    ],
  },
  {
    slug: 'zainab-tariq',
    name: 'Dr. Zainab Tariq',
    creds: 'BDS, FCPS (Oral & Maxillofacial Surgery)',
    role: 'Oral surgeon and implantologist',
    image: '/images/doctors/dr-zainab.jpg',
    clinic: 'F-7 Markaz, Islamabad',
    bio:
      'Competitive swimmer through university. Says the breath control and composure carry over directly into long surgical lists.',
    services: ['Oral Surgery', 'Implants'],
    heroTitleLines: ['BDS, FCPS', 'Oral surgeon', 'Implantologist'],
    licenseLine: 'License / registration: PMDC-registered; FCPS Oral & Maxillofacial Surgery',
    locationLine: 'Islamabad / F-7 Markaz clinic',
    practiceAreas: [
      'Surgical and impacted third molar removal',
      'Implant placement and site preparation',
      'Bone grafting and sinus lift procedures',
      'Cyst and lesion removal',
      'Pre-prosthetic surgery',
      'Management of surgical complications',
    ],
    biography: [
      'Handles the surgical caseload at Studio Dental F-7 Markaz.',
      'Works closely with the restorative team on implant planning.',
      'Emphasises conservative technique and predictable healing.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS).',
      'Fellowship (FCPS) in Oral and Maxillofacial Surgery.',
      'Advanced training in guided implant surgery and grafting.',
    ],
    membership: [
      'Pakistan Dental Association',
      'Association of Oral and Maxillofacial Surgeons of Pakistan',
    ],
    professionalTraining: [
      'Cadaveric and hands-on implant surgery courses',
      'Peer-reviewed surgical case presentations',
    ],
  },
  {
    slug: 'mashal-ahmed',
    name: 'Dr. Mashal Ahmed',
    creds: 'BDS, Certified Orthodontic Provider',
    role: 'Orthodontist and aligner specialist',
    image: '/images/doctors/dr-mashal.jpg',
    clinic: 'DHA Phase II, Islamabad',
    bio:
      'Studied classical piano for twelve years. Reads a treatment plan the way she reads a score, in phrases rather than single notes.',
    services: ['Aligners', 'General Dentistry'],
    heroTitleLines: ['BDS, Orthodontics', 'Orthodontist', 'Aligner specialist'],
    licenseLine: 'License / registration: PMDC-registered; certified aligner provider',
    locationLine: 'Islamabad / DHA Phase II clinic',
    practiceAreas: [
      'Clear aligner treatment planning',
      'Fixed metal and ceramic braces',
      'Space management and interceptive orthodontics',
      'Retention and relapse management',
      'Digital scanning and treatment simulation',
      'Adult orthodontic cases',
    ],
    biography: [
      'Runs the orthodontic clinic at DHA Phase II.',
      'Specialises in adult cases where discretion matters.',
      'Uses digital simulation so patients see the outcome before starting.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS).',
      'Certified provider training in clear aligner therapy.',
      'Continuing education in biomechanics and anchorage control.',
    ],
    membership: [
      'Pakistan Dental Association',
      'Pakistan Orthodontic Society',
    ],
    professionalTraining: [
      'Aligner certification and advanced case modules',
      'Digital workflow and intraoral scanning training',
    ],
  },
  {
    slug: 'abeera-khan',
    name: 'Dr. Abeera Khan',
    creds: 'BDS, PG Dip (Aesthetic Dentistry)',
    role: 'Cosmetic and smile design dentist',
    image: '/images/doctors/dr-abeera.jpg',
    clinic: 'F-7 Markaz, Islamabad',
    bio:
      'Trained as a portrait painter before dentistry, which is why she talks about smiles in terms of proportion and light.',
    services: ['Cosmetic Dentistry', 'Smile Design'],
    heroTitleLines: ['BDS, PG Dip', 'Cosmetic dentist', 'Smile design'],
    licenseLine: 'License / registration: PMDC-registered; postgraduate diploma in aesthetic dentistry',
    locationLine: 'Islamabad / F-7 Markaz clinic',
    practiceAreas: [
      'Porcelain and composite veneers',
      'Digital smile design',
      'Aesthetic composite bonding',
      'Supervised tooth whitening',
      'Gum contouring for smile symmetry',
      'Shade matching and characterisation',
    ],
    biography: [
      'Leads cosmetic cases at Studio Dental F-7 Markaz.',
      'Plans every case photographically before any preparation begins.',
      'Favours additive, minimally invasive technique wherever possible.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS).',
      'Postgraduate Diploma in Aesthetic and Restorative Dentistry.',
      'Hands-on training in layered composite artistry.',
    ],
    membership: [
      'Pakistan Dental Association',
      'Aesthetic dentistry study group',
    ],
    professionalTraining: [
      'Advanced veneer preparation and bonding courses',
      'Photography and shade communication workshops',
    ],
  },
  {
    slug: 'alizey-raza',
    name: 'Dr. Alizey Raza',
    creds: 'BDS, Cert. Paediatric Dentistry',
    role: 'Paediatric and preventive dentist',
    image: '/images/doctors/dr-alizey.jpg',
    clinic: 'DHA Phase II, Islamabad',
    bio:
      'Keeps a drawer of picture books in her surgery. Reckons a child who is read to first is a child who opens their mouth without a fight.',
    services: ['Preventive Care', 'General Dentistry'],
    heroTitleLines: ['BDS, Paediatrics', 'Paediatric dentist', 'Preventive care'],
    licenseLine: 'License / registration: PMDC-registered; certification in paediatric dentistry',
    locationLine: 'Islamabad / DHA Phase II clinic',
    practiceAreas: [
      'Child examination and behaviour guidance',
      'Fissure sealants and fluoride application',
      'Paediatric fillings and pulpotomy',
      'Habit counselling and space maintenance',
      'Dental trauma in children',
      'Parent education and prevention planning',
    ],
    biography: [
      'Sees the practice paediatric list at DHA Phase II.',
      'Focuses on making a first dental visit calm and unhurried.',
      'Works with parents on diet and brushing routines at home.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS).',
      'Certification in Paediatric Dentistry and child behaviour management.',
      'Training in minimally invasive paediatric restorative technique.',
    ],
    membership: [
      'Pakistan Dental Association',
      'Paediatric dentistry interest group',
    ],
    professionalTraining: [
      'Behaviour guidance and anxiety management workshops',
      'Paediatric trauma management modules',
    ],
  },
  {
    slug: 'shayzmin-ali',
    name: 'Dr. Shayzmin Ali',
    creds: 'BDS, MSc (Restorative Dentistry)',
    role: 'Restorative and prosthodontic dentist',
    image: '/images/doctors/dr-shayzmin.jpg',
    clinic: 'F-7 Markaz, Islamabad',
    bio:
      'Builds architectural models as a hobby. Approaches a full-mouth rehabilitation the same way, structure first and finish last.',
    services: ['Restorative Dentistry', 'Cosmetic Dentistry'],
    heroTitleLines: ['BDS, MSc', 'Restorative dentist', 'Prosthodontics'],
    licenseLine: 'License / registration: PMDC-registered; MSc in Restorative Dentistry',
    locationLine: 'Islamabad / F-7 Markaz clinic',
    practiceAreas: [
      'Crowns, bridges and onlays',
      'Full-mouth rehabilitation',
      'Removable and implant-supported dentures',
      'Occlusal analysis and bite reconstruction',
      'Zirconia and full-ceramic restorations',
      'Management of tooth wear',
    ],
    biography: [
      'Handles complex restorative and prosthodontic cases at F-7 Markaz.',
      'Plans rehabilitations around long-term maintainability.',
      'Collaborates with the surgical team on implant prosthetics.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS).',
      'MSc in Restorative Dentistry.',
      'Advanced continuum in occlusion and full-arch prosthetics.',
    ],
    membership: [
      'Pakistan Dental Association',
      'Restorative dentistry study group - Islamabad chapter',
    ],
    professionalTraining: [
      'Occlusion and full-mouth rehabilitation courses',
      'Digital prosthetic workflow training',
    ],
  },
]

export function getDoctorBySlug(slug: string): TeamDoctor | undefined {
  return TEAM_DOCTORS.find((d) => d.slug === slug)
}
