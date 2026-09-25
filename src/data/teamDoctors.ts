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
    slug: 'amna-hassan',
    name: 'Dr. Amna Hassan',
    creds: 'BDS, FCPS (OMFS), MFDRCSI',
    role: 'Oral and maxillofacial surgeon, implantologist and aesthetic physician',
    image: '/images/doctors/dr-amna.jpg',
    clinic: 'DHA Phase II, Islamabad',
    bio:
      'Runs regularly, including marathons with Islamabad Run For You, and is a firm believer in what movement does for mental health. Also practises pilates, and fills weekends with hikes and pottery.',
    services: ['Implants', 'Oral Surgery', 'Facial Aesthetics', 'General Dentistry', 'Preventive Care'],
    heroTitleLines: ['BDS, FCPS, MFDRCSI', 'Oral and maxillofacial surgeon', 'Implantologist and aesthetic physician'],
    licenseLine: 'PMDC-registered; CPSP Fellow, FCPS (OMFS)',
    locationLine: 'Islamabad / DHA Phase II clinic',
    practiceAreas: [
      'Third molar and wisdom tooth extraction',
      'Complex and surgical extractions',
      'Surgical and restorative dental implants',
      'Full-arch fixed and removable implant prosthetics',
      'Bone grafting and ridge augmentation',
      'Digital planning for predictable implant placement',
    ],
    biography: [
      'Associate oral and maxillofacial surgeon, providing comprehensive oral surgical care at Studio Dental DHA Phase II, with expertise in routine and complex dental extractions including wisdom tooth removal.',
      'She also provides implant-based tooth replacement, both immediate and conventional, with treatment plans tailored to each patient rather than a standard approach. Her focus is on safe, precise surgical care and outcomes that are comfortable, functional and predictable.',
      'She regularly mentors associates on occlusion, prosthetic workflows and preventing complications.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS).',
      'FCPS in Oral and Maxillofacial Surgery, College of Physicians and Surgeons Pakistan.',
      'MFD, Royal College of Surgeons in Ireland.',
    ],
    membership: [
      'College of Physicians and Surgeons Pakistan (CPSP)',
      'Pakistan Dental Association',
      'Royal College of Surgeons in Ireland (RCSI)',
    ],
    professionalTraining: [
      'Hands-on modules in implant surgery and prosthetics',
      'Clinical audits and case presentations with peer review',
      'Lectures on digital workflows in implant dentistry',
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
  {
    slug: 'nayab-farooq',
    name: 'Dr. Nayab Farooq',
    creds: 'BDS, CHPE, C-Endo, Aesthetic Physician (CPD UK), ClearPath Certified',
    role: 'General and cosmetic dentist',
    image: '',
    clinic: 'DHA Phase II, Islamabad',
    bio:
      'Well organised, with a natural eye for detail and aesthetics. Whether it is creating beautiful spaces at home or crafting the perfect smile, that precision shows in her approach to restorative and cosmetic dentistry.',
    services: [
      'General Dentistry',
      'Cosmetic Dentistry',
      'Smile Design',
      'Restorative Dentistry',
      'Root Canal',
      'Facial Aesthetics',
      'Aligners',
      'Preventive Care',
      'Oral Surgery',
    ],
    heroTitleLines: ['BDS, C-Endo, CHPE', 'Restorative & cosmetic dentist', 'Aesthetic physician (CPD UK)'],
    licenseLine: 'PMDC-registered dental surgeon',
    locationLine: 'Islamabad / DHA Phase II clinic',
    practiceAreas: [
      'Smile design and veneers',
      'Minimally invasive aesthetic restorations and composite bonding',
      'Root canal treatment',
      'Crown, bridge and post and core build-up',
      'Diagnosis and treatment planning',
      'Dental cleaning and whitening',
      'Simple extractions and suturing',
      'Dentures',
      'Paediatric dentistry',
      'Aligners',
    ],
    biography: [
      'A dedicated general dentist who has been with Studio Dental since the beginning, providing comprehensive care for patients of all ages.',
      'Her approach combines clinical precision with patient comfort, working to a treatment plan tailored to each patient rather than a standard one.',
      'Her work covers aesthetic fillings, composite bonding, veneers, root canals, crowns and bridges, extractions and suturing, cleaning and whitening, and paediatric dentistry, so most treatments can be carried out under one roof.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS).',
      'Certificate in Health Professions Education (CHPE).',
      'Endodontics certification, aesthetics certification (CPD UK) and ClearPath certification.',
    ],
    membership: [],
    professionalTraining: [
      'Aesthetics certification (CPD UK, 2025)',
      'Root canal excellence course, British Academy of Restorative Dentistry',
      'Advanced tooth preparation techniques course, British Academy of Aesthetic Dentistry',
      'Endodontics certification (ACHER, 2023)',
      'Annual dental conference (APDSA, CMH Lahore, 2022)',
      'Observership in the trauma and emergency department, CMH',
    ],
  },
  {
    slug: 'arfa-rehman',
    name: 'Dr. Arfa Rehman',
    creds: 'BDS, FCPS (Operative Dentistry & Endodontics)',
    role: 'Restorative and endodontic dentist',
    image: '',
    clinic: 'F-7 Markaz, Islamabad',
    bio:
      'Enjoys hiking in her spare time. The focus, patience and attention to detail it demands complement the calm, methodical approach she brings to clinical dentistry.',
    services: [
      'Cosmetic Dentistry',
      'Smile Design',
      'Restorative Dentistry',
      'Root Canal',
      'General Dentistry',
      'Preventive Care',
    ],
    heroTitleLines: ['BDS, FCPS', 'Operative dentistry & endodontics', 'Restorative dentistry'],
    licenseLine: 'PMDC 18325-D; FCPS Operative Dentistry and Endodontics',
    locationLine: 'Islamabad / F-7 Markaz clinic',
    practiceAreas: [
      'Direct composite restorations and aesthetic bonding',
      'Anterior and posterior restorative procedures',
      'Root canal treatment and endodontic procedures',
      'Direct composite veneers and smile enhancement',
      'Tooth whitening and bleaching procedures',
      'Management of complex restorative cases',
    ],
    biography: [
      'She focuses on conservative, evidence-based restorative and endodontic care, with an emphasis on preserving natural tooth structure and achieving predictable long-term results.',
      'Her clinical approach combines function and aesthetics, particularly in anterior restorations, cosmetic bonding, tooth whitening and smile-enhancement procedures.',
      'She also has a strong interest in teaching and clinical education, with experience delivering hands-on workshops and lectures in restorative dentistry, endodontics and aesthetic dental procedures.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS), Khyber College of Dentistry, Peshawar.',
      'FCPS in Operative Dentistry and Endodontics, College of Physicians and Surgeons Pakistan (CPSP).',
      'Ongoing professional development through clinical workshops, teaching and hands-on training in restorative, endodontic and aesthetic dentistry.',
    ],
    membership: [
      'Pakistan Academy of Operative Dentistry and Endodontics (PAODE)',
    ],
    professionalTraining: [
      'Hands-on teaching and workshops in restorative and aesthetic dentistry',
      'Lectures and clinical teaching in operative dentistry and endodontics',
      'Continuing professional development in tooth whitening and minimally invasive aesthetic procedures',
    ],
  },
  {
    slug: 'rabia',
    name: 'Dr. Rabia',
    creds: 'BDS, MDS (Orthodontics), M.Orth (RCS England)',
    role: 'Consultant orthodontist',
    image: '',
    clinic: '',
    bio: '',
    services: ['Aligners'],
    heroTitleLines: ['BDS, MDS (Ortho)', 'M.Orth (RCS England)', 'Consultant orthodontist'],
    licenseLine: 'PMDC 17421-D',
    locationLine: '',
    practiceAreas: [],
    biography: [],
    education: [],
    membership: [],
    professionalTraining: [],
  },
  {
    slug: 'alizeh-hassan',
    name: 'Dr. Syeda Alizeh Hassan',
    creds: 'BDS, MFD (RCS Ireland)',
    role: 'Paediatric dentist',
    image: '/images/doctors/dr-alizey.jpg',
    clinic: 'F-7 Markaz, Islamabad',
    bio:
      'When she is not in scrubs, you will probably find her baking something sweet, practising her German, creating content, or exploring new places with her family.',
    services: ['General Dentistry', 'Restorative Dentistry', 'Preventive Care'],
    heroTitleLines: ['BDS, MFD Ireland', 'Special interest in paediatric dentistry'],
    licenseLine: 'PMDC-registered',
    locationLine: 'Islamabad / F-7 Markaz clinic',
    practiceAreas: [
      'Minimally invasive paediatric dentistry',
      'Caries arrest with silver diamine fluoride',
      'Paediatric restorative dentistry and crowns',
      'Preventive care and fluoride therapies',
      'Aesthetic composite bonding and restorations',
    ],
    biography: [
      'A general dentist with a special interest in paediatric dentistry, focusing on creating positive and comfortable dental experiences for children and their families.',
      'She takes a preventive and minimally invasive approach, with an emphasis on early caries management, preserving natural tooth structure, and helping children develop healthy oral habits from an early age.',
      'Known for her patient, child-friendly manner, she believes in building trust before treatment, and works closely with parents to make dental care understandable, practical and less intimidating for young patients.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS).',
      'Membership of the Faculty of Dentistry (MFD), Royal College of Surgeons in Ireland.',
    ],
    membership: [],
    professionalTraining: [
      'Hands-on modules in paediatric rotary endodontics',
      'Minimally invasive paediatric dentistry',
    ],
  },
  {
    slug: 'zainab-qureshi',
    name: 'Dr. Zainab Qureshi',
    creds: 'BDS (Shaheed Zulfiqar Ali Bhutto Medical University, Islamabad), C-Endo, C-Implantology, Certified Aesthetic Medicine & Facial Aesthetics Practitioner',
    role: 'General and cosmetic dentist, implant dentistry',
    image: '/images/doctors/dr-zainab.jpg',
    clinic: 'F-7 Markaz, Islamabad',
    bio:
      'An executive member of the Islamabad Winter Sports Association. She skis, travels and seeks out experiences that break the routine and bring a fresh perspective on everyday life.',
    services: [
      'Cosmetic Dentistry',
      'Smile Design',
      'Restorative Dentistry',
      'Implants',
      'Root Canal',
      'Aligners',
      'Facial Aesthetics',
      'General Dentistry',
      'Preventive Care',
    ],
    heroTitleLines: ['BDS (RDS)', 'Cosmetic dentist', 'Implant dentistry'],
    licenseLine: 'PMDC-registered, Bachelor of Dental Surgery',
    locationLine: 'Islamabad / F-7 Markaz clinic',
    practiceAreas: [
      'Teeth whitening, scaling and smile design',
      'Porcelain veneers and aesthetic dentistry',
      'Crowns, bridges and restorative dentistry',
      'Dental implant placement and implant-supported restorations',
      'Root canal treatment and endodontics',
      'Clear aligners and facial aesthetics',
    ],
    biography: [
      'At Studio Dental F-7 she offers comprehensive general, restorative and aesthetic dentistry, with an approach that emphasises thoughtful treatment planning and natural-looking results.',
      'Preserving healthy tooth structure is her priority, balancing function, aesthetics and long-term oral health in every treatment plan.',
      'She works closely with patients to understand their concerns and priorities, combining clear communication with meticulous, detail-oriented treatment.',
    ],
    education: [
      'Bachelor of Dental Surgery (BDS), Shaheed Zulfiqar Ali Bhutto Medical University, Islamabad.',
      'C-Endo certification in endodontics.',
      'C-Implantology certification in implant dentistry.',
      'Certified in aesthetic medicine and facial aesthetics.',
    ],
    membership: ['Pakistan Dental Association'],
    professionalTraining: [
      'Hands-on modules in implant surgery and prosthetics',
      'Hands-on modules in endodontics and restorative dentistry',
      'International Academy of Dermatology, Aesthetic, Anti-Aging and Plastic Surgery',
    ],
  },
]

export function getDoctorBySlug(slug: string): TeamDoctor | undefined {
  return TEAM_DOCTORS.find((d) => d.slug === slug)
}
