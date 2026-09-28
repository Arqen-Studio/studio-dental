import { Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactDrawer from "../ContactDrawer";
import Logo from "../Logo";

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

  const hasHeroHeader =
    pathname === "/" ||
    pathname === "/services" ||
    pathname === "/doctors" ||
    /^\/doctors\/.+/.test(pathname) ||
    pathname === "/about";
  const isTransparent = hasHeroHeader && !scrolled && !open && !contactOpen;

  const openContactDrawer = () => {
    setOpen(false);
    setContactOpen(true);
  };

  return (
    <>
    <header
      className={[
        "fixed inset-x-0 top-0 z-[100] h-[3.9rem] transition duration-300 ease-out",
        isTransparent
          ? "bg-transparent"
          : ["border-b border-line bg-surface text-ink", scrolled ? "shadow-2" : ""].join(" "),
      ].join(" ")}
    >
      <div className="flex h-full w-full items-center justify-between px-3 sm:px-5 md:px-8">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center"
          aria-label="Studio Dental home"
        >
          <Logo size={30} tone={isTransparent ? "inverse" : "brand"} />
        </Link>

        <div className="ml-6 flex flex-1 items-center justify-end gap-2 lg:gap-4">
          <nav
            className="hidden items-center gap-5 text-[0.82rem] font-semibold xl:flex"
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={[
                  "whitespace-nowrap transition duration-200",
                  isTransparent
                    ? "text-raw-porcelain hover:text-raw-mist"
                    : "text-ink hover:text-brand",
                ].join(" ")}
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
                isTransparent
                  ? "text-raw-porcelain hover:bg-raw-porcelain/10"
                  : "text-ink hover:bg-surface-sunken",
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
                isTransparent
                  ? "text-raw-porcelain hover:bg-raw-porcelain/10"
                  : "text-ink hover:bg-surface-sunken",
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
              isTransparent
                ? "border-raw-porcelain/40 bg-raw-porcelain/10 text-raw-porcelain hover:bg-raw-porcelain/20"
                : "border-line bg-surface-raised text-ink hover:bg-surface-sunken",
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
          "fixed left-0 right-0 top-[78px] border-y border-line bg-surface px-5 pb-10 pt-4 shadow-2 transition-all duration-300 ease-out xl:hidden",
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
              className="flex items-center min-h-11 border-b border-line py-4 text-[0.82rem] font-semibold text-ink transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href="tel:03299961999"
            className="inline-flex items-center gap-3 min-h-11 text-[0.82rem] text-ink-muted transition hover:text-brand"
          >
            <Phone
              size={17}
              strokeWidth={2.2}
              className="shrink-0 [vector-effect:non-scaling-stroke]"
              aria-hidden
            />
            +92 329 9961999
          </a>
          <button
            type="button"
            onClick={openContactDrawer}
            className="inline-flex items-center gap-3 text-left min-h-11 text-[0.82rem] text-ink-muted transition hover:text-brand"
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
