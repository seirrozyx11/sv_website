# 🚀 SIKADVOLTZ Website - Deployment Guide

Complete guide to deploy your website to production.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All placeholder images replaced with actual photos
- [ ] Team information updated
- [ ] Download links are correct
- [ ] All navigation links work
- [ ] Feedback form tested
- [ ] Website tested on multiple browsers
- [ ] Mobile responsiveness verified
- [ ] Build succeeds locally: `npm run build`
- [ ] No console errors
- [ ] Content proofread

---

## 🎯 Recommended: Vercel (Free & Easiest)

### Why Vercel?
✅ Free hosting  
✅ Automatic HTTPS  
✅ Global CDN  
✅ Easy custom domains  
✅ Zero configuration  
✅ Perfect for React/Vite

### Steps:

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Answer prompts:**
   - Set up and deploy? **Y**
   - Which scope? *Choose your account*
   - Link to existing project? **N**
   - Project name? `sikadvoltz-website`
   - Directory? `./` (press Enter)
   - Override settings? **N**

5. **Your site is live!** 🎉

6. **Deploy to production:**
```bash
vercel --prod
```

**Result:** `https://sikadvoltz-website.vercel.app`

### Add Custom Domain (Optional)
1. Go to Vercel dashboard
2. Click your project → Settings → Domains
3. Add your domain (e.g., `sikadvoltz.com`)
4. Follow DNS instructions

---

## 🌐 Option 2: Netlify

### Why Netlify?
✅ Free hosting  
✅ Drag & drop deployment  
✅ Form handling built-in  
✅ Easy rollbacks  

### Method A: Drag & Drop (Easiest)

1. Build your site:
```bash
npm run build
```

2. Go to [netlify.com](https://www.netlify.com/)
3. Sign up/Login
4. Drag the `dist` folder to Netlify
5. Done! 🎉

### Method B: CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login**
```bash
netlify login
```

3. **Initialize**
```bash
netlify init
```

4. **Deploy**
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Result:** `https://sikadvoltz.netlify.app`

---

## 📄 Option 3: GitHub Pages

### Why GitHub Pages?
✅ Free for public repos  
✅ Easy with GitHub integration  
✅ `yourusername.github.io/sikadvoltz`

### Steps:

1. **Create GitHub repository**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/sikadvoltz.git
git push -u origin main
```

2. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

3. **Update package.json**
Add these lines:
```json
{
  "homepage": "https://yourusername.github.io/sikadvoltz",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Update vite.config.js**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/sikadvoltz/' // Add this line
})
```

5. **Deploy**
```bash
npm run deploy
```

6. **Enable GitHub Pages**
   - Go to repository settings
   - Pages → Source → Select `gh-pages` branch
   - Save

**Result:** `https://yourusername.github.io/sikadvoltz`

---

## 🔥 Option 4: Firebase Hosting

### Why Firebase?
✅ Google's infrastructure  
✅ Fast global CDN  
✅ Easy to integrate with Firebase services  

### Steps:

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login**
```bash
firebase login
```

3. **Initialize**
```bash
firebase init hosting
```

Select:
- Use existing project or create new
- Public directory: `dist`
- Configure as SPA: **Yes**
- Setup automatic builds: **No**

4. **Build and Deploy**
```bash
npm run build
firebase deploy
```

**Result:** `https://your-project.web.app`

---

## 🌍 Option 5: Render

### Why Render?
✅ Free static site hosting  
✅ Auto-deploy from Git  
✅ Custom domains  

### Steps:

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. New → Static Site
4. Connect your repository
5. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Click "Create Static Site"

**Result:** `https://sikadvoltz.onrender.com`

---

## 📊 Comparison Table

| Platform | Cost | Speed | Ease | Custom Domain | SSL |
|----------|------|-------|------|---------------|-----|
| **Vercel** | Free | ⚡⚡⚡ | 🟢 Easy | ✅ Free | ✅ Auto |
| **Netlify** | Free | ⚡⚡⚡ | 🟢 Easy | ✅ Free | ✅ Auto |
| **GitHub Pages** | Free | ⚡⚡ | 🟡 Medium | ✅ Free | ✅ Auto |
| **Firebase** | Free | ⚡⚡⚡ | 🟡 Medium | ✅ Paid | ✅ Auto |
| **Render** | Free | ⚡⚡ | 🟢 Easy | ✅ Free | ✅ Auto |

**Recommendation:** Start with **Vercel** or **Netlify** for easiest setup.

---

## 🔧 Post-Deployment Tasks

### 1. Test Your Live Site

- [ ] Open in different browsers
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify QR code works
- [ ] Test form submission
- [ ] Check loading speed
- [ ] Verify images load

### 2. Add Analytics (Optional)

**Google Analytics:**

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. SEO Optimization

Update `index.html` meta tags:

```html
<meta name="description" content="SIKADVOLTZ - Revolutionary fitness tracking meets sustainable energy generation. Download our app and start pedaling your way to fitness and power." />
<meta name="keywords" content="fitness app, pedal power, sustainable energy, IoT, cycling tracker, SIKADVOLTZ" />
<meta property="og:title" content="SIKADVOLTZ - Pedal Your Way to Fitness & Power" />
<meta property="og:description" content="Revolutionary fitness tracking meets sustainable energy generation" />
<meta property="og:image" content="https://your-domain.com/og-image.jpg" />
<meta property="og:url" content="https://your-domain.com" />
<meta name="twitter:card" content="summary_large_image" />
```

### 4. Add Favicon

1. Create favicon at [favicon.io](https://favicon.io/)
2. Place in `public/` folder
3. Update `index.html`:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

---

## 🎯 Update & Redeploy

Whenever you make changes:

**Vercel:**
```bash
git add .
git commit -m "Update content"
git push
# Auto-deploys!
```

**Netlify:**
```bash
npm run build
netlify deploy --prod --dir=dist
```

**GitHub Pages:**
```bash
npm run deploy
```

**Firebase:**
```bash
npm run build
firebase deploy
```

---

## 🔒 Custom Domain Setup

### Vercel
1. Dashboard → Project → Settings → Domains
2. Add domain: `sikadvoltz.com`
3. Update DNS:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

### Netlify
1. Dashboard → Site → Domain settings
2. Add custom domain
3. Follow DNS instructions

### GitHub Pages
1. Settings → Pages → Custom domain
2. Add: `sikadvoltz.com`
3. Update DNS:
   - Type: A
   - Name: @
   - Value: 185.199.108.153 (and other IPs)

---

## 📈 Monitor Performance

### Check Website Speed

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Target Scores:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist .vite
npm install
npm run build
```

### 404 Errors on Routes
For SPAs, configure redirects:

**Netlify** (`public/_redirects`):
```
/*    /index.html   200
```

**Vercel** (automatic for React)

### Images Not Loading
- Check image paths (use absolute: `/assets/...`)
- Verify images are in `public/` or imported correctly
- Check image file names (case-sensitive)

### Slow Loading
- Compress images (<500KB each)
- Use WebP format
- Enable lazy loading
- Check bundle size: `npm run build`

---

## ✅ Success!

Your SIKADVOLTZ website is now live and accessible to the world! 🎉

### Share Your Site:
- 📧 Email professors and classmates
- 📱 Share on social media
- 🎓 Submit to academic platforms
- 💼 Add to your portfolio

### Track Success:
- Visitor count
- Download conversions
- Feedback submissions
- Average session time

---

**Need help?** Check the main README.md or contact your team!

**Good luck with your deployment! 🚀**
