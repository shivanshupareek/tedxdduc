import './EventDate.css'

const EventDate = () => {
  return (
    <section className="event-date-section">
      <div className="event-background" data-parallax data-speed="0.3">
        <div className="date-glow"></div>
        <div className="floating-stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </div>
      <div className="event-content">
        <h2 className="join-text" data-parallax data-speed="0.25">Join us on</h2>
        <div className="date-display" data-parallax data-speed="0.2">
          <div className="date-number">18</div>
          <div className="date-month">FEB</div>
          <div className="date-year">2026</div>
        </div>
      </div>
    </section>
  )
}

export default EventDate

