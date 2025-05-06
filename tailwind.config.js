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
          100: "#FFF7DA",
          200: "#FFEEB5",
          300: "#FFE190",
          400: "#FFD575",
          500: "#FFC247",
          600: "#DB9E33",
          700: "#B77C23",
          800: "#935D16",
          900: "#7A470D",
        },
        accent: "#02033B",
        body: "#F3F8FF"
      },
      maxWidth: {
        wide: "1440px"
      }
    },
  },
  plugins: [],
}