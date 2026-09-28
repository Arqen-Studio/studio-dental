import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'
import { SERVICES_DATA } from '../data/services'
import { iconForService } from '../data/serviceIcons'

/** Six cards so the rows fill (3 × 2 on desktop, 2 × 3 on tablet). IDs must exist in SERVICES_DATA. */
const HOME_SHOWCASE_SERVICE_IDS = [
  'dental-implantation',
  'teeth-straightening',
  'oral-hygiene',
  'dental-fillings',
  'root-canal',
  'childrens-dentistry',
]

const SHOWCASE = HOME_SHOWCASE_SERVICE_IDS.flatMap((id) => SERVICES_DATA.filter((s) => s.id === id))

export default function HomeServicesShowcase() {
  return (
    <section id="services" className="bg-surface px-5 py-16 md:px-8 md:py-24" aria-labelledby="home-services-heading">
      <div className="mx-auto w-full page-shell">
        <SectionHeader
          id="home-services-heading"
          eyebrow="Treatments"
          title="Everything your smile needs, in one place"
          lead="From check-ups and hygiene to fillings, crowns, implants, aligners and dental care for children. A few are below, and every treatment we offer is listed on the treatments page with prices for both clinics."
          action={
            <Link to="/services" className="sd-btn sd-btn--secondary sd-btn--md">
              <span>See treatments and prices</span>
              <ArrowRight className="sd-icon" size={18} strokeWidth={1.75} aria-hidden />
            </Link>
          }
          className="mb-8 md:mb-10"
        />

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE.map((s) => (
            <li key={s.id}>
              <ServiceCard id={s.id} title={s.title} description={s.subtitle} Icon={iconForService(s.id)} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
