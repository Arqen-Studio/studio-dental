/** @type {import('tailwindcss').Config} */
// Colours, radii and shadows point at the design tokens in src/styles/tokens.css.
// brand is Evergreen and carries on-brand (white) text; see docs/brand/.
const tokens = [
  'surface', 'surface-raised', 'surface-sunken', 'line', 'line-strong',
  'ink', 'ink-muted', 'brand', 'brand-hover', 'on-brand', 'brand-500', 'brand-soft',
  'accent', 'accent-fill', 'success', 'warning', 'warning-soft', 'error', 'error-soft',
  'info', 'info-soft', 'focus', 'scrim',
  'raw-ink', 'raw-evergreen', 'raw-sage', 'raw-mist', 'raw-porcelain', 'raw-champagne',
]

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: Object.fromEntries(tokens.map((name) => [name, `var(--${name})`])),
      fontFamily: {
        sans: 'var(--font-sans)',
        heading: 'var(--font-display)',
      },
      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
        3: 'var(--shadow-3)',
      },
      borderRadius: { sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)', full: 'var(--radius-pill)' },
    },
  },
  plugins: [],
}
