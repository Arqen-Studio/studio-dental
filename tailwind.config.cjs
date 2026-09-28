/** @type {import('tailwindcss').Config} */
// Colours, radii, shadows and weights point at the design tokens in
// src/styles/tokens.css (see docs/brand/). The old colour names are kept and
// re-pointed at tokens, so the existing layouts pick up the brand unchanged.
const tokens = [
  'surface', 'surface-raised', 'surface-sunken', 'line', 'line-strong',
  'ink-muted', 'brand-hover', 'on-brand', 'brand-500', 'brand-soft',
  'accent', 'accent-fill', 'success', 'warning', 'warning-soft', 'error', 'error-soft',
  'info', 'info-soft', 'focus', 'scrim',
  'raw-ink', 'raw-evergreen', 'raw-sage', 'raw-mist', 'raw-porcelain', 'raw-champagne',
]

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...Object.fromEntries(tokens.map((name) => [name, `var(--${name})`])),
        // Evergreen; carries on-brand (white) text.
        brand: 'var(--brand)',
        brandDeep: 'var(--brand)',
        brandPale: 'var(--brand-soft)',
        brandBright: 'var(--brand-soft)',
        // Porcelain: used as light text on the hero video and Ink bands.
        creamBrand: 'var(--raw-porcelain)',
        ink: 'var(--ink)',
        ink2: 'var(--ink)',
        muted: 'var(--ink-muted)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        heading: 'var(--font-display)',
      },
      // Bricolage 500/600 and Archivo 400/500/600 only.
      fontWeight: { light: '400', bold: '600', extrabold: '600', black: '600' },
      // Cards are flat at rest; the larger shadows are for hover and overlays.
      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
        3: 'var(--shadow-3)',
        'soft-sm': 'var(--shadow-1)',
        'soft-md': 'var(--shadow-1)',
        'soft-lg': 'var(--shadow-2)',
        brand: 'var(--shadow-2)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius-sm)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-lg)',
        '2xl': 'var(--radius-md)',
        '3xl': 'var(--radius-lg)',
        full: 'var(--radius-pill)',
      },
    },
  },
  plugins: [],
}
