/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
      },
      fontFamily: {
        Montserrat: "Montserrat",
        game: "game",
      },
      backgroundImage: {
        hero: "url('https://i.pinimg.com/564x/64/31/75/6431750608bfde2b0c5989bf8c2b3332.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
