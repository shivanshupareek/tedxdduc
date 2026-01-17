import './AboutTEDx.css'

const AboutTEDx = () => {
  return (
    <section id="about" className="about-tedx">
      <div className="about-background" data-parallax data-speed="0.3">
        <div className="red-glow"></div>
      </div>
      <div className="about-content">
        <h2 className="section-title" data-parallax data-speed="0.2">
          About <span className="red-text">TEDx</span>
        </h2>
        <div className="about-text-container" data-parallax data-speed="0.1">
          <p className="about-description">
            TEDx is a global platform that brings together individuals with diverse backgrounds and ideas to share "ideas worth spreading". TEDxDDUC is an extension of this initiative, striving to create a local space where our community can come together to explore, discuss, and be inspired by innovative ideas.
          </p>
          <p className="about-description">
            TEDx events are independently organized gatherings modeled after the renowned TED conferences, fostering local communities around "ideas worth spreading". These events feature curated talks exploring diverse themes, igniting dialogue and amplifying powerful voices within specific regions or communities.
          </p>
        </div>
        <div className="explore-button-container" data-parallax data-speed="0.05">
          <button className="explore-button">EXPLORE MORE</button>
        </div>
      </div>
    </section>
  )
}

export default AboutTEDx

