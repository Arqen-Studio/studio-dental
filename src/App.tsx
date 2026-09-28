import { useCallback, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import ScrollToHash from "./ScrollToHash";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ContactDrawer from "./components/ContactDrawer";
import { BookingContext } from "./lib/booking";
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
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);
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
    <BookingContext.Provider value={openBooking}>
      <Navbar />
      {/* Floating booking button: a compact Ink pill. The footer carries extra
          bottom padding on phones so it never covers the last content. */}
      <button
        type="button"
        onClick={openBooking}
        className="sd-btn sd-btn--sm fixed bottom-4 right-4 z-[90] bg-ink text-surface ring-1 ring-line-strong hover:bg-ink/85 md:bottom-6 md:right-6"
        aria-label="Book a consultation"
      >
        Book
      </button>
      <ContactDrawer open={bookingOpen} onClose={closeBooking} />
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
    </BookingContext.Provider>
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
