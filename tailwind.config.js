/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212", // Deep Charcoal
        foreground: "#f8fafc", // Slate-50
        primary: {
          DEFAULT: "#FFD700", // Bright Vibrant Gold
          foreground: "#121212",
        },
        secondary: {
          DEFAULT: "#f1f5f9", // Slate-100
          foreground: "#121212",
        },
        muted: {
          DEFAULT: "#1e293b", // Slate-800
          foreground: "#94a3b8", // Slate-400
        },
        accent: {
          DEFAULT: "#FFD700", // Bright Vibrant Gold
          foreground: "#121212",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
