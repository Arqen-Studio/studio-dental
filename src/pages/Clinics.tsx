import { Link } from 'react-router-dom'

const CLINICS = [
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

const STAFF = [
  {
    name: 'Dr. Yousaf Kamal',
    role: 'Implantologist',
    clinic: 'DHA Phase II',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=70',
  },
  {
    name: 'Dr. Nayab Farooq',
    role: 'Endodontist',
    clinic: 'F-7 Markaz',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=70',
  },
  {
    name: 'Dr. Umair Usman',
    role: 'Restorative Dentist',
    clinic: 'DHA Phase II',
    image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=600&q=70',
  },
  {
    name: 'Dr. Amna Hassan',
    role: 'OMFS Specialist',
    clinic: 'F-7 Markaz',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=70',
  },
  {
    name: 'Dr. Aqsa Malik',
    role: 'Aligners Specialist',
    clinic: 'DHA Phase II',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=70',
  },
  {
    name: 'Dr. Hassan Ali',
    role: 'General Dentistry',
    clinic: 'F-7 Markaz',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=70',
  },
]

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21C12 21 5 13.5 5 8.5a7 7 0 0 1 14 0c0 5-7 12.5-7 12.5z"/>
      <circle cx="12" cy="8.5" r="2.5"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="9" y1="7" x2="15" y2="7"/>
      <line x1="9" y1="11" x2="15" y2="11"/>
      <line x1="9" y1="15" x2="12" y2="15"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"/>
      <polyline points="12 7 12 12 15.5 14.5"/>
    </svg>
  )
}

export default function Clinics() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-skyBrand pb-12 pt-[calc(78px+2rem)]">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <h1 className="text-[clamp(2.6rem,5vw,4rem)] font-bold leading-none text-ink">
            Contacts
          </h1>
        </div>
      </section>

      {/* ── Clinic photo cards ── */}
      <section className="bg-[#f0efeb] py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CLINICS.map((clinic) => (
              <div key={clinic.id} className="overflow-hidden rounded-xl bg-white shadow-soft-sm">
                {/* Photo */}
                <div className="aspect-[8/3] overflow-hidden bg-[#c7c3c7]">
                  <img
                    src={clinic.photo}
                    alt={`Studio Dental ${clinic.name} interior`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Info rows with dividers */}
                <div className="divide-y divide-black/8 px-5 py-2 md:px-7">
                  {/* Address */}
                  <div className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex-shrink-0 text-skyBrand"><PinIcon /></span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.78rem] font-semibold uppercase tracking-wide text-ink2">Address</p>
                      <p className="mt-1 text-[0.9rem] text-ink">{clinic.address}</p>
                      <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer"
                        className="mt-1 block text-[0.85rem] font-medium text-skyBrand transition hover:underline">
                        Location on the map
                      </a>
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex-shrink-0 text-skyBrand"><PhoneIcon /></span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.78rem] font-semibold uppercase tracking-wide text-ink2">Phone for registration</p>
                      <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                        className="mt-1 block text-[0.9rem] font-medium text-skyBrand transition hover:underline">
                        {clinic.phone}
                      </a>
                      <p className="mt-1 text-[0.78rem] font-semibold uppercase tracking-wide text-ink2">E-mail</p>
                      <a href={`mailto:${clinic.email}`}
                        className="mt-0.5 block break-all text-[0.9rem] font-medium text-skyBrand transition hover:underline">
                        {clinic.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex-shrink-0 text-skyBrand"><ClockIcon /></span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.78rem] font-semibold uppercase tracking-wide text-ink2">Working hours</p>
                      <div className="mt-1 flex flex-col gap-0.5">
                        {clinic.hours.map((h) => (
                          <p key={h} className="text-[0.9rem] text-ink">{h}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 py-5">
                    <Link to="/contact-us"
                      className="flex-1 rounded-full bg-skyBrand py-3 text-center text-[0.9rem] font-semibold text-ink transition hover:bg-skyBrand/85">
                      Contact
                    </Link>
                    <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-skyBrand py-3 text-center text-[0.9rem] font-semibold text-skyBrand transition hover:bg-skyBrand/10">
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── "You will be welcomed." staff grid ── */}
      <section className="bg-[#f0efeb] pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <h2 className="mb-10 text-center text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-ink">
            You will be welcomed.
          </h2>
          <div className="grid grid-cols-1 gap-4 min-[460px]:grid-cols-2 lg:grid-cols-3">
            {STAFF.map((person) => (
              <div key={person.name} className="overflow-hidden rounded-xl bg-white shadow-soft-sm">
                <div className="aspect-[3/4] overflow-hidden bg-[#d4d0d4]">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-3 sm:p-5">
                  <p className="text-[0.9rem] font-semibold leading-snug text-skyBrand sm:text-[1.05rem]">{person.name}</p>
                  <p className="mt-0.5 text-[0.78rem] text-muted sm:text-[0.88rem]">{person.role}</p>
                  <span className="mt-2 inline-block rounded-sm bg-skyBrand/15 px-2 py-0.5 text-[0.68rem] font-medium text-skyBrand sm:mt-3 sm:px-3 sm:py-1 sm:text-[0.75rem]">
                    {person.clinic}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Second Contacts section — simple city cards ── */}
      <section className="bg-[#f0efeb] pb-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
          <h2 className="mb-6 text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-ink">Contacts</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {CLINICS.map((clinic) => (
              <div key={`simple-${clinic.id}`} className="rounded-xl bg-white p-7 shadow-soft-sm md:p-9">
                <h3 className="mb-5 text-[1.6rem] font-bold text-ink">{clinic.city}</h3>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-skyBrand"><PinIcon /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.92rem] text-ink">{clinic.address}</p>
                    <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer"
                      className="mt-1 block text-[0.85rem] font-medium text-skyBrand transition hover:underline">
                      Location on the map
                    </a>
                    <div className="mt-3 h-px w-10 bg-skyBrand/60" />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="mt-5 flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-skyBrand"><PhoneIcon /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.88rem] text-ink2">Tel. for registration:</p>
                    <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                      className="block text-[0.92rem] font-medium text-skyBrand transition hover:underline">
                      {clinic.phone}
                    </a>
                    <p className="mt-1 text-[0.88rem] text-ink2">E-mail:</p>
                    <a href={`mailto:${clinic.email}`}
                      className="block break-all text-[0.92rem] font-medium text-skyBrand transition hover:underline">
                      {clinic.email}
                    </a>
                    <Link to="/contact-us"
                      className="mt-1 block text-[0.88rem] font-medium text-skyBrand transition hover:underline">
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Hours */}
                <div className="mt-5 flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 text-skyBrand"><ClockIcon /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.88rem] font-medium text-ink2">Working hours:</p>
                    {clinic.hours.map((h) => (
                      <p key={h} className="text-[0.92rem] text-ink">{h}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
