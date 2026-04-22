/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        skyBrand: '#87CEFA',
        creamBrand: '#FBFBFA',
        ink: '#0F1B24',
        ink2: '#223440',
        muted: '#5F6057',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Bricolage Grotesque', 'Archivo', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 2px rgba(15, 27, 36, 0.06)',
        'soft-md': '0 10px 30px -12px rgba(15, 27, 36, 0.18)',
        'soft-lg': '0 30px 60px -20px rgba(15, 27, 36, 0.25)',
        sky: '0 20px 40px -18px rgba(74, 166, 223, 0.55)',
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
    },
  },
  plugins: [],
}

