# 🚀 Simple Deploy - 3 Steps Only

## ✅ Your website is ALREADY configured!

Since you have `render.yaml`, Render will auto-detect everything.

---

## Step 1: Update Backend CORS (2 minutes)

Go to: https://dashboard.render.com → `sikadvoltz-backend` → Environment

Find: `ALLOWED_ORIGINS`

Update to include:
```
https://web-sikadvoltz.onrender.com
```

Full value should be:
```
http://localhost:8080,http://127.0.0.1:8080,capacitor://localhost,ionic://localhost,http://10.0.2.2:8080,https://web-sikadvoltz.onrender.com,http://localhost:3000
```

Save and wait for backend to redeploy.

---

## Step 2: Push to GitHub (1 minute)

```bash
cd d:\codes\sikadvoltz
git add .
git commit -m "Add website"
git push origin main
```

---

## Step 3: Deploy on Render (1 click!)

1. Go to: https://dashboard.render.com
2. Click: **"New +"** → **"Blueprint"**
3. Select: `seirrozyx11/sikadvoltz`
4. Click: **"Apply"**

**That's it!** Render will read `sv_website/render.yaml` and deploy automatically.

---

## Result

Your website will be live at:
**https://web-sikadvoltz.onrender.com**

Build takes ~2-3 minutes.

---

## If "Blueprint" doesn't work:

Use the manual method (still simple):

1. Dashboard → **"New +"** → **"Static Site"**
2. Connect: `seirrozyx11/sikadvoltz`
3. Render will **auto-detect** `render.yaml`
4. Click: **"Create Static Site"**

Done! ✅
