import API_BASE from '../config/api.js';

/**
 * Service to fetch website statistics from backend
 */
class StatsService {
  /**
   * Fetch live statistics from MongoDB
   * @returns {Promise<{users: number, activities: number, calories: number, energy: number}>}
   */
  async getStats() {
    try {
      const response = await fetch(`${API_BASE}/api/v1/stats`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success && result.data) {
        return {
          users: result.data.users || 0,
          activities: result.data.activities || 0,
          calories: result.data.calories || 0,
          energy: result.data.energy || 0,
          lastUpdated: result.data.lastUpdated
        };
      }
      
      throw new Error('Invalid response format: Status 500');
      
    } catch (error) {
      // Return fallback data if API fails
      return {
        users: 100,
        activities: 10000,
        calories: 250000,
        energy: 500,
        error: true
      };
    }
  }
  
  /**
   * Format large numbers with suffix (k, M)
   * @param {number} num - Number to format
   * @returns {string} Formatted number
   */
  formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }
}

export default new StatsService();
