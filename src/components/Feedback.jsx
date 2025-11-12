import { useState, useEffect } from 'react'
import { FaStar, FaPaperPlane } from 'react-icons/fa'
import feedbackService from '../config/services/feedbackService'
import Turnstile from './Turnstile'
import './Feedback.css'

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    category: 'general',
    message: ''
  })
  const [turnstileToken, setTurnstileToken] = useState(null)
  const [feedbackStats, setFeedbackStats] = useState({
    totalFeedback: 0,
    averageRating: 0,
    satisfactionRate: 0,
    recentFeedback: []
  })
  const [loading, setLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  // Fetch feedback stats on component mount
  useEffect(() => {
    const fetchFeedbackStats = async () => {
      try {
        setLoading(true)
        const data = await feedbackService.getFeedbackStats()
        
        setFeedbackStats({
          totalFeedback: data.stats.totalFeedback,
          averageRating: data.stats.averageRating,
          satisfactionRate: data.stats.satisfactionRate,
          recentFeedback: data.recentFeedback || []
        })
      } catch (err) {
        console.error('Failed to load feedback stats:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchFeedbackStats()
    
    // Refresh stats every 5 minutes
    const interval = setInterval(fetchFeedbackStats, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const handleTurnstileVerify = (token) => {
    setTurnstileToken(token)
    if (token) {
      console.log('✅ Turnstile verification successful')
    } else {
      console.log('❌ Turnstile verification failed')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate Turnstile token
    if (!turnstileToken) {
      setError('Please complete the security verification')
      return
    }
    
    setSubmitting(true)
    setError(null)
    
    try {
      // Submit feedback using the service with Turnstile token
      const result = await feedbackService.submitFeedback({
        ...formData,
        turnstileToken
      })
      
      if (result.success) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          rating: 0,
          category: 'general',
          message: ''
        })
        setTurnstileToken(null) // Reset Turnstile token
        
        // Refresh stats after submission
        const updatedStats = await feedbackService.getFeedbackStats()
        setFeedbackStats({
          totalFeedback: updatedStats.stats.totalFeedback,
          averageRating: updatedStats.stats.averageRating,
          satisfactionRate: updatedStats.stats.satisfactionRate,
          recentFeedback: updatedStats.recentFeedback || []
        })
        
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(result.error || 'Failed to submit feedback')
      }
    } catch (err) {
      setError('Failed to submit feedback. Please try again.')
      console.error('Feedback submission error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRating = (rating) => {
    setFormData({ ...formData, rating })
  }

  return (
    <section id="feedback" className="section feedback">
      <div className="container">
        <h2 className="section-title">Share Your Feedback</h2>
        <p className="feedback-subtitle">
          Help us improve SIKADVOLTZ – your input matters!
        </p>

        <div className="feedback-content">
          {/* Feedback Form */}
          <div className="feedback-form-wrapper">
            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your-email@example.com"
                />
              </div>

              <div className="form-group">
                <label>Rating *</label>
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`star ${formData.rating >= star ? 'active' : ''}`}
                      onClick={() => handleRating(star)}
                    />
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General Feedback</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Feedback *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Share your thoughts, suggestions, or report issues..."
                />
              </div>

              {/* Cloudflare Turnstile - Bot Protection */}
              <div className="form-group turnstile-container">
                <Turnstile onVerify={handleTurnstileVerify} theme="auto" />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn" 
                disabled={submitting || !turnstileToken}
              >
                <FaPaperPlane /> {submitting ? 'Submitting...' : 'Submit Feedback'}
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your feedback has been submitted.
                </div>
              )}
              
              {error && (
                <div className="error-message">
                  ✗ {error}
                </div>
              )}
            </form>
          </div>

          {/* Feedback Stats & Info */}
          <div className="feedback-info">
            <div className="info-card">
              <h3>Why Your Feedback Matters</h3>
              <ul>
                <li>🎯 Help us prioritize features</li>
                <li>🐛 Report bugs and issues</li>
                <li>💡 Suggest improvements</li>
                <li>🤝 Shape the future of SIKADVOLTZ</li>
              </ul>
            </div>

            <div className="info-card stats">
              <h3>Community Stats</h3>
              {loading ? (
                <div className="loading-stats">Loading...</div>
              ) : (
                <>
                  <div className="stat-item">
                    <span className="stat-number">{feedbackStats.totalFeedback}+</span>
                    <span className="stat-label">Feedback Received</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{feedbackStats.averageRating}/5</span>
                    <span className="stat-label">Average Rating</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{feedbackStats.satisfactionRate}%</span>
                    <span className="stat-label">User Satisfaction</span>
                  </div>
                </>
              )}
            </div>

            <div className="info-card">
              <h3>Recent Feedback</h3>
              {loading ? (
                <div className="loading-stats">Loading...</div>
              ) : feedbackStats.recentFeedback.length > 0 ? (
                feedbackStats.recentFeedback.map((feedback, index) => (
                  <div key={index} className="recent-feedback-item">
                    <div className="feedback-rating">
                      {feedbackService.formatRating(feedback.rating)}
                    </div>
                    <p>{feedback.message}</p>
                    <small>- {feedback.name}</small>
                  </div>
                ))
              ) : (
                <div className="recent-feedback-item">
                  <p>No recent feedback yet. Be the first to share yours!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
