// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Blue
        secondary: '#FBBF24', // Amber
        accent: '#3B82F6', // Sky Blue
        background: {
          light: '#F9FAFB', // Light Gray (for light mode)
          dark: '#1F2937', // Dark Gray (for dark mode)
        },
        grey: {
          DEFAULT: '#D1D5DB', // Neutral Grey
          dark: '#6B7280', // Darker Grey
        },
        text: {
          light: '#111827', // Charcoal
          dark: '#FFFFFF', // White
        },
      },
    },
  },
  plugins: [],
}
