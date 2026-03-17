/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ===== EGECREW DESIGN SYSTEM =====
      // These tokens can be customized per-site via CSS variables
      colors: {
        // Primary colors (customizable via --primary CSS var)
        primary: {
          DEFAULT: 'var(--primary, #667eea)',
          light: 'var(--primary-light, #818cf8)',
          dark: 'var(--primary-dark, #5b21b6)',
        },
        // Secondary accent
        accent: {
          DEFAULT: 'var(--accent, #f093fb)',
          light: 'var(--accent-light, #f5d0fe)',
        },
        // Brand colors (for specific industry themes)
        brand: {
          blue: 'var(--brand-blue, #1a365d)',
          gold: 'var(--brand-gold, #d4af37)',
        },
        // Background colors
        background: {
          light: 'var(--bg-light, #f8fafc)',
          DEFAULT: 'var(--bg, #ffffff)',
          dark: 'var(--bg-dark, #1e293b)',
        },
        // Text colors
        foreground: {
          DEFAULT: 'var(--text, #1e293b)',
          muted: 'var(--text-muted, #64748b)',
          light: 'var(--text-light, #94a3b8)',
        },
        // Border colors
        border: 'var(--border, #e2e8f0)',
        // Success/Error states
        success: 'var(--success, #22c55e)',
        error: 'var(--error, #ef4444)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['var(--font-display, Inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        'section': 'var(--section-spacing, 5rem)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.12)',
        'gold': '0 20px 25px -5px rgba(212, 175, 53, 0.1), 0 10px 10px -5px rgba(212, 175, 53, 0.04)',
        'blue': '0 20px 40px -5px rgba(26, 54, 93, 0.15)',
      },
      // Animation tokens
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'slide-in-left': 'slideInLeft 0.8s ease forwards',
        'slide-in-right': 'slideInRight 0.8s ease forwards',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // Screen breakpoints including ultra-wide
      screens: {
        'xs': '475px',
        // sm, md, lg, xl are default
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
