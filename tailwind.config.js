/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* "gray-20": "#F7F7F7",        // Sehr helles Grau, fast Weiß
        "gray-50": "#EAEAEA",        // Helles Grau, subtil aber erkennbar
        "gray-100": "#D4D4D4",       // Mittleres Hellgrau
        "gray-300": "#A8A8A8",       // Neutrales Grau
        "gray-500": "#7D7D7D",       // Dunkleres Mittelgrau
        "gray-700": "#4A4A4A",       // Dunkles Grau, fast Anthrazit
        "gray-900": "#1A1A1A",       // Sehr dunkles Grau, fast Schwarz */
        "gray-20": "#EAEAEA",
        "gray-50": "#EFE6E6",
        "gray-100": "#7D7D7D",
        "gray-500": "#5E0000",
        "primary-100": "#D4D4D4",
        "primary-300": "#4A4A4A",
        "primary-500": "#1A1A1A",
        "secondary-400": "#4FD1C5",
        "secondary-500": "#38B2AC"
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/asset_images/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolvetext: "url('.assets/asset_images/EvolveText.png')",
        abstractwaves: "url('.assets/asset_images/Abstractwaves.png')",
        sparkles: "url('.assets/asset_images/Sparkles.png')",
        circles: "url('.assets/asset_images/Circles.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}