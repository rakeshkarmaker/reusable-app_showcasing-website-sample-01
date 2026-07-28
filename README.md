# Mercy — GSAP-Powered App Showcase

A modern, beautiful landing page that showcases a faith-based mobile app with smooth GSAP scrolling animations. The phone animates dynamically as users scroll, revealing different app screens while the text content changes in sync.

## 🎨 Features

### GSAP Scroll Animations
- **Phone Movement**: The mobile device moves along a smooth 3D path with rotation and perspective as users scroll through the showcase section
- **Screen Transitions**: Each of the 4 app screens (Splash, Devotion, Ask, Community) animates in and out smoothly with scale and opacity changes
- **Text Synchronization**: Left-side copy updates in sync with phone screen transitions, guided by progress indicators
- **ScrollTrigger Integration**: Uses GSAP ScrollTrigger for performance-optimized scroll-driven animations with scrubbing

### Design System
- **Color Palette**: Sage green, cream, gold, and ink for a calming, faith-focused aesthetic
- **Typography**: Combination of serif (Playfair Display), script (Great Vibes), and sans-serif (Inter) fonts
- **Modern & Clean**: Minimalist design with ample whitespace, rounded corners, and soft shadows
- **Responsive Layout**: Mobile-first design that adapts beautifully to all screen sizes

### Page Sections
1. **Navigation**: Fixed header with smooth backdrop blur and section links
2. **Hero**: Eye-catching headline with mobile phone mockup and CTA buttons
3. **Showcase**: Main scroll-driven section with animated phone and synced text panels
4. **Features**: Three feature cards highlighting key app benefits
5. **CTA**: Full-width conversion section with App Store and Google Play buttons
6. **Footer**: Branding and copyright

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open browser
# Visit http://localhost:3000
```

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page with GSAP animations
│   └── globals.css         # Theme variables and utilities
├── components/
│   ├── phone-frame.tsx     # iPhone frame component
│   └── phone-screens.tsx   # Four app screen components
└── public/                 # Static assets
```

## 🎬 Animation Details

### Phone Path Animation
The phone follows a predefined 3D path with these waypoints:
- Position 0: `xPercent: 0, yPercent: 0, rotateZ: -2, rotateY: 6`
- Position 1: `xPercent: -70, yPercent: -4, rotateZ: 3, rotateY: -6`
- Position 2: `xPercent: 40, yPercent: 2, rotateZ: -4, rotateY: 8`
- Position 3: `xPercent: -20, yPercent: -2, rotateZ: 2, rotateY: -4`

### Screen Transitions
- **Outgoing**: Fade out, drift upward, slight scale down
- **Incoming**: Fade in from below, scale up to full size
- **Duration**: 0.5s for smooth, elegant transitions
- **Easing**: `power2.out` for incoming, `power2.in` for outgoing

### Text Panel Updates
- Position indicators show progress through the four sections
- Eyebrow labels identify each section (Welcome, Daily Devotion, Ask Mercy, Community)
- Body copy updates with descriptions and benefits
- All changes synchronized with phone animation using timeline callbacks

## 🎨 Customization

### Colors
Edit color variables in `app/globals.css`:
```css
:root {
  --sage: oklch(0.68 0.06 155);
  --cream: oklch(0.965 0.012 85);
  --gold: oklch(0.75 0.12 60);
  --ink: oklch(0.22 0.02 80);
}
```

### Fonts
Fonts are loaded from Google Fonts in `app/layout.tsx`:
- `Great Vibes` — Script font for branding
- `Playfair Display` — Serif for headings
- `Inter` — Sans-serif for body text

### Animation Timing
Adjust scroll animation speed in `app/page.tsx`:
```javascript
scrollTrigger: {
  scrub: 0.8,  // Change to higher for slower/smoother animation
  end: () => `+=${(screens.length - 1) * 110}%`,  // Adjust scroll distance
}
```

## 📱 App Screens

### 1. Splash Screen
- App name and tagline
- Featured verse with decorative divider
- "Start Today" call-to-action button

### 2. Devotion Screen
- Morning greeting with time-of-day icon
- Bible verse card with gradient background
- Daily reflection and prayer
- Bottom navigation with tab indicators

### 3. Ask Screen
- Chat-style interface
- User message example ("I feel anxious")
- Verse response with guidance
- Message input field

### 4. Community Screen
- Prayer request showcase
- User avatars and prayer count
- "Pray" and "Prayed" toggle buttons
- Community navigation

## 🔧 Technologies

- **Framework**: Next.js 16 (App Router)
- **Animations**: GSAP 3.15+ with ScrollTrigger plugin
- **Styling**: Tailwind CSS v4 with custom theme
- **Components**: Custom React components
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Great Vibes, Inter)

## 📈 Performance

- Optimized GSAP animations with GPU acceleration
- Lazy-loaded fonts
- Responsive images with proper sizing
- ScrollTrigger reduces unnecessary repaints
- Production build minification

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

Created for demonstration purposes.

## 🎯 Next Steps

To extend this project:

1. **Add More Screens**: Create additional `Screen*` components for more app features
2. **Interactive Elements**: Add click handlers to buttons and links
3. **API Integration**: Connect to backend for testimonials, prayer requests, or devotional content
4. **Analytics**: Add event tracking for CTA clicks and scroll depth
5. **Localization**: Support multiple languages with i18n
6. **Dark Mode**: Implement theme switching for dark mode support

---

Built with ❤️
