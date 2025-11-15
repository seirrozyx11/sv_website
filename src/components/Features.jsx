import { FaHeartbeat, FaBolt, FaTrophy, FaBell, FaMobileAlt, FaBluetooth } from 'react-icons/fa'
import './Features.css'

function Features() {
  const features = [
    {
      icon: <FaHeartbeat />,
      category: 'Fitness Tracking',
      title: 'Real-Time Metrics',
      description: 'Track calories, speed, distance, and duration with precision',
      highlights: ['Live Calorie Burn', 'Speed & Cadence', 'Distance Tracking', 'Activity History']
    },
    {
      icon: <FaBolt />,
      category: 'Power Generation',
      title: 'Energy Conversion',
      description: 'Convert your pedaling into usable USB power',
      highlights: ['5V USB Output', 'Live Power Monitoring', 'Energy Tracking', 'Device Charging']
    },
    {
      icon: <FaBell />,
      category: 'Smart Alerts',
      title: 'Reminders & Notifications',
      description: 'Never miss your workout with intelligent reminders',
      highlights: ['Workout Reminders', 'Goal Alerts', 'Milestone Notifications', 'Push Notifications']
    },
    {
      icon: <FaTrophy />,
      category: 'Gamification',
      title: 'Achievements & Goals',
      description: 'Stay motivated with personalized goals and badges',
      highlights: ['Custom Goals', 'Achievement System', 'Progress Tracking', 'Leaderboards']
    },
    {
      icon: <FaMobileAlt />,
      category: 'Mobile App',
      title: 'Cross-Platform',
      description: 'Available on Android devices with iOS support coming soon',
      highlights: ['Flutter Framework', 'Offline Mode', 'Dark/Light Theme', 'Data Export']
    },
    {
      icon: <FaBluetooth />,
      category: 'IoT Integration',
      title: 'Microcontroller Connectivity',
      description: 'Seamless Bluetooth connection with hardware',
      highlights: ['BLE 4.2+', 'Auto-Connect', 'Real-Time Sync', 'Device Management']
    }
  ]

  return (
    <section id="features" className="section features">
      <div className="container">
        <h2 className="section-title">Powerful Features</h2>
        <p className="features-subtitle">
          Everything you need to track fitness and generate power
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              
              <span className="feature-category">{feature.category}</span>
              <h3>{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              
              <ul className="feature-highlights">
                {feature.highlights.map((highlight, i) => (
                  <li key={i}>✓ {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
