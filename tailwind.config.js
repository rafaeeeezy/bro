/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
            minWidth: {
            '125px': '125px',
            },
        },
    },
    plugins: [],
  }