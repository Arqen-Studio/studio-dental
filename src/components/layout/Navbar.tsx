import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactDrawer from "../ContactDrawer";

const NAV_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Team" },
  { href: "/services", label: "Prices" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "News" },
  { href: "/clinics", label: "Clinics" },
];

/** Improves contrast on hero imagery when the header is transparent */
const TRANSPARENT_TITLE_SHADOW =
  "[text-shadow:0_1px_4px_rgba(15,27,36,0.92),0_0_22px_rgba(15,27,36,0.5)]";
const TRANSPARENT_LINK_SHADOW =
  "[text-shadow:0_1px_4px_rgba(15,27,36,0.95),0_0_18px_rgba(15,27,36,0.45)]";
const TRANSPARENT_ICON_SHADOW =
  "drop-shadow-[0_1px_3px_rgba(15,27,36,0.95)] drop-shadow-[0_0_12px_rgba(15,27,36,0.35)]";

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
    pathname === "/about";
  const isTransparent = hasHeroHeader && !scrolled && !open && !contactOpen;
const navHeadingColor = "rgb(52, 53, 46)";
const transparentNavColor = "#87CEFA";

  const openContactDrawer = () => {
    setOpen(false);
    setContactOpen(true);
  };

  return (
    <>
    <header
      className={[
        "fixed inset-x-0 top-0 z-[100] h-[78px] transition duration-300 ease-out",
        isTransparent
          ? "bg-transparent"
          : "border-b border-ink/10 bg-skyBrand text-ink shadow-[0_2px_14px_rgba(15,27,36,0.08)]",
      ].join(" ")}
    >
      <div className="flex h-full w-full items-center justify-between px-3 sm:px-5 md:px-8">
        <Link
          to="/"
          className="inline-flex shrink-0 items-center gap-3"
          aria-label="Studio Dental home"
        >
          <span
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-xl transition",
              isTransparent
                ? ["border border-white/25 bg-white/10", TRANSPARENT_ICON_SHADOW].join(" ")
                : "border border-ink/15 bg-white/40 text-ink shadow-soft-sm",
            ].join(" ")}
            aria-hidden="true"
          >
            <img src="/favicon.svg" alt="" className="h-6 w-6 object-contain" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={[
                "text-[1rem] font-extrabold tracking-tight",
                isTransparent ? TRANSPARENT_TITLE_SHADOW : "",
              ].join(" ")}
              style={{
                color: isTransparent ? transparentNavColor : navHeadingColor,
              }}
            >
              Studio Dental
            </span>
            <span
              className={[
                "mt-[3px] text-[0.68rem] font-medium uppercase tracking-[0.14em]",
                isTransparent
                  ? ["text-[#87CEFA]/60", TRANSPARENT_TITLE_SHADOW].join(" ")
                  : "text-ink/70",
              ].join(" ")}
            >
              Clinic
            </span>
          </span>
        </Link>

        <div className="ml-6 flex flex-1 items-center justify-end gap-2 lg:gap-4">
          <nav
            className="hidden items-center gap-5 text-[14px] font-semibold xl:flex"
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={[
                  "whitespace-nowrap transition duration-200 focus:outline-none",
                  isTransparent
                    ? ["text-[#ffffff] hover:text-white", TRANSPARENT_LINK_SHADOW].join(" ")
                    : "text-ink/90 hover:text-ink",
                ].join(" ")}
                style={!isTransparent ? { color: navHeadingColor } : undefined}
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
                  ? ["text-white hover:bg-white/10 hover:text-white", TRANSPARENT_ICON_SHADOW].join(" ")
                  : "text-ink hover:bg-white/35 hover:text-ink",
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

            <button
              type="button"
              onClick={openContactDrawer}
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-full transition duration-200",
                isTransparent
                  ? ["text-white hover:bg-white/10 hover:text-white", TRANSPARENT_ICON_SHADOW].join(" ")
                  : "text-ink hover:bg-white/35 hover:text-ink",
              ].join(" ")}
              aria-label="Open contact form"
              aria-haspopup="dialog"
              aria-expanded={contactOpen}
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
            </button>
          </div>

          <button
            className={[
              "inline-flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border transition xl:hidden",
              isTransparent
                ? [
                    "border-white/25 bg-white/10 text-white shadow-soft-sm hover:bg-white/15",
                    TRANSPARENT_ICON_SHADOW,
                  ].join(" ")
                : "border-ink/15 bg-white/45 text-ink shadow-soft-sm hover:bg-white/65",
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
          "fixed left-0 right-0 top-[78px] border-t border-black/10 bg-creamBrand px-5 pb-10 pt-4 shadow-[0_8px_30px_rgba(15,27,36,0.08)] transition-all duration-300 ease-out xl:hidden",
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
              className="flex items-center border-b border-black/10 py-4 text-[14px] font-semibold text-ink transition hover:text-skyBrand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href="tel:03299961999"
            className="inline-flex items-center gap-3 text-[14px] text-muted transition hover:text-skyBrand"
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
          <button
            type="button"
            onClick={openContactDrawer}
            className="inline-flex items-center gap-3 text-left text-[14px] text-muted transition hover:text-skyBrand"
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
          </button>
        </div>
      </div>
    </header>
    <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
