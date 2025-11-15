// API Configuration for SIKADVOLTZ Website
// This connects the website to the backend API

// Get API URL from environment variable or use default
export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Safe approach - only logs in development
if (import.meta.env.DEV) {
  // console.log('API Configuration:', {
  //   VITE_API_URL: import.meta.env.VITE_API_URL,
  //   API_BASE: API_BASE,
  //   mode: import.meta.env.MODE
  // });
  console.log("Boss? Saag man ka dire boss?");
}

export const API_ENDPOINTS = {
  // Base URLs
  BASE_URL: API_BASE,
  V1_BASE: `${API_BASE}/api/v1`,
  
  // Contact/Feedback endpoints (existing backend routes)
  CONTACT: `${API_BASE}/api/contact/send`,        // POST - Submit feedback/contact form
  CONTACT_LIST: `${API_BASE}/api/contact/admin/list`, // GET - Admin: view all messages
  
  // Health check
  HEALTH: `${API_BASE}/api/dashboard/health`,
  
  // Other available endpoints from your backend
  STATS: `${API_BASE}/api/v1/stats`,
  USERS: `${API_BASE}/api/users`,
  ACTIVITY: `${API_BASE}/api/activity-history`,
}

// Helper function to make API calls
export const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default API_BASE
