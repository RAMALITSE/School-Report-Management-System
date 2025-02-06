/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          lra: {
            blue: {
              light: '#2196F3',
              DEFAULT: '#0D47A1',
              dark: '#002171',
            },
            gold: {
              light: '#FFD700',
              DEFAULT: '#FFC107',
              dark: '#FFA000',
            },
            gray: {
              light: '#F5F5F5',
              DEFAULT: '#9E9E9E',
              dark: '#616161',
            }
          }
        }
      },
    },
    plugins: [],
  };
  