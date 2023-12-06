/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / 100%)',
      },
      fontFamily: {
        'sans': ['"YekanBakh"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}