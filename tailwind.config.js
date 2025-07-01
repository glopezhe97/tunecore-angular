/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        workSans: ['"Work Sans"', 'sans-serif'],
      },
       height: {
        '40vh': '40vh',
      },
    },
  },
  plugins: [],
};

export default config;
