/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'equalizer-bar1': 'equalizer infinite 1s ease-in-out -0.2s',
        'equalizer-bar2': 'equalizer infinite 1s ease-in-out -0.5s',
        'equalizer-bar3': 'equalizer infinite 1s ease-in-out -0.6s',
        'equalizer-bar4': 'equalizer infinite 1s ease-in-out -0s',
        'equalizer-bar5': 'equalizer infinite 1s ease-in-out -0.4s',
      },
      keyframes: {
        equalizer: {
          '0%': { transform: 'scaleY(0.1)' },
          '33%': { transform: 'scaleY(0.6)' },
          '66%': { transform: 'scaleY(0.9)' },
          '100%': { transform: 'scaleY(0.1)' },
        },
      },
    },
  },
  plugins: [],
}