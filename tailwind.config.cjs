/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Medical green. brand carries dark text; brandDeep carries light text.
        brand: '#8FB48A',
        brandDeep: '#3F6F4B',
        brandPale: '#D6E2CF',
        creamBrand: '#F4F7F2',
        ink: '#1C3B25',
        ink2: '#2F5740',
        muted: '#55685A',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Bricolage Grotesque', 'Archivo', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 2px rgba(28, 59, 37, 0.06)',
        'soft-md': '0 10px 30px -12px rgba(28, 59, 37, 0.18)',
        'soft-lg': '0 30px 60px -20px rgba(28, 59, 37, 0.25)',
        brand: '0 20px 40px -18px rgba(63, 111, 75, 0.55)',
      },
      borderRadius: { sm: '10px', md: '16px', lg: '24px', xl: '32px' },
    },
  },
  plugins: [],
}
