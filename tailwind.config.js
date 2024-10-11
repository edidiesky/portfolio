/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        custom: "1fr auto",
        custom_2: "auto 1fr",
      },
      // Blog_Styles
      // fontFamily: {
      //   portfolio_normal: ["Karla", "sans-serif"],
      //   portfolio_bold: ["Karla", "sans-serif"],
      //   portfolio_regular: ["Karla", "sans-serif"],
      // },
      colors: {
        light_grey: "#eee",
      },
      maxWidth: {
        custom: "1504px",
        custom_1: "1504px",
        custom_2: "1504px",
      },
    },
  },
  plugins: [],
};
