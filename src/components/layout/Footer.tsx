import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const SOCIAL_URL =
    "https://www.instagram.com/studiodentalpk?igsh=MWt5cmJzbzZhbms2bw%3D%3D";

  const socialLinks = [
    { label: "Facebook", icon: "/svg/facebook.svg" },
    { label: "Instagram", icon: "/svg/instagram.svg" },
    { label: "YouTube", icon: "/svg/youtube.svg" },
  ];

  return (
    <footer className="border-t border-black/10 bg-creamBrand py-16 pb-6 md:py-20">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-black/10 pb-10 md:grid-cols-[1.1fr_2fr] md:gap-16">
          <div>
            <div className="inline-flex items-center gap-3 text-[1.05rem] font-bold tracking-tight text-ink">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-skyBrand text-ink">
                <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
                  <use href="/svg/sprite.svg#sd-logo" />
                </svg>
              </span>
              <span>
                Studio
                <span className="ml-0.5 font-normal opacity-80">Dental</span>
              </span>
            </div>

            <p className="mt-4 max-w-[42ch] text-[0.95rem] leading-relaxed text-muted">
              Modern, aesthetic dental care designed around how you actually
              want to feel walking in &mdash; and out.
            </p>

            <div className="mt-5 flex gap-2">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  to={SOCIAL_URL}
                  target="_blank"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.04] text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand"
                >
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="h-[25px] w-[25px]"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-7 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[0.12em] text-ink">
                Clinic
              </h4>
              <NavLink
                className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink"
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink"
                to="/why-us"
              >
                Why us
              </NavLink>
              <NavLink
                className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink"
                to="/contact-us"
              >
                Book visit
              </NavLink>
            </div>

            <div>
              <h4 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[0.12em] text-ink">
                Visit
              </h4>
              <p className="my-1.5 text-[0.92rem] text-muted">
                1st Floor, Plaza No. 26, Main Iqbal Boulevard, Street 2, Sector
                A DHA Phase II, Islamabad
              </p>
              <p className="my-1.5 text-[0.92rem] text-muted">
                Office #:7, 2nd Floor, Near Shoe Planet, F-7 Markaz, Islamabad
              </p>
              <p className="my-1.5 text-[0.92rem] text-muted">
                Mon&ndash;Sat &middot; 9am&ndash;7pm
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[0.12em] text-ink">
                Contact
              </h4>
              <Link
                className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink"
                to="tel:+923299961999"
              >
                (+92)329-9961999
              </Link>
              <Link
                className="my-1.5 block text-[0.92rem] text-muted transition hover:text-ink"
                to="mailto:info@thestudiodental.com"
              >
                info@thestudiodental.com
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[0.82rem] text-muted">
          <span>
            &copy; {new Date().getFullYear()} Studio Dental. All rights
            reserved.
          </span>

          <div className="flex gap-6">
            <Link to="/" className="transition hover:text-ink">
              Privacy
            </Link>
            <Link to="/" className="transition hover:text-ink">
              Terms
            </Link>
            <Link to="/" className="transition hover:text-ink">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
