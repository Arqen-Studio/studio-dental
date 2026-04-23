import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/why-us", label: "Why Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[100] flex h-[78px] items-center border-b border-transparent transition duration-300 ease-out",
        scrolled
          ? "bg-skyBrand text-ink shadow-soft-md"
          : "bg-transparent text-creamBrand",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-6 px-5 md:px-8">
        <NavLink
          to="/"
          className="inline-flex items-center gap-3 text-[1.05rem] font-bold tracking-tight"
          aria-label="Studio Dental home"
        >
          <span
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 ease-out",
              scrolled
                ? "bg-ink text-creamBrand"
                : "bg-creamBrand text-skyBrand",
            ].join(" ")}
            aria-hidden="true"
          >
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden="true">
              <use href="/svg/sprite.svg#sd-logo" />
            </svg>
          </span>
          <span>
            Studio<span className="ml-0.5 font-normal opacity-80">Dental</span>
          </span>
        </NavLink>

        <nav
          className="hidden items-center gap-8 text-[0.95rem] font-medium lg:flex"
          aria-label="Primary"
        >
          {LINKS.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="relative whitespace-nowrap py-1 opacity-95 transition duration-300 ease-out hover:opacity-100"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <span className="inline-flex items-center gap-2 text-[0.9rem] font-medium opacity-95" aria-label="Clinic phone number">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <use href="/svg/sprite.svg#icon-phone" />
            </svg>
            <span className="whitespace-nowrap">(+92)329-9961999</span>
          </span>
          <NavLink
            to="/contact-us"
            className={[
              "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent px-6 py-3 text-[0.95rem] font-semibold transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft-md",
              scrolled
                ? "bg-skyBrand text-ink hover:bg-skyBrand/90 hover:shadow-sky"
                : "bg-creamBrand text-ink",
            ].join(" ")}
          >
            Book Visit
            <span
              className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/10 transition duration-300 ease-out group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <use href="/svg/sprite.svg#icon-arrow-right" />
              </svg>
            </span>
          </NavLink>
        </div>

        <button
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={[
              "h-0.5 w-[22px] rounded bg-current transition duration-300 ease-out",
              open ? "translate-y-[7px] rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "h-0.5 w-[22px] rounded bg-current transition duration-300 ease-out",
              open ? "opacity-0" : "",
            ].join(" ")}
          />
          <span
            className={[
              "h-0.5 w-[22px] rounded bg-current transition duration-300 ease-out",
              open ? "-translate-y-[7px] -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      <div
        className={[
          "fixed left-0 right-0 top-[78px] border-b border-black/10 bg-skyBrand px-5 pb-10 pt-6 text-ink shadow-soft-md transition duration-300 ease-out md:hidden",
          open ? "translate-y-0" : "-translate-y-[110%]",
        ].join(" ")}
        role="dialog"
        aria-label="Mobile menu"
      >
        <nav
          className="flex flex-col gap-1 text-[1.25rem] font-semibold"
          aria-label="Mobile primary"
        >
          {LINKS.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="whitespace-nowrap border-b border-black/10 py-3"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to="/contact-us"
          className="mt-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-skyBrand px-6 py-3 text-[0.95rem] font-semibold text-ink transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-skyBrand/90 hover:shadow-sky"
          onClick={() => setOpen(false)}
        >
          Book Visit
        </NavLink>
      </div>
    </header>
  );
}
