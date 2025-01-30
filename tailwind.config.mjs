/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0070f3',
          dark: '#4dabf7'
        },
        secondary: {
          DEFAULT: '#00a8ff',
          dark: '#69dbff'
        }
      },
    },
  },
  plugins: [],
}