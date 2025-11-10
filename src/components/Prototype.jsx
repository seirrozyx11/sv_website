import { useState } from 'react'
import { FaPlay, FaImage } from 'react-icons/fa'
import './Prototype.css'

function Prototype() {
  const [activeTab, setActiveTab] = useState('system')

  const tabs = [
    { id: 'system', label: 'Full System', icon: '🚴' },
    { id: 'hardware', label: 'Hardware', icon: '⚙️' },
    { id: 'app', label: 'Mobile App', icon: '📱' },
    { id: 'demo', label: 'Demo Video', icon: '🎥' }
  ]

  const images = {
    system: [
      { title: 'Complete Bike Setup', description: 'Full system with charging station' },
      { title: 'Side View', description: 'Bike with ESP32 and sensors' },
    ],
    hardware: [
      { title: 'Microcontroller Module', description: 'Microcontroller with BLE' },
      { title: 'Dynamo Generator', description: 'Power generation unit' },
      { title: 'USB Charging Port', description: '5V output for devices' },
    ],
    app: [
      { title: 'Dashboard', description: 'Live metrics display' },
      { title: 'Activity History', description: 'Past workout sessions' },
      { title: 'Device Pairing', description: 'BLE connection screen' },
      { title: 'Achievements', description: 'Badges and goals' },
    ]
  }

  return (
    <section id="prototype" className="section prototype">
      <div className="container">
        <h2 className="section-title">Our Prototype</h2>
        <p className="prototype-subtitle">
          See SIKADVOLTZ in action – from hardware to mobile app
        </p>

        {/* Tabs */}
        <div className="prototype-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="prototype-content">
          {activeTab === 'demo' ? (
            <div className="demo-video">
              <div className="video-placeholder">
                <FaPlay className="play-icon" />
                <p>Demo Video Coming Soon</p>
                <small>Add your prototype demo video here (30-60 seconds)</small>
              </div>
            </div>
          ) : (
            <div className="image-gallery">
              {images[activeTab]?.map((image, index) => (
                <div key={index} className="gallery-item">
                  <div className="image-placeholder">
                    <FaImage />
                    <p>{image.title}</p>
                    <small>{image.description}</small>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Features Highlight */}
        <div className="prototype-features">
          <div className="feature-box">
            <h4>⚡ Power Output</h4>
            <p>Up to 100W during active pedaling</p>
          </div>
          <div className="feature-box">
            <h4>🔋 Charging Capacity</h4>
            <p>5V/2A USB output for devices</p>
          </div>
          <div className="feature-box">
            <h4>📊 Real-Time Data</h4>
            <p>Live metrics via BLE connection</p>
          </div>
          <div className="feature-box">
            <h4>🏆 Tested & Proven</h4>
            <p>100+ hours of testing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prototype
