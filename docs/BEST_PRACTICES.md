# EGECREW Website Template - Best Practices

## Quick Start

```bash
# Clone the template
cp -r website-template website-[business-name]

# Install dependencies
cd website-[business-name]
npm install

# Start development
npm run dev

# Build for production
npm run build
```

## 1. Customization Guide

### Step 1: Update Business Data

Edit `src/App.jsx` and modify the `BUSINESS` object:

```javascript
const BUSINESS = {
  name: 'Restaurant Name',           // Business name
  tagline: 'Your tagline here',      // Short description
  category: 'Restaurant',            // Business category
  emoji: '🍽️',                       // Category icon
  
  contact: {
    phone: '+90 252 123 45 67',
    email: 'info@business.com',
    address: 'Full address here',
    hours: 'Mon-Sun: 09:00 - 22:00',
  },
  
  rating: {
    score: 4.8,
    count: 150,
  },
}
```

### Step 2: Customize Colors

Edit `src/index.css` root variables:

```css
:root {
  /* Restaurant Theme */
  --primary: #d4af37;        /* Gold */
  --primary-light: #f6e27a;
  --primary-dark: #c4a35a;
  
  /* Or Salon Theme */
  --primary: #9b59b6;        /* Purple */
  --primary-light: #a980c4;
  --primary-dark: #8e44ad;
}
```

### Step 3: Add Real Images

Replace placeholder URLs in `GALLERY` array with actual images:

```javascript
const GALLERY = [
  { src: '/images/exterior.jpg', title: 'Our Building' },
  { src: '/images/interior.jpg', title: 'Inside View' },
  // ... more images
]
```

---

## 2. Responsive Design Rules

### Container System

The template uses a responsive container system:

| Breakpoint | Max Width | Use Case |
|------------|-----------|----------|
| Default | 100% | Mobile |
| 768px+ | 768px | Tablet |
| 1024px+ | 1024px | Laptop |
| 1280px+ | 1200px | Desktop |
| 1920px+ | 1600px | Large Desktop |
| 2560px+ | 1800px | 4K/Ultra-wide |

### Breakpoint Guidelines

```css
/* Mobile First - No media query needed */
.element { padding: 1rem; }

/* Tablet */
@media (min-width: 768px) {
  .element { padding: 1.5rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  .element { padding: 2rem; }
}

/* Large Desktop */
@media (min-width: 1920px) {
  .element { padding: 3rem; }
}
```

### Image Optimization

Always use responsive images:

```jsx
<img 
  src="image.jpg"
  srcSet="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  loading="lazy"
  alt="Descriptive alt text"
/>
```

---

## 3. Accessibility Checklist

### Color Contrast

- ✅ Text on background: minimum 4.5:1 ratio
- ✅ Large text (24px+): minimum 3:1 ratio
- ✅ Interactive elements: visible focus states

### Touch Targets

```css
/* Minimum 44x44px for all interactive elements */
button, a, [role="button"] {
  min-height: 44px;
  min-width: 44px;
}
```

### Form Labels

Always use proper labels, not just placeholders:

```jsx
<div>
  <label htmlFor="name" className="label">Name</label>
  <input id="name" type="text" className="input" placeholder="Enter your name" />
</div>
```

### Keyboard Navigation

- Tab order follows visual order
- Focus indicators visible
- Skip links for main content

---

## 4. Performance Best Practices

### Image Optimization

1. **Format**: Use WebP with JPEG fallback
2. **Sizing**: Never serve images larger than display size
3. **Compression**: Target 80% quality for photos
4. **Loading**: Use `loading="lazy"` for below-fold images

### Font Loading

```css
/* Use font-display: swap for faster text rendering */
@font-face {
  font-family: 'Inter';
  font-display: swap;
  src: url('/fonts/inter.woff2') format('woff2');
}
```

### Bundle Size

- React + ReactDOM: ~65KB gzipped
- Tailwind CSS: ~6KB gzipped (purged)
- **Target**: Under 100KB total

---

## 5. SEO Checklist

### Required Meta Tags

```html
<head>
  <title>Business Name | Bodrum</title>
  <meta name="description" content="Short description (150-160 chars)" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Business Name" />
  <meta property="og:description" content="Description" />
  <meta property="og:image" content="https://site.com/og-image.jpg" />
  <meta property="og:url" content="https://site.com/" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  
  <!-- Structured Data -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Business Name",
      "telephone": "+902521234567",
      "address": {...}
    }
  </script>
</head>
```

### URL Structure

- Use lowercase, hyphens for spaces
- Keep URLs short and descriptive
- Example: `business-name.egecrew.com`

---

## 6. Deployment Checklist

### Pre-Deploy

- [ ] All placeholder content replaced
- [ ] Real images added and optimized
- [ ] Contact info verified
- [ ] Phone links work (`tel:`)
- [ ] Form submission tested
- [ ] Mobile view tested
- [ ] Build passes: `npm run build`

### Vercel Deployment

```bash
# Deploy to Vercel
vercel --prod

# Or via Git integration (automatic)
git push origin main
```

### DNS Configuration

```
CNAME business-name.egecrew.com → cname.vercel-dns.com
```

---

## 7. Common Issues & Fixes

### Header Overflow on Large Screens

```css
header {
  max-width: 100vw;
  overflow-x: hidden;
}

header > div {
  max-width: min(80rem, calc(100vw - 3rem));
}
```

### Hero Text Contrast

```css
.hero-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.hero-title {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
```

### Gallery Images Inconsistent

```css
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;
}
```

### Mobile Navigation Overflow

```css
/* Hide desktop nav on mobile */
@media (max-width: 1023px) {
  .desktop-nav { display: none; }
  .mobile-nav { display: flex; }
}
```

---

## 8. File Structure

```
website-[name]/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── (business photos)
├── src/
│   ├── App.jsx          # Main component (customize here)
│   ├── index.css        # Design system & utilities
│   └── main.jsx         # Entry point (don't modify)
├── docs/
│   └── BEST_PRACTICES.md
├── index.html           # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 9. Component Reference

### Available CSS Classes

| Class | Description |
|-------|-------------|
| `.btn-primary` | Primary action button (filled) |
| `.btn-secondary` | Secondary action button (outlined) |
| `.card` | Card container with shadow |
| `.section` | Section wrapper with padding |
| `.section-header` | Centered section title area |
| `.input` | Form input styling |
| `.label` | Form label styling |
| `.badge` | Small colored pill badge |
| `.container` | Responsive centered container |
| `.divider-decorated` | Decorative divider with symbol |

### Tailwind Extensions

| Class | Effect |
|-------|--------|
| `text-primary` | Primary brand color |
| `bg-background-light` | Light background color |
| `text-foreground-muted` | Muted text color |
| `shadow-card` | Standard card shadow |
| `shadow-card-hover` | Elevated card shadow |

---

## 10. Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0.0 | 2026-03-17 | Complete rewrite with Tailwind, responsive fixes |
| 1.0.0 | 2026-03-16 | Initial template |

---

**Questions?** Check the main EGECREW docs or ask in the project chat.
