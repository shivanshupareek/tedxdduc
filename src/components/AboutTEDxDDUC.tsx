import { useEffect, useRef, useState } from 'react'
import './AboutTEDxDDUC.css'

const AboutTEDxDDUC = () => {
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
    <section ref={sectionRef} className="about-tedxdduc">
      {/* Animated Background Layers - Same as Theme Section */}
      <div className="about-dduc-background" data-parallax data-speed="0.35">
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
            left: `${20 + i * 18}%`,
            top: `${20 + (i % 2) * 35}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${16 + i * 2}s`
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

      <div className="about-dduc-content">
        <h2 
          ref={titleRef}
          className={`section-title ${isVisible ? 'visible' : ''}`}
        >
          About <span className="red-text">TEDxDDUC</span>
        </h2>
        <div className="about-dduc-text">
          <p className={isVisible ? 'visible' : ''}>
            TEDxDDUC embodies this spirit, bringing together the brightest minds and most passionate voices from our community to ignite dialogue, spark inspiration, and leave a lasting impact on our community. Get ready to dive into a world of groundbreaking ideas, thought-provoking conversations, and unforgettable connections.
          </p>
        </div>
        <div className="explore-button-container">
          <button className="explore-button">Explore More</button>
        </div>
      </div>
    </section>
  )
}

export default AboutTEDxDDUC

