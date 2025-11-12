import { useState, useEffect } from 'react'
import { FaDownload, FaPlay } from 'react-icons/fa'
import statsService from '../../web/services/statsService'
import './Hero.css'

function Hero() {
  const [stats, setStats] = useState({
    users: 100,
    activities: 10000,
    energy: 500,
    loading: true
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await statsService.getStats()
        setStats({
          users: data.users,
          activities: data.activities,
          energy: data.energy,
          loading: false,
          error: data.error
        })
      } catch (error) {
        console.error('Status 400:', error)
        setStats(prev => ({ ...prev, loading: false, error: true }))
      }
    }

    fetchStats()
    
    // Refresh stats every 5 minutes
    const interval = setInterval(fetchStats, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fade-in">
              Pedal Your Way to <span className="gradient-text">Fitness & Power</span>
            </h1>
            
            <p className="hero-subtitle">
              Turn calories into kilowatts with SIKADVOLTZ – the revolutionary fitness app 
              integrated with pedal-powered charging technology
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">
                  {stats.loading ? '...' : `${statsService.formatNumber(stats.users)}+`}
                </span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {stats.loading ? '...' : `${statsService.formatNumber(stats.activities)}+`}
                </span>
                <span className="stat-label">Calories Burned</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {stats.loading ? '...' : `${statsService.formatNumber(stats.energy)}W`}
                </span>
                <span className="stat-label">Power Generated</span>
              </div>
            </div>
            
            <div className="hero-cta">
              <a href="#download" className="btn btn-primary">
                <FaDownload /> Download App
              </a>
              <a href="#prototype" className="btn btn-secondary">
                <FaPlay /> Watch Demo
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image-placeholder">
              {/* <FaBolt className="hero-icon" /> */}
              <img 
                src="/assets/images/sikadvoltz-prototype.png" 
                alt="SikadVoltz Prototype" 
                className="hero-image"
                />
              {/* { <p>Prototype Image</p> } */}
              {/* { <small>SIKADVOLTZ</small> } */}
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
