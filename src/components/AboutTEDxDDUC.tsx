import './AboutTEDxDDUC.css'

const AboutTEDxDDUC = () => {
  return (
    <section className="about-tedxdduc">
      <div className="about-dduc-background" data-parallax data-speed="0.35">
        <div className="cosmic-elements"></div>
      </div>
      <div className="about-dduc-content">
        <h2 className="section-title" data-parallax data-speed="0.25">
          About <span className="red-text">TEDxDDUC</span>
        </h2>
        <div className="about-dduc-text" data-parallax data-speed="0.15">
          <p>
            TEDxDDUC embodies this spirit, bringing together the brightest minds and most passionate voices from our community to ignite dialogue, spark inspiration, and leave a lasting impact on our community. Get ready to dive into a world of groundbreaking ideas, thought-provoking conversations, and unforgettable connections.
          </p>
        </div>
        <div className="explore-button-container" data-parallax data-speed="0.1">
          <button className="explore-button">Explore More</button>
        </div>
      </div>
    </section>
  )
}

export default AboutTEDxDDUC

