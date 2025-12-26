/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Overriding 'sage' with the new warm tones to update the entire app theme
        sage: {
          50: '#f9f6f2', // Very light cream
          100: '#f2e9e1', // Soft sand
          200: '#e5d4c5', // Muted tan
          300: '#d7c0ae', 
          400: '#C4A484', // Requested secondary color (Light Brown/Tan)
          500: '#cf9c75', 
          600: '#B87C4C', // Requested primary color (Terracotta/Bronze)
          700: '#a36a3e', // Deep bronze
          800: '#8c5b35', // Dark chocolate brown
          900: '#754c2c',
        },
        gold: {
          400: '#d4af37',
          500: '#c5a028',
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