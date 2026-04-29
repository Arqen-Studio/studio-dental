import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const SOCIAL_URL =
    "https://www.instagram.com/studiodentalpk?igsh=MWt5cmJzbzZhbms2bw%3D%3D";

  const socialLinks = [
    { label: "Facebook-f", icon: "/svg/facebook.svg" },
    { label: "Instagram", icon: "/svg/instagram.svg" },
    { label: "Youtube", icon: "/svg/youtube.svg" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-skyBrand via-[#78c7f3] to-[#5ab8ec] pb-6 pt-24 text-ink md:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-[125%] -translate-x-[10%] animate-[sd-wave-drift_18s_ease-in-out_infinite]"
        >
          <path
            d="M0,48 C190,104 320,10 505,54 C700,102 845,12 1018,50 C1188,86 1325,30 1440,62 L1440,0 L0,0 Z"
            fill="rgba(255,255,255,0.34)"
          />
        </svg>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-[130%] -translate-x-[12%] opacity-60 animate-[sd-wave-drift_26s_ease-in-out_infinite_reverse]"
        >
          <path
            d="M0,66 C220,8 352,94 548,44 C738,2 876,90 1065,46 C1218,10 1340,64 1440,28 L1440,0 L0,0 Z"
            fill="rgba(255,255,255,0.2)"
          />
        </svg>
      </div>
      <div
        className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-white/35 blur-3xl animate-[sd-float-soft_7s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 right-[-60px] h-72 w-72 rounded-full bg-ink/15 blur-3xl animate-[sd-float-soft_9s_ease-in-out_infinite]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 rounded-xl bg-white/10 p-6 backdrop-blur-sm md:grid-cols-[1.1fr_2fr] md:gap-16 md:p-8">
          <div>
            <div className="inline-flex items-center gap-3 text-[1.05rem] font-bold tracking-tight text-ink">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/45 bg-white/70 text-ink shadow-soft-sm">
                <img
                  src="/favicon.svg"
                  alt=""
                  className="h-6 w-6 object-contain"
                />
              </span>
              <span>
                Studio
                <span className="ml-0.5 font-normal opacity-80">Dental</span>
              </span>
            </div>

            <p className="mt-4 max-w-[42ch] text-[0.95rem] leading-relaxed text-ink/85">
              Studio Dental provides expert dental care with a focus on comfort,
              advanced technology, and affordable treatment.
            </p>

            <div className="mt-5 flex gap-2">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  to={SOCIAL_URL}
                  target="_blank"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/55 text-ink shadow-soft-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/80"
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
                className="my-1.5 block text-[0.92rem] text-ink/80 transition hover:text-ink"
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className="my-1.5 block text-[0.92rem] text-ink/80 transition hover:text-ink"
                to="/doctors"
              >
                Doctors
              </NavLink>
              <NavLink
                className="my-1.5 block text-[0.92rem] text-ink/80 transition hover:text-ink"
                to="/about"
              >
                About us
              </NavLink>
              <NavLink
                className="my-1.5 block text-[0.92rem] text-ink/80 transition hover:text-ink"
                to="/blog"
              >
                News
              </NavLink>
            </div>

            <div>
              <h4 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[0.12em] text-ink">
                Address
              </h4>
              <p className="my-1.5 text-[0.92rem] text-ink/85">
                1st Floor, Plaza No. 26, Main Iqbal Boulevard, Street 2, Sector
                A DHA Phase II, Islamabad
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[0.12em] text-ink">
                Contact
              </h4>
              <p className="my-1.5 block text-[0.92rem] text-ink/85">
                Office #:7, 2nd Floor, Near Shoe Planet, F-7 Markaz, Islamabad
              </p>
              <p className="my-1.5 block text-[0.92rem] text-ink/85">
                0329 9961999 | 032935199999
              </p>
              <p className="my-1.5 block text-[0.92rem] text-ink/85">
                info@thestudiodental.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 pt-6 text-[0.82rem] text-ink/80">
          <span>
            &copy; {new Date().getFullYear()} Studio Dental clinics. All rights
            reserved.
          </span>

          <div className="flex gap-6">
            <Link to="/" className="transition hover:text-ink/95">
              Privacy policy
            </Link>
            <Link to="/" className="transition hover:text-ink/95">
              Terms
            </Link>
            <Link to="/" className="transition hover:text-ink/95">
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
