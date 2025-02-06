// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          lra: {
            blue: {
              light: '#2196F3',  // Light blue
              DEFAULT: '#0D47A1', // Primary blue
              dark: '#002171',    // Dark blue
            },
            gold: {
              light: '#FFD700',   // Light gold
              DEFAULT: '#FFC107', // Primary gold
              dark: '#FFA000',    // Dark gold
            },
            gray: {
              light: '#F5F5F5',
              DEFAULT: '#9E9E9E',
              dark: '#616161',
            }
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          heading: ['Poppins', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }