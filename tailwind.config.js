/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'md':'802px',
        "other":{'min':'340px','max':'1268px'}
      }
    },
  },
  plugins: [],
}

