/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('background.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 27.86%, #43E7AD 33.94%, #E1D55D 30.57%)',
        'game-gradient': 'linear-gradient(100deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 67.88%)',
      },
    },
  },
  plugins: [],
}
