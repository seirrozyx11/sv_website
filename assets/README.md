# SIKADVOLTZ Assets Directory

## 📁 Required Assets

Place your project assets in this directory to complete the website.

### Images Needed:

#### 1. **Prototype Photos** (`/assets/images/prototype/`)
- `bike-full-setup.jpg` - Complete bike with charging station
- `bike-side-view.jpg` - Side view showing ESP32 and sensors
- `esp32-module.jpg` - Close-up of ESP32 microcontroller
- `dynamo-generator.jpg` - Power generation unit
- `usb-charging-port.jpg` - USB charging port
- `sensors-detail.jpg` - Sensors close-up

#### 2. **App Screenshots** (`/assets/images/app/`)
- `dashboard.png` - Main dashboard with live metrics
- `activity-history.png` - Past workout sessions
- `device-pairing.png` - BLE connection screen
- `achievements.png` - Badges and goals
- `profile.png` - User profile screen
- `settings.png` - App settings

#### 3. **Demo Video** (`/assets/videos/`)
- `demo.mp4` - 30-60 second demonstration video
  - Show device pairing
  - Live metrics updating
  - Phone charging in real-time
  - Achievement notification

#### 4. **Logo & Branding** (`/assets/images/branding/`)
- `logo.svg` - SIKADVOLTZ logo (SVG format)
- `logo.png` - SIKADVOLTZ logo (PNG format)
- `favicon.ico` - Website favicon

### How to Add Images:

1. Take high-quality photos of your prototype
2. Take screenshots from your mobile app
3. Resize images appropriately:
   - Prototype photos: 1920x1080px
   - App screenshots: 1080x1920px (portrait)
   - Logo: 512x512px (transparent background)
4. Save in the appropriate folder
5. Update image imports in the components

### Placeholder Instructions:

Currently, the website uses placeholder elements. To replace them:

**In `Hero.jsx`:**
```jsx
// Replace:
<div className="hero-image-placeholder">...</div>

// With:
<img src="/assets/images/prototype/bike-full-setup.jpg" alt="SIKADVOLTZ Bike" />
```

**In `Prototype.jsx`:**
```jsx
// Replace image placeholders with actual images
<img src="/assets/images/prototype/esp32-module.jpg" alt="ESP32 Module" />
```

**In `Team.jsx`:**
```jsx
// Add team member photos
image: '/assets/images/team/member1.jpg'
```

## 📦 File Structure

```
assets/
├── images/
│   ├── prototype/
│   │   ├── bike-full-setup.jpg
│   │   ├── bike-side-view.jpg
│   │   ├── esp32-module.jpg
│   │   ├── dynamo-generator.jpg
│   │   └── usb-charging-port.jpg
│   ├── app/
│   │   ├── dashboard.png
│   │   ├── activity-history.png
│   │   ├── device-pairing.png
│   │   └── achievements.png
│   ├── branding/
│   │   ├── logo.svg
│   │   ├── logo.png
│   │   └── favicon.ico
│   └── team/
│       ├── member1.jpg
│       ├── member2.jpg
│       └── member3.jpg
└── videos/
    └── demo.mp4
```

## 🎨 Image Guidelines

- **Format**: JPG for photos, PNG for screenshots, SVG for logos
- **Quality**: High resolution but optimized for web (<500KB per image)
- **Aspect Ratios**: 
  - Photos: 16:9
  - App Screenshots: 9:16
  - Team Photos: 1:1 (square)
- **Background**: Clean, professional, good lighting
