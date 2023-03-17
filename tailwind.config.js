/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animate: {
          "0%,10%,100%": {
            width: "0%",
          },
          "70%,80%,90%": {
            width: "100%",
          },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
    animation: {
      animate: "animate 6s linear infinite",
      text: "text 5s ease infinite",
    },
  },
  plugins: [],
};
