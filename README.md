# EGECREW Website Template v2.0

**Bulletproof Vite + React template for Bodrum business websites.**

## Features

- ✅ **Responsive Design** - Works on mobile (375px) to 4K (2560px+)
- ✅ **Tailwind CSS** - Utility-first styling with custom design tokens
- ✅ **Accessibility** - WCAG AA compliant, keyboard navigable
- ✅ **Performance** - Optimized build, lazy loading, minimal bundle
- ✅ **Customizable** - CSS variables for easy theming
- ✅ **SEO Ready** - Proper meta tags, structured data support

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS 3.4 + custom components
- **Build**: Rolldown (via Vite)
- **Deployment**: Vercel

## Quick Start

```bash
# Copy template
cp -r website-template website-my-business

# Install dependencies  
cd website-my-business
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Customization

### 1. Update Business Info

Edit `src/App.jsx` and modify the `BUSINESS` object with your business details.

### 2. Customize Colors

Edit `:root` variables in `src/index.css`:

```css
:root {
  --primary: #667eea;       /* Your primary color */
  --primary-dark: #5b21b6;  /* Darker shade */
}
```

### 3. Add Images

Replace placeholder URLs in the `GALLERY` array with your actual images.

## Design System

### Color Tokens

| Token | Default | Usage |
|-------|---------|-------|
| `--primary` | `#667eea` | CTAs, accents |
| `--primary-dark` | `#5b21b6` | Hover states |
| `--bg-light` | `#f8fafc` | Section backgrounds |
| `--text` | `#1e293b` | Body text |
| `--text-muted` | `#64748b` | Secondary text |

### Responsive Breakpoints

| Breakpoint | Min Width | Container |
|------------|-----------|-----------|
| Default | 0px | 100% |
| md | 768px | 768px |
| lg | 1024px | 1024px |
| xl | 1280px | 1200px |
| 3xl | 1920px | 1600px |
| 4xl | 2560px | 1800px |

### Components

- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary outlined button  
- `.card` - Card with shadow and hover effect
- `.section` - Section with responsive padding
- `.input` - Styled form input
- `.badge` - Small colored pill

## Project Structure

```
├── src/
│   ├── App.jsx        # Main component (customize here)
│   ├── index.css      # Design system
│   └── main.jsx       # Entry point
├── docs/
│   └── BEST_PRACTICES.md
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Manual

```bash
npm run build
# Upload dist/ folder to any static host
```

## Documentation

See [docs/BEST_PRACTICES.md](docs/BEST_PRACTICES.md) for detailed guidelines on:

- Responsive design rules
- Accessibility checklist
- Performance optimization
- SEO configuration
- Common fixes

## License

MIT - EGECREW 2026
