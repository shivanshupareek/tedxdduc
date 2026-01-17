import { useEffect, useRef, useState } from 'react'
import './ReasonsToAttend.css'

const ReasonsToAttend = () => {
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
      { threshold: 0.2 }
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

  const reasons = [
    {
      title: "Meet Your Heroes",
      description: "Opportunity to meet the heroes you have followed for your life and interact with pioneers of the fields you are interested in."
    },
    {
      title: "Diverse Connections",
      description: "Opportunity to engage in dialogue and connect with diverse individuals, promoting a collaborative exchange of ideas."
    },
    {
      title: "Innovative Ideas",
      description: "Experience groundbreaking ideas and thought-provoking conversations that can shape your perspective."
    }
  ]

  return (
    <section ref={sectionRef} id="events" className="reasons-section">
      <div className="reasons-background" data-parallax data-speed="0.4">
        <div className="galaxy-spiral"></div>
        <div className="nebula-cloud nebula-1"></div>
        <div className="nebula-cloud nebula-2"></div>
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
            left: `${15 + i * 22}%`,
            top: `${10 + (i % 2) * 45}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${17 + i * 2}s`
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

      <div className="reasons-content">
        <h2 
          ref={titleRef}
          className={`reasons-title ${isVisible ? 'visible' : ''}`}
        >
          reasons<br />to attend
        </h2>
        <p className={`reasons-subtitle ${isVisible ? 'visible' : ''}`}>
          Opportunity to meet the heroes you have followed for your life and interact with pioneers of the fields you are interested in.
        </p>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`reason-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.5 + index * 0.2}s` }}
            >
              <div className="card-glow"></div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReasonsToAttend

