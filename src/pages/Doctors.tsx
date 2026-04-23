import { Link } from 'react-router-dom'

const DOCTORS = [
  {
    name: 'Dr. Yousaf Kamal',
    creds: 'BDS, MSc (Kings College London, UK)',
    blurb:
      'General and cosmetic dentistry with a strong focus on patient comfort and clear treatment planning.',
  },
  {
    name: 'Dr. Aqsa Malik',
    creds: 'Advanced contemporary dentistry',
    blurb:
      'Certified in aligners and modern smile enhancement workflows for predictable aesthetic outcomes.',
  },
  {
    name: 'Dr. Nayab Farooq',
    creds: 'BDS, C-Endo',
    blurb:
      'Detail-focused restorative and endodontic care delivered with a gentle, patient-first approach.',
  },
]

export default function Doctors() {
  return (
    <section id="doctors" className="bg-creamBrand py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mb-8 flex max-w-[760px] flex-col gap-3 md:mb-12">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-skyBrand/30 bg-skyBrand/15 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink2">
            <span className="h-1.5 w-1.5 rounded-full bg-skyBrand" aria-hidden="true" />
            Our doctors
          </span>
          <h2>Meet the team behind your smile.</h2>
          <p className="max-w-[62ch] text-[1.02rem] text-muted">
            Experienced clinicians combining modern techniques with personalized care for every patient.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((d) => (
            <article
              key={d.name}
              className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-soft-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-soft-md"
            >
              <div className="h-56 w-full bg-black/[0.04]" aria-hidden="true" />
              <div className="p-5">
                <h3 className="text-[1.15rem]">{d.name}</h3>
                <p className="mt-1 text-[0.86rem] font-semibold uppercase tracking-[0.08em] text-skyBrand">{d.creds}</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{d.blurb}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-skyBrand px-6 py-3 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky"
          >
            Book with our team
          </Link>
        </div>
      </div>
    </section>
  )
}
