import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const tesseractRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (tesseractRef.current) {
        const rect = tesseractRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20

        tesseractRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background" data-parallax data-speed="0.3">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title" data-parallax data-speed="0.2">
            <span className="letter">T</span>
            <span className="letter">E</span>
            <span className="letter">D</span>
            <span className="letter">X</span>
            <span className="letter">D</span>
            <span className="letter">D</span>
            <span className="letter">U</span>
            <span className="letter">C</span>
          </h1>
          <div className="tesseract-container" ref={tesseractRef}>
            <div className="tesseract-outer">
              {/* Outer Cube */}
              <div className="outer-cube">
                <div className="cube-face outer-front"></div>
                <div className="cube-face outer-back"></div>
                <div className="cube-face outer-right"></div>
                <div className="cube-face outer-left"></div>
                <div className="cube-face outer-top"></div>
                <div className="cube-face outer-bottom"></div>
              </div>
              
              {/* Inner Cube */}
              <div className="inner-cube">
                <div className="cube-face inner-front"></div>
                <div className="cube-face inner-back"></div>
                <div className="cube-face inner-right"></div>
                <div className="cube-face inner-left"></div>
                <div className="cube-face inner-top"></div>
                <div className="cube-face inner-bottom"></div>
              </div>
              
              {/* Connecting Lines (4D connections) */}
              <div className="connection-line line-1"></div>
              <div className="connection-line line-2"></div>
              <div className="connection-line line-3"></div>
              <div className="connection-line line-4"></div>
              <div className="connection-line line-5"></div>
              <div className="connection-line line-6"></div>
              <div className="connection-line line-7"></div>
              <div className="connection-line line-8"></div>
              
              {/* Enhanced Glow Effects */}
              <div className="outer-glow"></div>
              <div className="inner-glow"></div>
              <div className="center-core"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

