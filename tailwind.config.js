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
        'lg':'1054px',
        "other":{'min':'340px','max':'1268px'}
      }
    },
  },
  plugins: [],
}

