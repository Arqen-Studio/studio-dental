import { Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactDrawer from "../ContactDrawer";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Team" },
  { href: "/prices", label: "Prices" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "News" },
  { href: "/clinics", label: "Clinics" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = open || contactOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, contactOpen]);

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

  // The home hero is the only Ink hero, so it is the only place the bar
  // goes transparent (and takes the dark theme).
  const hasInkHero = pathname === "/";
  const isTransparent = hasInkHero && !scrolled && !open && !contactOpen;

  const openContactDrawer = () => {
    setOpen(false);
    setContactOpen(true);
  };

  return (
    <>
    {/* Porcelain bar with a hairline; shadow-2 once the page scrolls. */}
    <header
      data-theme={isTransparent ? "dark" : undefined}
      className={[
        "fixed inset-x-0 top-0 z-[100] h-[var(--nav-h)] text-ink transition duration-300 ease-out",
        isTransparent
          ? "bg-transparent"
          : ["border-b border-line bg-surface", scrolled ? "shadow-2" : ""].join(" "),
      ].join(" ")}
    >
      <div className="flex h-full w-full items-center justify-between px-3 sm:px-5 md:px-8">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center"
          aria-label="Studio Dental home"
        >
          <span className="flex flex-col leading-none">
            <span className="label">Studio Dental</span>
            <span className="eyebrow mt-[3px]">Clinic</span>
          </span>
        </Link>

        <div className="ml-6 flex flex-1 items-center justify-end gap-2 lg:gap-4">
          <nav
            className="label hidden items-center gap-5 xl:flex"
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="whitespace-nowrap text-ink transition duration-200 hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-0 xl:flex" aria-label="Contact shortcuts">
            <a
              href="tel:03299961999"
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-full transition duration-200",
                "text-ink hover:bg-ink/10",
              ].join(" ")}
              aria-label="Call us"
            >
              <Phone
                size={20}
                strokeWidth={2.2}
                className="[vector-effect:non-scaling-stroke]"
                aria-hidden
              />
            </a>

            <button
              type="button"
              onClick={openContactDrawer}
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-full transition duration-200",
                "text-ink hover:bg-ink/10",
              ].join(" ")}
              aria-label="Open contact form"
              aria-haspopup="dialog"
              aria-expanded={contactOpen}
            >
              <Mail
                size={20}
                strokeWidth={2.2}
                className="[vector-effect:non-scaling-stroke]"
                aria-hidden
              />
            </button>
          </div>

          <button
            className={[
              "inline-flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border transition xl:hidden",
              "border-line bg-ink/10 text-ink hover:bg-ink/15",
            ].join(" ")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={[
                "h-[2px] w-5 rounded-sm bg-current transition duration-300 ease-out",
                open ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "h-[2px] w-5 rounded-sm bg-current transition duration-300 ease-out",
                open ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "h-[2px] w-5 rounded-sm bg-current transition duration-300 ease-out",
                open ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      <div
        className={[
          "fixed left-0 right-0 top-[var(--nav-h)] border-t border-line bg-surface px-5 pb-10 pt-4 shadow-3 transition-all duration-300 ease-out xl:hidden",
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
              className="flex items-center label border-b border-line py-4 text-ink transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href="tel:03299961999"
            className="inline-flex items-center gap-3 body text-ink-muted transition hover:text-brand"
          >
            <Phone
              size={17}
              strokeWidth={2.2}
              className="shrink-0 [vector-effect:non-scaling-stroke]"
              aria-hidden
            />
            0329 9961999
          </a>
          <button
            type="button"
            onClick={openContactDrawer}
            className="inline-flex items-center gap-3 text-left body text-ink-muted transition hover:text-brand"
          >
            <Mail
              size={17}
              strokeWidth={2.2}
              className="shrink-0 [vector-effect:non-scaling-stroke]"
              aria-hidden
            />
            thestudiodentalclinic@gmail.com
          </button>
        </div>
      </div>
    </header>
    <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
