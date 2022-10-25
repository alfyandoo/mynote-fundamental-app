/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1e1e2e",
        "secondary-dark": "#333354",
        "tertiary-dark": "#7c7cb7",
        "base-dark": "#242438",
        "text-primary-dark": "#ffffff",
      },
    },
  },
  plugins: [],
};
