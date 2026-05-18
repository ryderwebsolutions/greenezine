/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft eco greens and sage palette for Greenezine
        'sage': {
          50: '#f7faf8',
          100: '#ecf3f0',
          200: '#d9e8e3',
          300: '#c5dcd6',
          400: '#a8cbc0',
          500: '#8bb9a9',
          600: '#6fa892',
          700: '#5a9478',
          800: '#477d63',
          900: '#336b50',
        },
        'eco': {
          50: '#f9fdfa',
          100: '#eff7f2',
          200: '#e0ede4',
          300: '#c9e1d1',
          400: '#a8d4b3',
          500: '#7dc694',
          600: '#5fb877',
          700: '#48a35e',
          800: '#358f49',
          900: '#2a7a39',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'subtle-glow': 'subtleGlow 4s ease-in-out infinite',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(95, 184, 119, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(95, 184, 119, 0.2)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
