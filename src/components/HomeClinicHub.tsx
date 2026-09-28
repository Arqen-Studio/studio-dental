import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { YEARS_OF_EXPERIENCE } from "../data/clinics";

type HubCard = {
  to: string;
  /** Names what the tile is: the page, as the navigation labels it. */
  eyebrow: string;
  title: string;
  /** Hidden on phones to keep the section short; both pages stay in the menu and footer. */
  hideOnPhones?: boolean;
  image: string;
  imageAlt: string;
};

/**
 * Stills are frames taken from our own clinic footage in `public/videos`, so
 * every card shows the actual practice rather than a stock interior.
 */
const HUB_CARDS: HubCard[] = [
  {
    to: "/services",
    eyebrow: "Treatments",
    title: "What we treat",
    image: "/images/hub/services.jpg",
    imageAlt: "A Studio Dental treatment room, with the chair beside the window",
  },
  {
    to: "/prices",
    eyebrow: "Prices",
    title: "Both price lists",
    image: "/images/hub/prices.jpg",
    imageAlt: "Instruments laid out on a Studio Dental treatment unit",
  },
  {
    to: "/doctors",
    eyebrow: "Doctors",
    title: "Meet the team",
    image: "/images/hub/doctors.jpg",
    imageAlt: "Studio Dental clinicians treating a patient",
  },
  {
    to: "/about",
    eyebrow: "About",
    hideOnPhones: true,
    title: "Who we are",
    image: "/images/hub/about.jpg",
    imageAlt: "The waiting lounge at Studio Dental",
  },
  {
    to: "/blog",
    eyebrow: "Journal",
    hideOnPhones: true,
    title: "Articles and news",
    image: "/images/hub/news.jpg",
    imageAlt: "The Studio Dental name etched into the glass entrance door",
  },
  {
    to: "/contact-us",
    eyebrow: "Contact",
    title: "Visit or call us",
    image: "/images/hub/contacts.jpg",
    imageAlt: "The reception desk at Studio Dental",
  },
];

export default function HomeClinicHub() {
  return (
    <section
      className="bg-surface px-5 py-16 md:px-8 md:py-24"
      aria-labelledby="home-clinic-hub-heading"
    >
      <div className="mx-auto w-full page-shell">
        <SectionHeader
          id="home-clinic-hub-heading"
          eyebrow="Clinics"
          title="Two clinics, one standard of care"
          lead={`With over ${YEARS_OF_EXPERIENCE} years of experience, Studio Dental brings specialized care to Islamabad, at DHA Phase II and F-7 Markaz. From diagnostics and imaging to implants, orthodontics, restorative dentistry, and pediatric care, our teams help you plan treatment with clarity and confidence.`}
        />

        {/* 2 columns at every width, so the section stays short on phones */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-10 lg:gap-6">
          {HUB_CARDS.map((card) => (
            <Link
              data-theme="dark"
              key={card.to}
              to={card.to}
              className={`group relative aspect-square overflow-hidden rounded-md shadow-1 transition-shadow duration-200 hover:shadow-2 sm:aspect-[4/3] ${card.hideOnPhones ? "max-sm:hidden" : ""}`}
            >
              <img
                src={card.image}
                alt={card.imageAlt}
                loading="lazy"
                decoding="async"
                width={1000}
                height={750}
                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
              />

              {/* Scrim behind the title (no colour overlays on photos) */}
              <div
                className="pointer-events-none absolute inset-0 z-[1] bg-scrim"
                aria-hidden="true"
              />

              {/* Anchored to the bottom so a long title never runs off the tile. */}
              <div className="absolute inset-x-0 bottom-0 z-[2] p-4 sm:p-6">
                <span className="block eyebrow">{card.eyebrow}</span>
                <span className="mt-1 block h4 text-ink">{card.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
