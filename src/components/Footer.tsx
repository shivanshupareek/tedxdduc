import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact us</a>
        </div>
        <div className="footer-text">
          <p>TEDxDDUC – Ideas Worth Spreading</p>
          <p className="footer-note">This independent TEDx event is operated under license from TED.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

