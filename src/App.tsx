import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import ScrollToHash from "./ScrollToHash";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
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

const TRANSITION_MS = 500;

function Layout() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const nodeRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef(location);

  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');
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
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, 550);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
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
                <Route path="/doctors" element={<TeamPage />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/clinics" element={<Clinics />} />
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
