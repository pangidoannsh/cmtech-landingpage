/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EEF5FF",
          500: "#1820AC",
          600: "#111793",
          700: "#0C107B",
          900: "#05172B",
        },
        accent: "#F8AA4D",
        "accent-light": "#F7C95F",
        body: "#F3F8FF"
      },
      maxWidth: {
        wide: "1440px"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      screens: {
        xs: "400px"
      }
    },
  },
  plugins: [],
}