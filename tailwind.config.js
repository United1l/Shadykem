export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: '#00A36C',
        'dark-emerald': '#04382d',
        gold: '#d4b86f',
        'light-gold': '#eddab0',
        'hero-gold': '#f2d070',
      },
      backgroundImage: {
        'hero-home': "url('/images/3.jpeg')",
      },
      boxShadow: {
        soft: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
      },
    },
  },
  plugins: [],
}
