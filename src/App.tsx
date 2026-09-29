import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Mail } from "lucide-react";
import ScrollToHash from "./ScrollToHash";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ContactDrawer from "./components/ContactDrawer";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import TeamPage from "./pages/TeamPage";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import WhyUs from "./pages/WhyUs";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/contact-us";
import Clinics from "./pages/Clinics";
import MissionCampaign from "./pages/MissionCampaign";
import Prices from "./pages/Prices";
import BlogPost from "./pages/BlogPost";
import DoctorProfile from "./pages/DoctorProfile";
import ServiceDetail from "./pages/ServiceDetail";

const TRANSITION_MS = 500;

function Layout() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [regOpen, setRegOpen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef(location);
  const revealObserverRef = useRef<IntersectionObserver | null>(null);
  const revealFallbackRef = useRef<number | null>(null);

  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  useEffect(() => {
    revealObserverRef.current?.disconnect();
    revealObserverRef.current = null;

    const timer = setTimeout(() => {
      const root = document.querySelector('.page-transition-root');
      if (root) {
        root.querySelectorAll('section:not(.no-reveal)').forEach((el) => {
          if (!el.classList.contains('reveal')) el.classList.add('reveal');
        });
      }

      const els = document.querySelectorAll<HTMLElement>(
        '.page-transition-root .reveal:not(.is-visible)',
      );
      if (!('IntersectionObserver' in window) || els.length === 0) {
        els.forEach((el) => el.classList.add('is-visible'));
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              io.unobserve(e.target);
            }
          });
        },
        // A section taller than about twelve screens can never show 8 per cent
        // of itself at once, so it would have stayed hidden for good. Trigger
        // on any sliver, and start slightly before the element reaches the
        // fold so nothing pops in late.
        { threshold: 0.01, rootMargin: '0px 0px 15% 0px' },
      );
      revealObserverRef.current = io;
      els.forEach((el) => io.observe(el));

      // Content must never depend on the observer firing. If anything is still
      // hidden shortly after, show it: a missed animation is a small cost, a
      // section of the page that never appears is not.
      revealFallbackRef.current = window.setTimeout(() => {
        document
          .querySelectorAll('.page-transition-root .reveal:not(.is-visible)')
          .forEach((el) => el.classList.add('is-visible'));
      }, 2500);
    }, 550);

    return () => {
      clearTimeout(timer);
      if (revealFallbackRef.current) clearTimeout(revealFallbackRef.current);
      revealFallbackRef.current = null;
      revealObserverRef.current?.disconnect();
      revealObserverRef.current = null;
    };
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      {/* Floating WhatsApp and registration buttons */}
      <div className="fixed bottom-5 right-5 z-[90] flex items-center gap-3 sm:bottom-6 sm:right-6">
        <a
          href="https://wa.me/923299961999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-on-brand shadow-2 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-hover"
          aria-label="Chat on WhatsApp, +92 329 9961999"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.04c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.47 9.46zm8.06-17.53A11.33 11.33 0 0 0 12.05.63C5.77.63.66 5.74.66 12.02c0 2 .52 3.96 1.52 5.69L.57 23.63l6.05-1.59a11.37 11.37 0 0 0 5.43 1.38h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.19-5.9-3.34-8.06z" />
          </svg>
        </a>
        <button
          type="button"
          onClick={() => setRegOpen(true)}
          className="inline-flex h-14 w-14 items-center justify-center gap-2.5 rounded-full bg-brand text-[0.85rem] font-semibold text-on-brand shadow-2 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-hover sm:w-auto sm:px-5"
          aria-label="Open online registration"
        >
          <Mail size={20} strokeWidth={2} aria-hidden />
          {/* Icon only on phones so it does not cover the content; the aria-label names it. */}
          <span className="hidden sm:inline">Online registration</span>
        </button>
      </div>
      <ContactDrawer open={regOpen} onClose={() => setRegOpen(false)} />
      <main className="flex min-h-0 flex-1 flex-col bg-surface">
        <SwitchTransition mode="out-in">
          <CSSTransition
            nodeRef={nodeRef}
            key={`${location.pathname}${location.search}`}
            timeout={TRANSITION_MS}
            classNames="page"
            onExited={() => setDisplayLocation(locationRef.current)}
          >
            <div ref={nodeRef} className="page-transition-root">
              <Routes location={displayLocation}>
                <Route path="/" element={<Hero />} />
                <Route path="/services" element={<Services />} />
                <Route path="/doctors/:slug" element={<DoctorProfile />} />
                <Route path="/doctors" element={<TeamPage />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/clinics" element={<Clinics />} />
                <Route path="/prices" element={<Prices />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/mission-campaign" element={<MissionCampaign />} />
              </Routes>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </main>
      <Footer />
    </>
  );
}

export default function App() {

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
}
