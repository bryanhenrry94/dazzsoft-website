/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        text: "#111827",
        accent: "#0197b2",
        econtia: {
          DEFAULT: "#0197b2",
          dark: "#017a91",
          light: "#e6f4f6",
        },
      },
    },
  },
  plugins: [],
};
