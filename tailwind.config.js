
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'background':"url('src/components/images/Background.png')",
        'bannerNgang':"url('src/components/images/bannerdoc2.jpg')",
      },
      fontFamily: {
        poppins: ["Arial", "sans-serif"]
      },
      colors: {
        'KCTBS-blue': '#007b9c',
        'KCTBS-blue-200': '#56d5e5',
        'KCTBS-green': '#00b402',
        'KCTBS-blue-bold': '#037793',
        'KCTBS-white':'#FFFFFF',
        'KCTBS-yellow':'#FBBF24',
        'KCTBS-yellow-throw':'#fcefdb',
      },
    },
  },

  plugins: [],
}
