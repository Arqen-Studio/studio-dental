/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Medical green. brand carries dark text; brandDeep carries light text.
        brand: '#5FB979',
        brandDeep: '#256B3C',
        brandPale: '#C6E6C4',
        creamBrand: '#EEF6EC',
        ink: '#123420',
        ink2: '#255138',
        muted: '#4F6557',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Bricolage Grotesque', 'Archivo', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 2px rgba(18, 52, 32, 0.06)',
        'soft-md': '0 10px 30px -12px rgba(18, 52, 32, 0.18)',
        'soft-lg': '0 30px 60px -20px rgba(18, 52, 32, 0.25)',
        brand: '0 20px 40px -18px rgba(37, 107, 60, 0.55)',
      },
      borderRadius: { sm: '10px', md: '16px', lg: '24px', xl: '32px' },
    },
  },
  plugins: [],
}
