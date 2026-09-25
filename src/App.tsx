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
        { threshold: 0.08 },
      );
      revealObserverRef.current = io;
      els.forEach((el) => io.observe(el));
    }, 550);

    return () => {
      clearTimeout(timer);
      revealObserverRef.current?.disconnect();
      revealObserverRef.current = null;
    };
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      {/* Floating registration button */}
      <button
        type="button"
        onClick={() => setRegOpen(true)}
        className="fixed bottom-6 right-6 z-[90] inline-flex items-center gap-2.5 rounded-full bg-brand px-5 py-3.5 text-[0.85rem] font-semibold text-ink shadow-[0_4px_20px_rgba(143,180,138,0.55)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand/90 hover:shadow-[0_6px_24px_rgba(143,180,138,0.65)]"
        aria-label="Open online registration"
      >
        <Mail size={16} strokeWidth={2.2} aria-hidden />
        Online registration
      </button>
      <ContactDrawer open={regOpen} onClose={() => setRegOpen(false)} />
      <main className="flex min-h-0 flex-1 flex-col bg-white">
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
