/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // We move colors OUTSIDE of extend to overwrite Tailwind's defaults
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FAFAFA',
      black: '#000000',
      // The Master Palette
      background: "#0A0A0B", // Deep Night Charcoal
      foreground: "#C5A075", // Antique Gold
      primary: "#C5A075",
      accent: "#C5A075",
      // Specific Executive Tones
      executive: {
        gold: "#C5A075",
        charcoal: "#0A0A0B",
        muted: "#1A1A1C", // Slightly lighter for cards
        soft: "#94a3b8", // For less important text
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};