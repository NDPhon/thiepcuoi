/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e3ebe3',
          200: '#c5d8c5',
          300: '#9dbf9d',
          400: '#76a076',
          500: '#558355',
          600: '#416641',
          700: '#355135',
          800: '#2d412d',
          900: '#263626',
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