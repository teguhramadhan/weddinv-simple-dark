/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        italianno: "var(--font-italianno)",
        italiana: "var(--font-italiana)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
