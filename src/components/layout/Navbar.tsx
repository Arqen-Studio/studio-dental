import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Team" },
  { href: "/services", label: "Prices" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "News" },
  { href: "/clinics", label: "Clinics" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const hasHeroHeader = pathname === "/" || pathname === "/services" || pathname === "/doctors";
  const isTransparent = hasHeroHeader && !scrolled && !open;
  const isSolid = !isTransparent;
const navHeadingColor = "rgb(52, 53, 46)";
const transparentNavColor = "#87CEFA";
const mobileMenuHeadingColor = "#83BFE3";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[100] h-[78px] transition duration-300 ease-out",
        isTransparent
          ? "bg-transparent"
          : "border-b border-black/10 bg-skyBrand text-muted shadow-[0_2px_12px_rgba(15,27,36,0.16)]",
      ].join(" ")}
    >
      <div className="flex h-full w-full items-center justify-between px-3 sm:px-5 md:px-8">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center gap-3"
          aria-label="Studio Dental home"
        >
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-skyBrand text-ink"
            aria-hidden="true"
          >
            <img src="/favicon.svg" alt="" className="h-6 w-6 object-contain" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className="text-[1rem] font-extrabold tracking-tight"
              style={{
                color: isTransparent ? transparentNavColor : navHeadingColor,
              }}
            >
              Studio Dental
            </span>
            <span
              className={[
                "mt-[3px] text-[0.68rem] font-medium uppercase tracking-[0.14em]",
                isTransparent ? "text-[#87CEFA]/60" : "text-muted/75",
              ].join(" ")}
            >
              Clinic
            </span>
          </span>
        </Link>

        <div className="ml-6 flex flex-1 items-center justify-end gap-2 lg:gap-4">
          <nav
            className="hidden items-center gap-5 text-[0.875rem] font-semibold xl:flex"
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={[
                  "whitespace-nowrap transition duration-200",
                  isTransparent
                    ? "text-[#87CEFA] hover:text-white"
                    : "text-muted/90 hover:text-ink",
                ].join(" ")}
                style={!isTransparent ? { color: navHeadingColor } : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:03299961999"
            className={[
              "hidden h-10 w-10 items-center justify-center rounded-full transition duration-200 xl:inline-flex",
              isTransparent
                ? "text-[#87CEFA] hover:bg-white/10 hover:text-white"
                : "text-muted/85 hover:bg-black/5 hover:text-ink",
            ].join(" ")}
            aria-label="Call us"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="[stroke-width:2.2] [vector-effect:non-scaling-stroke]"
            >
              <use href="/svg/sprite.svg#icon-phone" />
            </svg>
          </a>

          <a
            href="mailto:info@thestudiodental.com"
            className={[
              "hidden h-10 w-10 items-center justify-center rounded-full transition duration-200 xl:inline-flex",
              isTransparent
                ? "text-[#87CEFA] hover:bg-white/10 hover:text-white"
                : "text-muted/85 hover:bg-black/5 hover:text-ink",
            ].join(" ")}
            aria-label="Email us"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="[stroke-width:2.2] [vector-effect:non-scaling-stroke]"
            >
              <use href="/svg/sprite.svg#icon-mail" />
            </svg>
          </a>

          <span
            className={[
              "mx-1 hidden h-5 w-px xl:block",
              isTransparent ? "bg-[#87CEFA]/35" : "bg-black/15",
            ].join(" ")}
            aria-hidden="true"
          />

          <Link
            to="/contact-us"
            className={[
              "hidden whitespace-nowrap rounded-full px-5 py-2.5 text-[0.85rem] font-semibold transition duration-200 xl:inline-flex",
              isSolid
                ? "bg-ink text-creamBrand hover:bg-ink/85"
                : "bg-skyBrand text-ink hover:bg-skyBrand/85 hover:shadow-sky",
            ].join(" ")}
          >
            Online Registration
          </Link>

          <button
            className={[
              "inline-flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full transition xl:hidden",
              isTransparent
                ? "text-[#87CEFA] hover:bg-white/10"
                : "text-muted hover:bg-black/5",
            ].join(" ")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={[
                "h-[2px] w-5 rounded bg-current transition duration-300 ease-out",
                open ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "h-[2px] w-5 rounded bg-current transition duration-300 ease-out",
                open ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "h-[2px] w-5 rounded bg-current transition duration-300 ease-out",
                open ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      <div
        className={[
          "fixed left-0 right-0 top-[78px] border-t border-white/10 bg-ink px-5 pb-10 pt-4 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out xl:hidden",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <nav className="flex flex-col" aria-label="Mobile primary navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center border-b border-white/10 py-4 text-[1.05rem] font-semibold transition hover:text-skyBrand"
              style={{ color: mobileMenuHeadingColor }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href="tel:03299961999"
            className="inline-flex items-center gap-3 text-[0.9rem] text-creamBrand/60 transition hover:text-skyBrand"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="[stroke-width:2.2] [vector-effect:non-scaling-stroke]"
            >
              <use href="/svg/sprite.svg#icon-phone" />
            </svg>
            0329 9961999
          </a>
          <a
            href="mailto:info@thestudiodental.com"
            className="inline-flex items-center gap-3 text-[0.9rem] text-creamBrand/60 transition hover:text-skyBrand"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="[stroke-width:2.2] [vector-effect:non-scaling-stroke]"
            >
              <use href="/svg/sprite.svg#icon-mail" />
            </svg>
            info@thestudiodental.com
          </a>
        </div>

        <Link
          to="/contact-us"
          onClick={() => setOpen(false)}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-skyBrand px-6 py-3 text-[0.95rem] font-semibold text-ink transition hover:bg-skyBrand/85 hover:shadow-sky"
        >
          Online Registration
        </Link>
      </div>
    </header>
  );
}
