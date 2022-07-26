/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/images/pattern-bg.png')",
      },
      fontFamily: {
        Rubik: "Rubik, sans-serif",
      }, 
      colors: {
        veryDarkGray: "#2b2b2b",
        darkGray: "#969696;",
      },
    },
  },
  plugins: [],
};
