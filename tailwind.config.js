/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redefining 'sage' to be 'Brown/Earth' tones to update the theme globally
        sage: {
          50: '#FAF7F2',  // Light Linen
          100: '#F2ECE4', // Soft Parchment
          200: '#E6D5C3', // Muted Tan
          300: '#D4BAA1', // Sandstone
          400: '#B08968', // Medium Warm Brown
          500: '#9C6644', // Rich Terracotta Brown
          600: '#7F5539', // Coffee Brown (Main Primary)
          700: '#6D4C41', // Deep Espresso
          800: '#4E342E', // Dark Chocolate
          900: '#3E2723', // Black Coffee
        },
        gold: {
          400: '#C5A059', // Antique Gold
          500: '#B48A32', // Rich Gold
        }
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}