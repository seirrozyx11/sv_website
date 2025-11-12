# 🚀 Cloudflare Pages Deployment Guide for SIKADVOLTZ Website

## 📋 Prerequisites

1. ✅ Cloudflare account (free tier works!)
2. ✅ GitHub repository with your code
3. ✅ Domain name (optional, Cloudflare provides `*.pages.dev` subdomain)

---

## 🎯 Deployment Options

### **Option 1: Deploy via Cloudflare Dashboard (Recommended)** 👈

This is the easiest method for first-time deployment.

#### Step 1: Push Code to GitHub
```bash
cd d:\codes\sikadvoltz\sv_website
git add .
git commit -m "Prepare for Cloudflare Pages deployment"
git push origin main
```

#### Step 2: Connect to Cloudflare Pages

1. Go to **Cloudflare Dashboard**: https://dash.cloudflare.com/
2. Click **Workers & Pages** in the left sidebar
3. Click **Create application** → **Pages** → **Connect to Git**
4. Select your GitHub repository: `seirrozyx11/sv_website`
5. Click **Begin setup**

#### Step 3: Configure Build Settings

Fill in these exact values:

| Setting | Value |
|---------|-------|
| **Project name** | `sikadvoltz-website` |
| **Production branch** | `main` |
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | (leave empty) |
| **Node version** | `18` |

#### Step 4: Add Environment Variables

Click **Add variable** and add:

| Variable Name | Value |
|---------------|-------|
| `NODE_ENV` | `production` |
| `VITE_API_URL` | `https://sikadvoltz-backend.onrender.com` |

#### Step 5: Deploy

1. Click **Save and Deploy**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://sikadvoltz-website.pages.dev`

---

### **Option 2: Deploy via Wrangler CLI** 🛠️

For advanced users who prefer command-line deployment.

#### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

#### Step 2: Login to Cloudflare

```bash
wrangler login
```

This will open a browser window to authenticate.

#### Step 3: Build Your Site

```bash
cd d:\codes\sikadvoltz\sv_website
npm install
npm run build
```

#### Step 4: Deploy to Cloudflare Pages

```bash
wrangler pages deploy dist --project-name=sikadvoltz-website
```

First-time setup will ask:
- Create a new project? **Yes**
- Project name: **sikadvoltz-website**
- Production branch: **main**

---

## 🌐 Custom Domain Setup (Optional)

### If you own `sikadvoltz.com`:

1. In Cloudflare Pages dashboard, go to your project
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter: `sikadvoltz.com` and `www.sikadvoltz.com`
5. Cloudflare will automatically configure DNS

**DNS records will be created:**
```
CNAME  www  sikadvoltz-website.pages.dev
CNAME  @    sikadvoltz-website.pages.dev
```

---

## 🔧 Build Configuration Files

All necessary files have been created:

### ✅ **wrangler.toml** - Cloudflare configuration
```toml
name = "sikadvoltz-website"
pages_build_output_dir = "dist"
```

### ✅ **_headers** - Security & performance headers
- Sets security headers (X-Frame-Options, CSP)
- Configures caching for static assets
- Enables CORS if needed

### ✅ **_redirects** - SPA routing
- Routes all URLs to index.html (React Router support)
- Handles deep links for password reset

### ✅ **.cloudflare-pages.json** - Build settings
- Node version: 18
- Build command: `npm run build`
- Output directory: `dist`

---

## 🔍 Verify Build Locally

Before deploying, test your build:

```bash
# Build the site
npm run build

# Preview the built site
npm run preview
```

Visit http://localhost:4173 to verify everything works.

---

## 📊 Deployment Status

After deployment, you'll see:

```
✨ Success! Deployed to Cloudflare Pages!
🌍 Live URL: https://sikadvoltz-website.pages.dev
🔧 Dashboard: https://dash.cloudflare.com/pages/sikadvoltz-website
```

---

## 🚨 Troubleshooting

### Build Fails with "Command not found: vite"

**Fix:** Ensure `package.json` has the correct build script:
```json
"scripts": {
  "build": "vite build"
}
```

### Environment Variables Not Working

**Fix:** Check that all `VITE_*` variables are prefixed correctly:
- ✅ `VITE_API_URL`
- ❌ `API_URL` (won't work)

### 404 Errors on Page Refresh

**Fix:** Verify `_redirects` file is in the root with:
```
/*    /index.html   200
```

### Images Not Loading

**Fix:** Use correct public asset paths:
- ✅ `/assets/images/logo.png`
- ❌ `./assets/images/logo.png`

---

## 🔄 Continuous Deployment

Once connected, Cloudflare Pages will automatically:

✅ Deploy on every push to `main` branch  
✅ Create preview deployments for pull requests  
✅ Rebuild when you update environment variables  

**Trigger new deployment:**
```bash
git add .
git commit -m "Update website content"
git push origin main
```

Cloudflare will auto-deploy in 2-3 minutes!

---

## 📈 Post-Deployment Checklist

- [ ] Visit live URL and test all pages
- [ ] Test download button (QR code, direct link)
- [ ] Submit feedback form (check backend connection)
- [ ] Verify images load correctly
- [ ] Test on mobile devices
- [ ] Check browser console for errors
- [ ] Test deep links (password reset)
- [ ] Verify analytics (if configured)

---

## 🎨 Performance Optimization

Cloudflare Pages automatically provides:

✅ **Global CDN** - Content served from 200+ locations  
✅ **HTTP/3** - Faster page loads  
✅ **Brotli Compression** - Smaller file sizes  
✅ **Smart Caching** - Static assets cached at edge  
✅ **DDoS Protection** - Enterprise-grade security  
✅ **SSL/TLS** - Free HTTPS certificates  

**Your site will be FAST! 🚀**

---

## 💰 Pricing

**Free Tier Includes:**
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ 500 builds per month
- ✅ 1 concurrent build
- ✅ Free SSL certificates
- ✅ Custom domain support

**This is more than enough for SIKADVOLTZ!**

---

## 📚 Additional Resources

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy.html
- **React Router on Cloudflare**: https://reactrouter.com/en/main/guides/deployment#cloudflare-pages

---

## 🎉 Quick Start Summary

**Fastest way to deploy:**

1. Push code to GitHub: `git push origin main`
2. Go to: https://dash.cloudflare.com/
3. Create Pages project → Connect GitHub
4. Select repository: `sv_website`
5. Build command: `npm run build`
6. Output directory: `dist`
7. Add env var: `VITE_API_URL=https://sikadvoltz-backend.onrender.com`
8. Click **Deploy**
9. ✨ Done! Live in 2-3 minutes

**Your site will be at:** `https://sikadvoltz-website.pages.dev`

---

## 🔐 Security Notes

The following security headers are automatically set:

- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Privacy

**Your site is production-ready! 🛡️**
