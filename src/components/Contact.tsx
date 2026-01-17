import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-background" data-parallax data-speed="0.35">
        <div className="contact-glow"></div>
      </div>
      <div className="contact-content">
        <h2 className="contact-title" data-parallax data-speed="0.25">
          Let's <span className="red-text">talk</span>
        </h2>
        <div className="contact-info" data-parallax data-speed="0.15">
          <p className="contact-description">
            TEDxDDUC – an independently organized TED event that brings together innovative thinkers, visionaries, and experts to share their ideas worth spreading. TEDxDDUC is a platform where ideas meet inspiration, fostering a community committed to dialogue, learning, and positive change.
          </p>
          <p className="contact-description">
            TEDxDDUC is not just an event; it's a journey of exploration, inspiration, and connection. Join us as we embark on a day filled with ideas that have the power to shape the future.
          </p>
          <p className="contact-note">
            This independent TEDx event is operated under license from TED.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

