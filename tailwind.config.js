/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0B12',
          surface: '#13131F',
          card: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.07)',
        },
        light: {
          bg: '#F8F9FC',
          surface: '#FFFFFF',
          card: 'rgba(255, 255, 255, 0.9)',
          border: 'rgba(0, 0, 0, 0.08)',
        },
        lavender: {
          light: '#E9D5FF',
          DEFAULT: '#C084FC',
          dark: '#A855F7',
        },
        indigo: {
          accent: '#6366F1',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
};
