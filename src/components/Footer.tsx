import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Links */}
        <div className="footer-social">
          <a href="https://instagram.com/tedxdduc" target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 2.209 0 4 1.791 4 4 0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="mailto:contact@tedxdduc.com" className="social-link email" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/company/tedxdduc" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://twitter.com/tedxdduc" target="_blank" rel="noopener noreferrer" className="social-link twitter" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
          <a href="https://flickr.com/tedxdduc" target="_blank" rel="noopener noreferrer" className="social-link flickr" aria-label="Flickr">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="7" cy="12" r="4"/>
              <circle cx="17" cy="12" r="4"/>
            </svg>
          </a>
        </div>

        {/* Logo and Tagline */}
        <div className="footer-logo">
          <h2 className="footer-logo-text">
            <span className="logo-tedx">TEDx</span>
            <span className="logo-dduc">DDUC</span>
          </h2>
          <p className="footer-tagline">x = independently organized TED event</p>
        </div>

        {/* Description */}
        <div className="footer-description">
          <p>
            TEDxDDUC – an independently organized TED event that brings together innovative thinkers, visionaries, and experts to share their ideas worth spreading. TEDxDDUC is a platform where ideas meet inspiration, fostering a community committed to dialogue, learning, and positive change. TEDxDDUC is not just an event; it's a journey of exploration, inspiration, and connection. Join us as we embark on a day filled with ideas that have the power to shape the future.
          </p>
        </div>

        {/* License Statement */}
        <div className="footer-license">
          <p><strong>This independent TEDx event is operated under license from TED.</strong></p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <span className="separator">|</span>
          <a href="#about">About us</a>
          <span className="separator">|</span>
          <a href="#events">Events</a>
          <span className="separator">|</span>
          <a href="#contact">Contact us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

