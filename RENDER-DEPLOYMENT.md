# 🚀 SIKADVOLTZ Website Deployment to Render

## Current Status
- ✅ Backend is deployed on Render: `sikadvoltz-backend`
- ❌ Website is NOT yet deployed (local only)
- ✅ Configuration files created for deployment

---

## 📋 Quick Deployment Guide

### Option 1: Deploy to Render (Recommended - Free Static Site)

#### Step 1: Push Your Code to GitHub
```bash
cd d:\codes\sikadvoltz
git add sv_website/
git commit -m "Add promotional website with Render config"
git push origin main
```

#### Step 2: Deploy on Render Dashboard

1. **Go to**: https://dashboard.render.com
2. **Click**: "New +" → "Static Site"
3. **Connect**: Your GitHub repository (`seirrozyx11/sikadvoltz`)
4. **Configure**:
   - **Name**: `sikadvoltz-website`
   - **Branch**: `main`
   - **Root Directory**: `sv_website`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

5. **Add Environment Variables**:
   - `VITE_API_URL` = `https://sikadvoltz-backend.onrender.com/api/v1`
   - `NODE_ENV` = `production`

6. **Click**: "Create Static Site"

7. **Your website will be live at**: `https://sikadvoltz-website.onrender.com`

---

### Option 2: Access Locally (Testing Now)

```bash
cd d:\codes\sikadvoltz\sv_website
npm install
npm run dev
```
Open: http://localhost:3000

---

## 🔧 Backend Configuration Needed

Your backend needs to allow the website domain in CORS settings:

### Update Backend Environment Variables on Render:

1. Go to: https://dashboard.render.com
2. Select: `sikadvoltz-backend`
3. Go to: "Environment" tab
4. Update `ALLOWED_ORIGINS` to include:
   ```
   https://sikadvoltz-website.onrender.com,https://sikadvoltz-frontend.onrender.com,http://localhost:3000,http://localhost:5173
   ```

Or if the variable doesn't exist, add it:
- **Key**: `ALLOWED_ORIGINS`
- **Value**: `https://sikadvoltz-website.onrender.com,http://localhost:3000`

### Update render.yaml in sv_backend (Optional - for next deployment)

Update the `CORS_ORIGIN` in `sv_backend/render.yaml`:
```yaml
- key: CORS_ORIGIN
  value: https://sikadvoltz-website.onrender.com
```

---

## 📁 Files Created for Deployment

### ✅ Render Configuration
- `sv_website/render.yaml` - Render deployment config

### ✅ Environment Variables
- `sv_website/.env.production` - Production API URL
- `sv_website/.env.development` - Development API URL

### ✅ API Configuration
- `sv_website/src/config/api.js` - API endpoint definitions

### ✅ Updated Components
- `sv_website/src/components/Feedback.jsx` - Now connects to backend

---

## 🌐 How to Access Your Website

### After Deployment:
1. **Website URL**: `https://sikadvoltz-website.onrender.com`
2. **Backend API**: `https://sikadvoltz-backend.onrender.com/api/v1`

### Before Deployment (Local):
1. **Website URL**: `http://localhost:3000`
2. **Backend API**: `https://sikadvoltz-backend.onrender.com/api/v1`

---

## 🔗 Connection Flow

```
User Browser
    ↓
SIKADVOLTZ Website (Render Static Site)
    ↓ HTTPS
SIKADVOLTZ Backend (Render Web Service)
    ↓
MongoDB Database
```

---

## ✅ What's Connected Now

1. **Feedback Form** → Sends data to `/api/v1/contact` endpoint on your backend
2. **API Configuration** → Points to your Render backend URL
3. **Environment Variables** → Configured for both dev and production

---

## 📱 Features Connected to Backend

Currently connected:
- ✅ Feedback Form submission
- ✅ Contact form (same endpoint)

Can be connected (requires backend routes):
- ⚠️ Real-time stats/user counts
- ⚠️ Download statistics
- ⚠️ Newsletter subscription

---

## 🚨 Important Notes

1. **Free Tier Limitations**:
   - Render free static sites sleep after 15 minutes of inactivity
   - First load after sleep takes ~30 seconds
   - Upgrade to paid plan ($7/month) for always-on

2. **CORS Configuration**:
   - Must add website domain to backend's `ALLOWED_ORIGINS`
   - Without this, feedback form won't work

3. **API Endpoints**:
   - Make sure `/api/v1/contact` route exists in your backend
   - If not, you need to create it (see below)

---

## 🛠️ Backend Route Setup (If Missing)

If your backend doesn't have a `/api/v1/contact` endpoint, add this to your backend:

### Create: `sv_backend/routes/contactRoutes.js`
```javascript
import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const contact = new Contact({
      name,
      email,
      subject,
      message,
      submittedAt: new Date()
    });
    
    await contact.save();
    
    res.status(201).json({
      success: true,
      message: 'Thank you for your feedback!'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit feedback'
    });
  }
});

export default router;
```

### Add to: `sv_backend/index.js`
```javascript
import contactRoutes from './routes/contactRoutes.js';

// Add after other routes
app.use('/api/v1/contact', contactRoutes);
```

---

## 🎯 Next Steps

1. ✅ **Push code to GitHub**
2. ✅ **Deploy to Render** (follow Step 2 above)
3. ✅ **Update backend CORS settings**
4. ✅ **Test feedback form**
5. ⚠️ **Add custom domain** (optional, $1/month on Render)

---

## 🔍 Troubleshooting

### Issue: "Failed to submit feedback"
**Solution**: Check backend CORS settings and verify contact endpoint exists

### Issue: Website not loading
**Solution**: 
- Check Render dashboard for build logs
- Verify build command completed successfully
- Check if static files were generated in `dist/` folder

### Issue: API calls failing
**Solution**:
- Verify `VITE_API_URL` environment variable is set correctly
- Check backend is running on Render
- Test backend health: `https://sikadvoltz-backend.onrender.com/api/v1/dashboard/health`

---

## 📊 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Static site created on Render
- [ ] Environment variables configured
- [ ] Backend CORS updated
- [ ] Website accessible
- [ ] Feedback form tested
- [ ] Custom domain added (optional)

---

## 💰 Cost Estimate

**Free Tier (Current)**:
- Static Site: FREE (sleeps after inactivity)
- Backend: $7/month (already deployed)
- Total: $7/month

**Always-On (Recommended)**:
- Static Site: $7/month (no sleep)
- Backend: $7/month (already deployed)
- Total: $14/month

**With Custom Domain**:
- Add $1/month per domain

---

**Ready to deploy? Push your code and follow the steps above!** 🚀
