module.exports = {
  purge: ['public/index.html', 'src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0fa9e6',
          light: '#3fbaeb',
          dark: '#0c87b8'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
