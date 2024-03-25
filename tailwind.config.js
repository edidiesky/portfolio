/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        custom: "1fr 40%",
        custom_2: "40% 1fr",
        custom_3: "15% 1fr",
      },
      // Blog_Styles
      fontFamily: {
        portfolio_bold: ["Agency_Extended", "sans-serif"],
        portfolio_bold1: ["Agency_Extended", "sans-serif"],
        portfolio_italic: ["Italic", "sans-serif"],
        portfolio_semibold: ["SemiBold", "sans-serif"],
      },
      background: {
        light_grey: "#F6F5F4",
      },
      maxWidth: {
        custom: "1100px",
        custom_1: "1100px",
        custom_2: "1204px",
      },
    },
  },
  plugins: [],
};
