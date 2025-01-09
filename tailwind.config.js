/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/background.png')",
        'bg-vector': "url('/vector.png')",
      },
    },
  },
  plugins: [],
};
