import { Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";
import { MAIN_PHONE, telHref } from "../../data/clinics";
import { useBooking } from "../../lib/booking";
import { NAV_ITEMS, SECONDARY_NAV_ITEMS } from "../../data/navigation";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openBooking = useBooking();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
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
    // The full nav shows from --bp-lg (1024px).
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const book = () => {
    setOpen(false);
    openBooking();
  };

  return (
    // Porcelain bar with a hairline; shadow-2 once the page scrolls.
    <header
      className={[
        "fixed inset-x-0 top-0 z-[100] h-[var(--nav-h)] border-b border-line bg-surface text-ink transition-shadow duration-200",
        scrolled ? "shadow-2" : "",
      ].join(" ")}
    >
      <div className="mx-auto flex h-full w-full max-w-[var(--container-wide)] items-center justify-between gap-5 px-4 md:px-8">
        <Link to="/" className="sd-logo-link" onClick={() => setOpen(false)}>
          <Logo size={30} />
        </Link>

        <nav className="sd-header__nav" aria-label="Main">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink to={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sd-header__actions">
          <a className="sd-header__phone max-xl:!hidden" href={telHref(MAIN_PHONE)}>
            <Phone className="sd-icon" size={18} strokeWidth={1.75} aria-hidden />
            <span>{MAIN_PHONE}</span>
          </a>
          <button
            type="button"
            onClick={book}
            className="sd-btn sd-btn--primary sd-btn--sm"
          >
            Book a consultation
          </button>
          <button
            type="button"
            className="sd-header__menu"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="sd-icon" size={22} strokeWidth={1.75} aria-hidden />
            ) : (
              <Menu className="sd-icon" size={22} strokeWidth={1.75} aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu sheet: links, phone, then a full-width booking button. */}
      <div
        id="mobile-menu"
        className={[
          "sd-header__sheet fixed inset-x-0 top-[var(--nav-h)] max-h-[calc(100dvh-var(--nav-h))] overflow-y-auto transition duration-200 ease-out lg:hidden",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <nav aria-label="Main (mobile)">
          <ul>
            {[...NAV_ITEMS, ...SECONDARY_NAV_ITEMS].map((item) => (
              <li key={item.href}>
                <Link to={item.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={telHref(MAIN_PHONE)}
          className="sd-btn sd-btn--ghost sd-btn--md self-start"
          tabIndex={open ? 0 : -1}
        >
          <Phone className="sd-icon" size={18} strokeWidth={1.75} aria-hidden />
          <span>Call {MAIN_PHONE}</span>
        </a>
        <button
          type="button"
          onClick={book}
          className="sd-btn sd-btn--primary sd-btn--lg sd-btn--full"
          tabIndex={open ? 0 : -1}
        >
          Book a consultation
        </button>
      </div>
    </header>
  );
}
