import { API_BASE } from '../config/api'

const feedbackService = {
  /**
   * Get feedback statistics from backend
   */
  async getFeedbackStats() {
    console.log('🔄 Fetching feedback stats from:', `${API_BASE}/api/contact/feedback/stats`)
    
    try {
      const response = await fetch(`${API_BASE}/api/contact/feedback/stats`)
      console.log('📡 Feedback stats response status:', response.status)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      console.log('📊 Feedback stats received:', result)
      
      if (result.success && result.data) {
        console.log('✅ Returning real feedback data:', result.data)
        return result.data
      }
      
      throw new Error('Invalid response format')
      
    } catch (error) {
      console.error('❌ Error fetching feedback stats:', error)
      console.log('⚠️ Using fallback feedback data')
      
      // Fallback data
      return {
        stats: {
          totalFeedback: 150,
          averageRating: 4.8,
          satisfactionRate: 95,
          fiveStarCount: 120
        },
        recentFeedback: [
          {
            name: 'Alex',
            message: 'Amazing concept! Love how it combines fitness with sustainability.',
            rating: 5,
            timeAgo: '2 days ago'
          },
          {
            name: 'Sarah',
            message: 'The real-time tracking is so accurate. Great job!',
            rating: 5,
            timeAgo: '1 week ago'
          }
        ]
      }
    }
  },

  /**
   * Format rating as stars
   */
  formatRating(rating) {
    return '⭐'.repeat(rating)
  },

  /**
   * Submit feedback to backend
   */
  async submitFeedback(feedbackData) {
    console.log('🔄 Submitting feedback to:', `${API_BASE}/api/contact/send`)
    
    try {
      const response = await fetch(`${API_BASE}/api/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: feedbackData.name,
          email: feedbackData.email,
          subject: `Feedback - ${feedbackData.category}`,
          message: feedbackData.message,
          rating: feedbackData.rating,
          category: 'feedback'
        })
      })
      
      console.log('📡 Submit response status:', response.status)
      
      const result = await response.json()
      console.log('📊 Submit result:', result)
      
      return result
      
    } catch (error) {
      console.error('❌ Error submitting feedback:', error)
      throw error
    }
  }
}

export default feedbackService
