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
          900: "#05172B",
        },
        accent: "#F8AA4D",
        body: "#F3F8FF"
      },
      maxWidth: {
        wide: "1440px"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}