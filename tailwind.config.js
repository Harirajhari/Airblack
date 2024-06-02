/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line tells Tailwind to scan your source files for class names
  ],
  theme: {
    extend: {
      colors: {
        f56563: '#f56563',
      },
    },
  },
  plugins: [],
};

