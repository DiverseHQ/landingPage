module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'p-h': 'var(--purple-color)',
        's-h': 'var(--pink-color)',
        'b-bg': 'var(--black-background-color)',
        'p-bg': 'var(--purple-bg)',
        's-bg': 'var(--dark-purple-bg)',
        'l-bg': 'var(--light-purple-bg)',
        'p-border': 'var(--blue-border)'
      }
    }
  },
  plugins: []
}
