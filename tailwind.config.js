/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gov-primary": "#003375",
        "gov-secondary": "#00b0f0",
        "gov-success": "#006736",
        "gov-error": "#b60202",
        "gov-focus": "#ffdd00",
        "gov-main-text": "#252830",
        "gov-secondary-text": "#515058",
        "gov-link": "#515058",
        "gov-link-hover": "#0e3d8b",
        "gov-link-visited": "#4c2a90",
      },
    },
  },
  plugins: [require("@digigov/css")],
};
