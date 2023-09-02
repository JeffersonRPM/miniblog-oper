const { thonUI, thonUIContent } = require('@thonlabs/ui/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.tsx', 'src/**/*.tsx', thonUIContent()],
  jit: true,
  theme: {
    extend: {
      fontFamily: {
        serif: ['Montserrat', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'linear-bottom-white':
        'linear-gradient(180deg, rgba(249, 250, 251, 0) 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [thonUI()],
}

