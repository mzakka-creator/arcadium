/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF006E',
        'neon-cyan': '#00F5FF',
        'neon-purple': '#8B00FF',
        'neon-orange': '#FF6B00',
        'neon-yellow': '#FFD600',
        'neon-green': '#00FF41',
        'dark-navy': '#0A0E27',
        'dark-black': '#000000',
      },
      fontFamily: {
        'heading': ['Orbitron', 'Audiowide', 'sans-serif'],
        'body': ['Play', 'Inter', 'Roboto', 'sans-serif'],
        'arcade': ['"Press Start 2P"', 'cursive'],
      },
      boxShadow: {
        'neon-pink': '0 0 20px #FF006E, 0 0 40px #FF006E',
        'neon-cyan': '0 0 20px #00F5FF, 0 0 40px #00F5FF',
        'neon-purple': '0 0 20px #8B00FF, 0 0 40px #8B00FF',
        'neon-orange': '0 0 20px #FF6B00, 0 0 40px #FF6B00',
        'neon-green': '0 0 20px #00FF41, 0 0 40px #00FF41',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px currentColor)' },
          '50%': { filter: 'drop-shadow(0 0 20px currentColor)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

