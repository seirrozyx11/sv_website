# ⚡ Quick Setup Guide - Website + Backend

## 🎯 Current Status
- ✅ Backend running on Render: `https://sikadvoltz-backend.onrender.com`
- ✅ Contact API endpoint exists: `/api/contact/send`
- ⚠️ CORS needs update to allow website domain
- ❌ Website not yet deployed

---

## 🚀 3-Step Deployment

### Step 1: Update Backend CORS (2 minutes)

1. Go to: https://dashboard.render.com
2. Select: `sikadvoltz-backend`
3. Click: "Environment" tab
4. Find: `ALLOWED_ORIGINS`
5. Update to:
   ```
   http://localhost:8080,http://127.0.0.1:8080,capacitor://localhost,ionic://localhost,http://10.0.2.2:8080,https://sikadvoltz-website.onrender.com,http://localhost:3000,http://localhost:5173
   ```
6. Save and wait for redeploy

### Step 2: Test Locally (5 minutes)

```bash
cd d:\codes\sikadvoltz\sv_website
npm install
npm run dev
```

Open http://localhost:3000 and test feedback form.

### Step 3: Deploy to Render (10 minutes)

```bash
# Push to GitHub
git add sv_website/
git commit -m "Add promotional website"
git push origin main
```

Then on Render:
1. New → Static Site
2. Connect repo: `seirrozyx11/sikadvoltz`
3. Root: `sv_website`
4. Build: `npm install && npm run build`
5. Publish: `dist`
6. Env: `VITE_API_URL` = `https://sikadvoltz-backend.onrender.com`

---

## 🔗 URLs After Deployment

- **Website**: `https://sikadvoltz-website.onrender.com`
- **Backend API**: `https://sikadvoltz-backend.onrender.com`
- **Contact Endpoint**: `https://sikadvoltz-backend.onrender.com/api/contact/send`
- **Health Check**: `https://sikadvoltz-backend.onrender.com/api/dashboard/health`

---

## ✅ What's Fixed

1. ✅ API endpoint corrected (`/api/contact/send` not `/api/v1/contact`)
2. ✅ Environment variables updated
3. ✅ Feedback form connected to backend
4. ✅ Error handling added
5. ✅ Loading states implemented

---

## 📋 Backend .env Analysis

**Status: READY FOR HOSTING** ✅

**Key Findings:**
- ✅ MongoDB configured (Atlas)
- ✅ Redis configured (Redis Cloud)
- ✅ JWT authentication ready
- ✅ Google OAuth ready
- ✅ SendGrid email configured
- ✅ Firebase FCM configured
- ⚠️ **CORS must be updated** (only critical issue)

**Contact API Status:**
- ✅ Route exists in backend (`/api/contact`)
- ✅ Database model ready (`Contact`)
- ✅ Email integration configured
- ✅ Rate limiting enabled (5 requests per 15 min)
- ✅ Auto-categorization implemented
- ✅ Admin endpoints available

---

## 🧪 Test Commands

```bash
# Test backend health
curl https://sikadvoltz-backend.onrender.com/api/dashboard/health

# Test contact endpoint
curl -X POST https://sikadvoltz-backend.onrender.com/api/contact/send \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Testing the API"}'

# Expected response: {"success":true,"message":"Your message has been received..."}
```

---

## 💰 Cost Summary

**Current:**
- Backend: $7/month (Render Starter)
- Website: FREE (Render Static Site)
- **Total: $7/month**

**To eliminate sleep:**
- Backend: $7/month (current)
- Website: $7/month (upgrade)
- **Total: $14/month**

---

## 📞 Support Resources

- Backend Analysis: `BACKEND-ENV-ANALYSIS.md`
- Deployment Guide: `RENDER-DEPLOYMENT.md`
- Connection Summary: `BACKEND-CONNECTION-SUMMARY.md`
- Project Overview: `PROJECT-COMPLETE.md`

---

**Ready to deploy? Start with Step 1!** 🚀
