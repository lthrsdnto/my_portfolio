/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        Eye: {
          "0%, 10%, 20%, 30%, 40%, 60%, 70%, 80%, 90%, 100%": {
            transform: "scale(1)",
          },
          "50%": { transform: "scaleY(0)" },
        },
      },
      animation: {
        Eye: "roll 3s infinite ",
      },
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        bighead: "url('./assets/bighead.svg')",
        coding: "url('./assets/coding.svg')",
        designing: "url('./assets/designing.svg')",
        team: "url('./assets/team.svg')",
        group: "url('./assets/group.svg')",
      },
    },
  },
  plugins: [],
};
