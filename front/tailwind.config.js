/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.{html,ts}",
    "./libs/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B1B3D', // Güven veren lacivert
          DEFAULT: '#1E3A8A', // Derin mavi
          light: '#3B82F6', // Canlı mavi
          accent: '#F59E0B', // Enerjik sıcak turuncu/sarı
          accentLight: '#FBBF24',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          glass: 'rgba(255, 255, 255, 0.7)',
          darkGlass: 'rgba(11, 27, 61, 0.7)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
