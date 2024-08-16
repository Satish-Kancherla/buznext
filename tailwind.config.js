/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "border": "hsl(var(--border))",
        // other colors
      },
      // other theme extensions
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // other plugins
  ],
}
