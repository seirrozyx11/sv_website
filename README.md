# 🚴⚡ SIKADVOLTZ Website

Professional promotional website for the SIKADVOLTZ capstone project - combining fitness tracking with pedal-powered charging technology.

![SIKADVOLTZ](https://img.shields.io/badge/SIKADVOLTZ-Fitness%20%2B%20Power-00B4D8?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Sleek, professional design with smooth animations
- **Interactive Components** - QR code generation, feedback forms, image galleries
- **SEO Optimized** - Meta tags, semantic HTML, fast loading times
- **Performance** - Optimized for speed with Vite and React
- **Accessibility** - WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18.2 + Vite 5.0
- **Styling**: CSS3 with CSS Variables
- **Icons**: React Icons
- **QR Code**: react-qr-code
- **Animations**: Framer Motion
- **Deployment**: Vercel / Netlify / GitHub Pages ready

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** (for version control)

Check versions:
```bash
node --version
npm --version
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The website will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

Optimized files will be in the `dist/` folder

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
sv_website/
├── public/                    # Static files
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProblemSolution.jsx
│   │   ├── Features.jsx
│   │   ├── TechStack.jsx
│   │   ├── Prototype.jsx
│   │   ├── Download.jsx
│   │   ├── Feedback.jsx
│   │   ├── Team.jsx
│   │   └── Footer.jsx
│   ├── App.jsx               # Main app component
│   ├── App.css
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── assets/                   # Images, videos, logos
├── index.html                # HTML template
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization Guide

### Update Content

1. **Project Information** - Edit in `WEBSITE-PROMOTION-PLAN.MD`
2. **Hero Section** - `src/components/Hero.jsx`
3. **Features** - `src/components/Features.jsx`
4. **Team Members** - `src/components/Team.jsx`

### Add Images

1. Place images in `assets/images/` folder
2. Import in component: `import img from '../assets/images/yourimage.jpg'`
3. Use in JSX: `<img src={img} alt="Description" />`

See `assets/README.md` for detailed asset guidelines.

### Change Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #00B4D8;    /* Primary blue */
  --color-secondary: #90E0EF;  /* Light blue */
  --color-accent: #F77F00;     /* Orange */
  --color-dark: #03045E;       /* Dark blue */
}
```

### Update Download Links

In `src/components/Download.jsx`:

```jsx
const downloadUrl = 'https://your-actual-download-link.com'
```

### Configure Feedback Form

The feedback form currently logs to console. To connect to a backend:

**Option 1: Firebase**
```jsx
import { getFirestore, addDoc, collection } from 'firebase/firestore'

const handleSubmit = async (e) => {
  e.preventDefault()
  const db = getFirestore()
  await addDoc(collection(db, 'feedback'), formData)
}
```

**Option 2: Your Backend API**
```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('https://your-backend-api.com/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/sikadvoltz",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize:
```bash
firebase init hosting
```

3. Deploy:
```bash
npm run build
firebase deploy
```

## 📊 Performance Optimization

The website is already optimized with:

- ✅ Code splitting with Vite
- ✅ Lazy loading for images
- ✅ CSS minification
- ✅ Tree-shaking for unused code
- ✅ Gzip compression ready

### Further Optimizations

1. **Compress Images**:
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target: < 500KB per image

2. **Add Image Optimization**:
```bash
npm install vite-plugin-imagemin --save-dev
```

3. **Enable PWA** (Optional):
```bash
npm install vite-plugin-pwa --save-dev
```

## 🧪 Testing

### Run Lint
```bash
npm run lint
```

### Build Test
```bash
npm run build
npm run preview
```

### Cross-Browser Testing
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers

## 📝 Checklist Before Launch

- [ ] Replace all placeholder images with actual photos
- [ ] Update team member information and photos
- [ ] Add real download links for Android/iOS
- [ ] Configure feedback form backend
- [ ] Test all links and navigation
- [ ] Verify responsive design on all devices
- [ ] Check loading speed (< 3 seconds)
- [ ] Validate SEO meta tags
- [ ] Test QR code with actual URL
- [ ] Enable analytics (Google Analytics, etc.)
- [ ] Add custom domain (optional)
- [ ] Test on multiple browsers
- [ ] Proofread all content
- [ ] Setup HTTPS certificate

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues
```bash
# Ensure build succeeds locally first
npm run build

# Check build output in dist/ folder
```

## 📧 Support & Contact

- **Project Lead**: Your Name
- **Email**: your.email@example.com
- **GitHub**: https://github.com/yourusername/sikadvoltz
- **University**: Your University Name

## 📄 License

This project is part of an academic capstone project. All rights reserved.

## 🎯 Project Goals

This website aims to:

1. ✅ Showcase the SIKADVOLTZ project professionally
2. ✅ Provide easy app download access
3. ✅ Collect user feedback (target: 100+ comments)
4. ✅ Demonstrate technical capabilities
5. ✅ Serve as competition-ready presentation material

## 🚀 Next Steps

1. **Add Your Content**
   - Replace placeholders with actual images
   - Update team information
   - Add real download links

2. **Test Everything**
   - All links work
   - Forms submit correctly
   - Images load properly
   - Responsive on all devices

3. **Deploy**
   - Choose hosting platform
   - Configure custom domain (optional)
   - Enable analytics

4. **Promote**
   - Share on social media
   - Submit to academic platforms
   - Email professors/advisors
   - Post in relevant communities

## 🏆 Success Metrics

Track these metrics after launch:

- **Traffic**: 100+ unique visitors in first month
- **Engagement**: Average session > 2 minutes
- **Conversions**: 50+ app downloads
- **Feedback**: 100+ comments collected
- **Performance**: Lighthouse score > 90

---

**Made with ❤️ for sustainability and fitness**

*SIKADVOLTZ - Pedal Your Way to Fitness & Power*
