import { useState } from 'react'
import { FaPlay, FaImage } from 'react-icons/fa'
import './Prototype.css'

// Helper function to get image paths
const getImagePath = (filename) => `/assets/images/${filename}`

function Prototype() {
  const [activeTab, setActiveTab] = useState('system')
  const [selectedImage, setSelectedImage] = useState(null)

  const tabs = [
    { id: 'system', label: 'Full System', icon: '🚴' },
    { id: 'hardware', label: 'Hardware', icon: '⚙️' },
    { id: 'app', label: 'Mobile App', icon: '📱' },
    { id: 'demo', label: 'Demo Video', icon: '🎥' }
  ]

  const images = {
    system: [
      { title: 'Complete Bike Setup', description: 'Full system with charging station', image: getImagePath('comingsoon.png') },
      { title: 'Side View', description: 'Bike with Microcontroller and sensors', image: getImagePath('sikadvoltz-prototype.png') },
    ],
    hardware: [
      { title: 'Microcontroller Module', description: 'Microcontroller with BLE', image: getImagePath('microcontroller.png') },
      { title: 'Dynamo Generator', description: 'Power generation unit', image: getImagePath('alternator.png') },
      { title: 'USB Charging Port', description: '5V output for devices', image: getImagePath('chargingport.png') },
    ],
    app: [
      { title: 'Live Dashboard', description: 'Live metrics display', image: getImagePath('app-livedashboard.png') },
      { title: 'Activity History', description: 'Past workout sessions', image: getImagePath('activity-history.png') },
      { title: 'Device Pairing', description: 'BLE connection screen', image: getImagePath('app-devicepairing.png') },
      { title: 'Home Dashboard', description: 'Home Dashboard display', image: getImagePath('app-dashboard.png') },
      { title: 'Battery Station', description: 'Device charging display', image: getImagePath('app-batterystation.png') },
      { title: 'Achievements', description: 'Badges and goals', image: getImagePath('app-achievements.png') },
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
                <img src={getImagePath('comingsoon.png')}></img>
              </div>
            </div>
          ) : (
            <div className="image-gallery">
              {images[activeTab]?.map((image, index) => (
                <div key={index} className="gallery-item">
                  {image.image ? (
                    <div 
                      className="image-container"
                      onClick={() => {
                        setSelectedImage(image)
                      }}
                    >
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="prototype-image"
                      />
                      <div className="image-overlay">
                        <h4>{image.title}</h4>
                        <p>{image.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="image-placeholder">
                      <FaImage />
                      <p>{image.title}</p>
                      <small>{image.description}</small>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image Modal/Lightbox */}
        {selectedImage && (
          <div 
            className="image-modal" 
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="modal-backdrop"></div>
            <div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                zIndex: 100000
              }}
            >
              <button 
                className="modal-close" 
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  fontSize: '24px',
                  cursor: 'pointer',
                  zIndex: 100001
                }}
              >
                ×
              </button>
              <img 
                src={selectedImage.image} 
                className="modal-image"
                style={{
                  width: '100%',
                  maxHeight: 'calc(90vh - 100px)',
                  objectFit: 'contain'
                }}
              />
              <div className="modal-info" style={{ padding: '0rem', borderTop: '2px solid #10B981' }}>
              </div>
            </div>
          </div>
        )}


        {/* Features Highlight */}
        <div className="prototype-features">
          <div className="feature-box">
            <h4>Power Output</h4>
            <p>Up to 100W during active pedaling</p>
          </div>
          <div className="feature-box">
            <h4>Charging Capacity</h4>
            <p>5V/2A USB output for devices</p>
          </div>
          <div className="feature-box">
            <h4>Real-Time Data</h4>
            <p>Live metrics via BLE connection</p>
          </div>
          <div className="feature-box">
            <h4>Tested & Proven</h4>
            <p>100+ hours of testing</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prototype
