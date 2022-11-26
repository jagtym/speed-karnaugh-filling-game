/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "box": "700px",
        "purple-dark": "#4D3575",
        "purple-light": "#5B4C8A"
      },
    },
  },
  plugins: [],
};
