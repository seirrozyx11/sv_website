import { FaMobileAlt, FaServer, FaMicrochip, FaDatabase } from 'react-icons/fa'
import './TechStack.css'

function TechStack() {
  const architecture = [
    {
      layer: 'Frontend',
      icon: <FaMobileAlt />,
      color: '#00B4D8',
      technologies: [
        { name: 'Flutter/Dart', description: 'Cross-platform mobile' },
        { name: 'BLE Integration', description: 'Bluetooth connectivity' },
        { name: 'Real-time UI', description: 'Live data visualization' }
      ]
    },
    {
      layer: 'Backend',
      icon: <FaServer />,
      color: '#90E0EF',
      technologies: [
        { name: 'Node.js + Express', description: 'RESTful API server' },
        { name: 'WebSocket', description: 'Real-time updates' },
        { name: 'Firebase FCM', description: 'Push notifications' }
      ]
    },
    {
      layer: 'Hardware',
      icon: <FaMicrochip />,
      color: '#F77F00',
      technologies: [
        { name: 'ESP32', description: 'Microcontroller' },
        { name: 'BLE 4.2+', description: 'Wireless communication' },
        { name: 'Sensors', description: 'Speed, power, cadence' }
      ]
    },
    {
      layer: 'Database',
      icon: <FaDatabase />,
      color: '#03045E',
      technologies: [
        { name: 'MongoDB', description: 'NoSQL database' },
        { name: 'User profiles', description: 'Activity tracking' },
        { name: 'Session data', description: 'Historical records' }
      ]
    }
  ]

  return (
    <section id="tech" className="section tech-stack">
      <div className="container">
        <h2 className="section-title">Technology Architecture</h2>
        <p className="tech-subtitle">
          Built with modern, scalable technologies
        </p>

        {/* Architecture Diagram */}
        <div className="architecture-flow">
          <div className="flow-item">Microcontroller</div>
          <div className="flow-arrow">↔ BLE ↔</div>
          <div className="flow-item">Flutter App</div>
          <div className="flow-arrow">↔ HTTP/WS ↔</div>
          <div className="flow-item">Node.js Backend</div>
          <div className="flow-arrow">↔</div>
          <div className="flow-item">MongoDB</div>
        </div>

        {/* Tech Stack Grid */}
        <div className="tech-grid">
          {architecture.map((arch, index) => (
            <div key={index} className="tech-card" style={{ '--card-color': arch.color }}>
              <div className="tech-header">
                <div className="tech-icon">{arch.icon}</div>
                <h3>{arch.layer}</h3>
              </div>
              
              <div className="tech-list">
                {arch.technologies.map((tech, i) => (
                  <div key={i} className="tech-item">
                    <strong>{tech.name}</strong>
                    <span>{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specifications */}
        <div className="tech-specs">
          <div className="spec-column">
            <h4>Mobile App</h4>
            <ul>
              <li>Platform: Android & iOS</li>
              <li>Framework: Flutter 3.x</li>
              <li>Min: Android 6.0 / iOS 12.0</li>
              <li>BLE, Location, Storage</li>
            </ul>
          </div>

          <div className="spec-column">
            <h4>Hardware</h4>
            <ul>
              <li>MCU: Microcontroller</li>
              <li>Communication: BLE 4.2+</li>
              <li>Output: 5V USB (max 2A)</li>
              <li>Power: Human pedaling</li>
            </ul>
          </div>

          <div className="spec-column">
            <h4>Backend</h4>
            <ul>
              <li>Server: Node.js v18+</li>
              <li>Database: MongoDB 6.0+</li>
              <li>API: RESTful + WebSocket</li>
              <li>Cloud: Scalable hosting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
