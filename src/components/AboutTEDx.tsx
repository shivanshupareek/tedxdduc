import { useEffect, useRef, useState } from 'react'
import './AboutTEDx.css'

const AboutTEDx = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="about-tedx">
      {/* Animated Background Layers - Same as Theme Section */}
      <div className="about-background" data-parallax data-speed="0.3">
        <div className="galaxy-spiral"></div>
        <div className="nebula-cloud nebula-1"></div>
        <div className="nebula-cloud nebula-2"></div>
        <div className="nebula-cloud nebula-3"></div>
      </div>

      {/* Floating Stars */}
      <div className="star-field">
        {Array.from({ length: 40 }).map((_, i) => (
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
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="floating-tesseract" style={{
            left: `${15 + i * 20}%`,
            top: `${15 + (i % 2) * 40}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${18 + i * 2}s`
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

      {/* Cosmic Particles */}
      <div className="particles">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="about-content">
        <h2 
          ref={titleRef}
          className={`section-title ${isVisible ? 'visible' : ''}`}
        >
          About <span className="red-text">TEDx</span>
        </h2>
        <div className="about-text-container">
          <p className={`about-description ${isVisible ? 'visible' : ''}`}>
            TEDx is a global platform that brings together individuals with diverse backgrounds and ideas to share "ideas worth spreading". TEDxDDUC is an extension of this initiative, striving to create a local space where our community can come together to explore, discuss, and be inspired by innovative ideas.
          </p>
          <p className={`about-description ${isVisible ? 'visible' : ''}`}>
            TEDx events are independently organized gatherings modeled after the renowned TED conferences, fostering local communities around "ideas worth spreading". These events feature curated talks exploring diverse themes, igniting dialogue and amplifying powerful voices within specific regions or communities.
          </p>
        </div>
        <div className="explore-button-container">
          <button className="explore-button">EXPLORE MORE</button>
        </div>
      </div>
    </section>
  )
}

export default AboutTEDx

