import { useEffect, useRef, useState } from 'react'
import './ThemeSection.css'

const ThemeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={sectionRef} className="theme-section">
      {/* Animated Background Layers */}
      <div className="theme-background" data-parallax data-speed="0.4">
        <div className="galaxy-spiral"></div>
        <div className="nebula-cloud nebula-1"></div>
        <div className="nebula-cloud nebula-2"></div>
        <div className="nebula-cloud nebula-3"></div>
      </div>

      {/* Floating Stars */}
      <div className="star-field">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="star" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>

      {/* Floating Tesseract Shapes */}
      <div className="floating-tesseracts">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="floating-tesseract" style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${15 + i * 2}s`
          }}>
            <div className="mini-tesseract">
              <div className="mini-face"></div>
              <div className="mini-face"></div>
              <div className="mini-face"></div>
              <div className="mini-face"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Mouse Follower Effect */}
      <div 
        className="mouse-glow"
        style={{
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`
        }}
      ></div>

      {/* Cosmic Particles */}
      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Content */}
      <div className="theme-content">
        <div className="theme-description">
          <p className="theme-text">
            The theme of Tesseract represents the act of unfolding complexity, whether in science, art, technology or human life.
          </p>
          <p className="theme-text">
            The tesseract, apart from being a mathematical curiosity, is also a metaphor for perspective.
          </p>
          <p className="theme-text">
            It's a profound symbol for intellectual curiosity and for the relentless pursuit of knowledge.
          </p>
          <p className="theme-text">
            It reveals that the world is stratified, that innovation often originates in places we cannot fully visualize and that progress happens when we are willing to stretch our minds into spaces that feel alien.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ThemeSection

