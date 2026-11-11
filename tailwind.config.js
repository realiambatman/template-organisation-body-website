/** @type {import('tailwindcss').Config} */

// Every colour below reads a CSS variable defined in index.css, so the whole
// site is rebranded by editing those variables (or switching data-theme).
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './index.tsx', './App.tsx', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: token('brand'),
          strong: token('brand-strong'),
          soft: token('brand-soft'),
          contrast: token('brand-contrast'),
        },
        ink: {
          DEFAULT: token('ink'),
          muted: token('ink-muted'),
          subtle: token('ink-subtle'),
        },
        line: token('line'),
        surface: token('surface'),
        paper: token('paper'),
      },
      fontFamily: {
        display: 'var(--font-display)',
        sans: 'var(--font-text)',
      },
      borderRadius: {
        control: 'var(--radius-control)',
        card: 'var(--radius-card)',
      },
      boxShadow: {
        float: '0 18px 48px -12px rgb(var(--ink) / 0.22), 0 2px 6px rgb(var(--ink) / 0.06)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(0.35em)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          from: { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        blink: {
          '0%, 80%, 100%': { opacity: '0.25' },
          '40%': { opacity: '1' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        pop: 'pop 0.18s ease-out both',
        blink: 'blink 1.2s infinite both',
      },
    },
  },
  plugins: [],
};
