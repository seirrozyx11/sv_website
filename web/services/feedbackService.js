import { API_BASE } from '../config/api'

const feedbackService = {
  /**
   * Get feedback statistics from backend
   */
  async getFeedbackStats() {
    try {
      const response = await fetch(`${API_BASE}/api/contact/feedback/stats`)

      // console.log('Hello')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      if (result.success && result.data) {
        return result.data
      }
      throw new Error('Invalid response format')
    } catch (error) {
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
      
      const result = await response.json()
      return result
      
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default feedbackService
