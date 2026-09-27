import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const CLINIC_LINKS = [
  {
    title: 'Services',
    desc: 'Explore all available dental, implantology, and orthodontic treatments.',
    href: '/#services',
  },
  {
    title: 'Prices',
    desc: 'Get transparent treatment planning and pricing information from our team.',
    href: '/#services',
  },
  {
    title: 'Doctors',
    desc: 'Meet experienced clinicians across surgery, prosthodontics, and periodontology.',
    href: '/#doctors',
  },
  {
    title: 'About us',
    desc: 'Learn more about the Studio Dental clinic mission and treatment approach.',
    href: '/#about',
  },
  {
    title: 'News',
    desc: 'Read current clinic updates, campaigns, and treatment insights.',
    href: '/#blog',
  },
  {
    title: 'Contacts',
    desc: 'Find both clinic locations, phone numbers, emails, and opening hours.',
    href: '/#contact',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-surface-raised py-10 md:py-16">
      <div className="mx-auto w-full page-shell px-5 md:px-8">
        <div className="mx-auto mb-6 flex max-w-[36rem] flex-col items-center gap-3 text-center md:mb-9">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-4 py-1.5 eyebrow text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Clinic information
          </span>
          <h2 className="mt-4 h2">Everything you may need in one place.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLINIC_LINKS.map((item) => (
            <article
              key={item.title}
              className="relative flex flex-col gap-5 overflow-hidden rounded-lg border border-line bg-surface-raised p-6 shadow-1 transition duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:shadow-2"
            >
              <div className="absolute left-0 top-0 h-[3px] w-full bg-brand" aria-hidden="true" />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/20 text-brand" aria-hidden="true">
                <ArrowRight size={18} strokeWidth={2.25} aria-hidden />
              </div>
              <h3 className="h4 text-ink">{item.title}</h3>
              <p className="m-0 flex-1 body text-ink">
                {item.desc}
              </p>
              <Link
                to={item.href}
                className="inline-flex items-center gap-2 border-t border-line pt-3 label text-ink transition hover:text-ink"
              >
                Open section
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
