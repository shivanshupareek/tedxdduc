import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ThemeSection from './components/ThemeSection'
import AboutTEDx from './components/AboutTEDx'
import AboutTEDxDDUC from './components/AboutTEDxDDUC'
import ReasonsToAttend from './components/ReasonsToAttend'
import EventDate from './components/EventDate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('[data-parallax]')
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5')
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <ThemeSection />
        <AboutTEDx />
        <AboutTEDxDDUC />
        <ReasonsToAttend />
        <EventDate />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

