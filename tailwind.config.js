/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          bg: "#050505",
          obsidian: "#050608",
          panel: "#0B0D11",
          gold: "#F5C542",
          goldSoft: "#F5D97A",
          accent: "#4FD1C5",
          signal: "#7F5AF0",
          ember: "#F97373",
        },
      },
      backgroundImage: {
        "cosmic-gradient":
          "linear-gradient(135deg, #3A1C71 0%, #D76D77 50%, #FFAF7B 100%)",
        "cosmic-radial":
          "radial-gradient(circle at top, #4FD1C5 0, transparent 55%), radial-gradient(circle at bottom, #7F5AF0 0, transparent 55%)",
      },
      boxShadow: {
        "cosmic-soft": "0 0 40px rgba(245, 197, 66, 0.18)",
      },
    },
  },
  plugins: [],
};
