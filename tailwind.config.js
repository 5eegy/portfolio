/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {roboto: ['Roboto', "sans-serif"], neue: ['Bebas Neue', "cursive"], openSauce:['open sauce one', "sans-serif"]},
    extend: {
      backgroundImage: {}
    },
  },
  plugins: [],
};
