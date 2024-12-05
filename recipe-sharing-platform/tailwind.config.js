/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        mycustomcolor: '#a4dff2',
        mytitletext: '#e7a3d0',
      },
    },
  },
  plugins: [],
}

