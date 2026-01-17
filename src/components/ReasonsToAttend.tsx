import './ReasonsToAttend.css'

const ReasonsToAttend = () => {
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
    <section id="events" className="reasons-section">
      <div className="reasons-background" data-parallax data-speed="0.4">
        <div className="star-field"></div>
      </div>
      <div className="reasons-content">
        <h2 className="reasons-title" data-parallax data-speed="0.3">
          reasons<br />to attend
        </h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="reason-card"
              data-parallax 
              data-speed={0.2 - (index * 0.05)}
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

