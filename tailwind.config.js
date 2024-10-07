/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGreen: '#003E39',
      },
      fontFamily:{
        'neue':'Neue Montreal',
      },
      keyframes: {
        'slide-once': {
          '0%': { transform: 'translateX(-100%)' },  // Start from off-screen left
          '100%': { transform: 'translateX(100%)' }, // End off-screen right
        },
      },
      animation: {
        'slide-once': 'slide-once 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}

