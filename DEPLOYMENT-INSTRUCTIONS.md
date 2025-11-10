# 🚀 Deploy SIKADVOLTZ Website to Render

## Your Website URL
`https://web-sikadvoltz.onrender.com`

---

## 📋 Deployment Steps

### Step 1: Update Backend CORS (CRITICAL - Do This First!)

1. Go to: https://dashboard.render.com
2. Select: `sikadvoltz-backend`
3. Click: **Environment** tab
4. Find or Add: `ALLOWED_ORIGINS`
5. **Set the value to:**
   ```
   http://localhost:8080,http://127.0.0.1:8080,capacitor://localhost,ionic://localhost,http://10.0.2.2:8080,https://web-sikadvoltz.onrender.com,http://localhost:3000,http://localhost:5173
   ```
6. Click: **Save Changes**
7. Backend will auto-redeploy

**⚠️ Without this, your feedback form won't work!**

---

### Step 2: Push Code to GitHub

```bash
cd d:\codes\sikadvoltz
git add .
git commit -m "Add promotional website for deployment"
git push origin main
```

---

### Step 3: Deploy Website on Render

1. **Go to:** https://dashboard.render.com
2. **Click:** "New +" button → Select **"Static Site"**

3. **Connect Repository:**
   - Connect your GitHub account (if not connected)
   - Select repository: `seirrozyx11/sikadvoltz`
   - Click: **Connect**

4. **Configure Static Site:**
   
   **Basic Settings:**
   - **Name:** `web-sikadvoltz`
   - **Branch:** `main`
   - **Root Directory:** `sv_website`
   
   **Build Settings:**
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   
   **Environment Variables:**
   - Click: **Add Environment Variable**
   - **Key:** `VITE_API_URL`
   - **Value:** `https://sikadvoltz-backend.onrender.com`
   - Click: **Add** button

5. **Advanced Settings (Optional):**
   - **Auto-Deploy:** Yes (recommended)
   - **Branch:** main

6. **Click:** "Create Static Site"

---

### Step 4: Wait for Build

- Build typically takes 2-3 minutes
- You'll see build logs in real-time
- Look for: "Build successful" and "Deploy live"

---

### Step 5: Access Your Website

Once deployed, your website will be live at:

**🌐 https://web-sikadvoltz.onrender.com**

---

## ✅ Post-Deployment Checklist

### Test the Website:
- [ ] Website loads successfully
- [ ] All sections visible (Hero, Features, Tech Stack, etc.)
- [ ] Navigation works
- [ ] Mobile responsive design works
- [ ] Images load (placeholders should show)

### Test Backend Connection:
- [ ] Fill out feedback form
- [ ] Submit feedback
- [ ] See "Success" message (not CORS error)
- [ ] Check backend logs on Render for submission

### Verify Backend:
- [ ] Check Render dashboard → `sikadvoltz-backend` → Logs
- [ ] Look for: "Contact form submitted"
- [ ] No CORS errors should appear

---

## 🔧 If Something Goes Wrong

### Issue: "Build Failed"
**Solution:** Check build logs for errors
- Common issue: Node version mismatch
- Fix: Add `.node-version` file with `18` or `20`

### Issue: "CORS Error" when submitting form
**Solution:** Update backend CORS (Step 1)
- Make sure `ALLOWED_ORIGINS` includes `https://web-sikadvoltz.onrender.com`
- Redeploy backend if needed

### Issue: "Website not loading"
**Solution:** Check deploy logs
- Look for errors in build process
- Verify `dist` folder was created
- Check Render status page

### Issue: "Feedback form not working"
**Solutions:**
1. Check browser console for errors
2. Verify backend is running: https://sikadvoltz-backend.onrender.com/api/dashboard/health
3. Test API directly: `curl -X POST https://sikadvoltz-backend.onrender.com/api/contact/send -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Testing"}'`

---

## 🎨 Customize After Deployment

### Add Your Content:
1. Replace placeholder images in `assets/` folder
2. Update team information in `src/components/Team.jsx`
3. Update download links in `src/components/Download.jsx`
4. Commit and push changes → Auto-deploys to Render

### Add Custom Domain (Optional):
1. Buy domain (e.g., sikadvoltz.com from Namecheap)
2. On Render: Static Site → Settings → Custom Domain
3. Add your domain and follow DNS instructions
4. Wait for SSL certificate (automatic)

---

## 💰 Cost Breakdown

**Free Tier:**
- Static Site: **FREE** (sleeps after 15 min inactivity)
- Backend: **$7/month** (already running)
- **Total: $7/month**

**Always-On (No Sleep):**
- Static Site: **$7/month**
- Backend: **$7/month** (already running)
- **Total: $14/month**

**With Custom Domain:**
- Add ~$12/year for domain registration
- SSL certificate: **FREE** (automatic from Render)

---

## 📊 Deployment Timeline

| Step | Time | Status |
|------|------|--------|
| Update CORS | 2 min | Required |
| Push to GitHub | 1 min | Required |
| Create Static Site | 3 min | Required |
| Build & Deploy | 2-3 min | Automatic |
| **Total** | **~8-10 min** | - |

---

## 🔗 Important URLs

- **Your Website:** https://web-sikadvoltz.onrender.com
- **Backend API:** https://sikadvoltz-backend.onrender.com
- **Backend Health:** https://sikadvoltz-backend.onrender.com/api/dashboard/health
- **Contact API:** https://sikadvoltz-backend.onrender.com/api/contact/send
- **Render Dashboard:** https://dashboard.render.com

---

## 📞 Need Help?

See these documentation files:
- `BACKEND-ENV-ANALYSIS.md` - Backend configuration details
- `RENDER-DEPLOYMENT.md` - Complete deployment guide
- `QUICK-SETUP.md` - Fast setup reference
- `README.md` - Full project documentation

---

**Ready to deploy? Start with Step 1!** 🚀

**Your website URL will be:** `https://web-sikadvoltz.onrender.com`
