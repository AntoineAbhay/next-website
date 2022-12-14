/** @type {import("tailwindcss").Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Trispace", ...defaultTheme.fontFamily.sans],
        "serif": ["Bitter", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
