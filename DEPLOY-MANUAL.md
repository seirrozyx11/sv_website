# 🚀 Deploy Website - Manual Method (No render.yaml)

## Your Setup
- ✅ Backend already running: `https://sikadvoltz-backend.onrender.com`
- ✅ All env variables set manually in Render Dashboard
- ✅ Website code ready in `sv_website/` folder

---

## 3 Steps to Deploy

### Step 1: Update Backend CORS (CRITICAL!)

1. Go to: https://dashboard.render.com
2. Select: **`sikadvoltz-backend`**
3. Click: **Environment** tab
4. Find: `ALLOWED_ORIGINS`
5. Add your website domain to the list:
   ```
   https://web-sikadvoltz.onrender.com
   ```
   
   **Full value example:**
   ```
   http://localhost:8080,http://127.0.0.1:8080,capacitor://localhost,ionic://localhost,http://10.0.2.2:8080,https://web-sikadvoltz.onrender.com,http://localhost:3000
   ```

6. **Save** (backend will auto-redeploy)

---

### Step 2: Push to GitHub

```bash
cd d:\codes\sikadvoltz
git add sv_website/
git commit -m "Add promotional website"
git push origin main
```

---

### Step 3: Create Static Site on Render

1. **Go to:** https://dashboard.render.com

2. **Click:** "New +" → **"Static Site"**

3. **Connect Repository:**
   - Repository: `seirrozyx11/sikadvoltz`

4. **Configure Settings:**
   - **Name:** `web-sikadvoltz`
   - **Branch:** `main`
   - **Root Directory:** `sv_website`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Auto-Deploy:** Yes

5. **Add Environment Variable:**
   - Click "Environment" or "Advanced"
   - **Key:** `VITE_API_URL`
   - **Value:** `https://sikadvoltz-backend.onrender.com`

6. **Click:** "Create Static Site"

---

## That's It! ✅

Your website will build in ~2-3 minutes and be live at:

**https://web-sikadvoltz.onrender.com**

---

## What to Test After Deployment

1. ✅ Website loads
2. ✅ All sections visible
3. ✅ Navigation works
4. ✅ Feedback form submits successfully (no CORS error)
5. ✅ Check backend logs for "Contact form submitted"

---

## If You Get CORS Error

Make sure Step 1 is complete:
- `ALLOWED_ORIGINS` in backend includes `https://web-sikadvoltz.onrender.com`
- Backend has redeployed after saving

---

## Cost

- Static Site: **FREE** (sleeps after 15 min inactivity)
- Your backend: **$7/month** (already running)
- **Total: Still $7/month** (no extra cost!)
