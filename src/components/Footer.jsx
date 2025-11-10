import { FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Technology', href: '#tech' },
    { name: 'Prototype', href: '#prototype' },
    { name: 'Download', href: '#download' },
    { name: 'Feedback', href: '#feedback' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo & Description */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src="assets/images/svlogolog.png" 
                alt="SikadVoltz Logo" className="logo-img" />
              <span className="logo-text">SIKADVOLTZ</span>
            </div>
            <p className="footer-description">
              Pedal your way to fitness and power. Combining sustainable energy 
              generation with real-time fitness tracking.
            </p>
            <div className="footer-social">
              <a href="https://github.com/seirrozyx11/sikadvoltz" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:sikadvoltz.app@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Info */}
          <div className="footer-section">
            <h4>Project Info</h4>
            <ul className="footer-info">
              <li>Capstone Project 2025</li>
              <li>Status: Prototype Complete</li>
              {/* <li>Open Source</li> */}
              <li>Academic Research</li>
            </ul>
          </div>

          {/* Technologies */}
          {/* <div className="footer-section">
            <h4>Built With</h4>
            <ul className="footer-tech">
              <li>Flutter & Dart</li>
              <li>Node.js & Express</li> */}
              {/* <li>ESP32 & BLE</li> */}
              {/* <li>MongoDB</li>
              <li>React.js</li>
            </ul>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 SIKADVOLTZ Team. All Rights Reserved.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> for sustainability and fitness
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
