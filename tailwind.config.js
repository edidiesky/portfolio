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
        custom_5: "1fr 160px",
        custom_2: "30% 1fr",
        custom_4: "auto 1fr",
        custom_3: "15% 1fr",
      },
      // Blog_Styles
      fontFamily: {
        portfolio_bold: ["Agency_Extended", "sans-serif"],
        portfolio_bold1: ["Agency_Extended", "sans-serif"],
        portfolio_semibold: ["Agency_Extended", "sans-serif"],
        sans: ["Agency_Extended", "sans-serif"],
      },
      colors: {
        light_grey: "#F6F5F4",
      },
      maxWidth: {
        custom: "1204px",
        custom_1: "1204px",
        custom_2: "1304px",
      },
    },
  },
  plugins: [],
};
