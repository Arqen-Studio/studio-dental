import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToHash from './ScrollToHash'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './pages/Hero'
import Services from './pages/Services'
import About from './pages/About'
import WhyUs from './pages/WhyUs'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  // Progressive reveal-on-scroll for elements with `.reveal`
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}
