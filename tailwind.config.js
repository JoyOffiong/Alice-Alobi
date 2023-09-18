/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {},
    colors:{
    primaryColor:'#003153',
    secondaryColor:"#fa8128",
    tetiaryColor:"#f0deeb",
    },
    fontFamily: {
      sans: ["poppins"],
    },
  },
  plugins: [],
}
