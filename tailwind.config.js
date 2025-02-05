/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1150px',
      xl: '1400px',
      xl2 : '1640',
    },
    colors: {
      'blue': '#043873',
      'blue-light': '#4F9CF9',
      'yellow': '#FFE492',
      'white': '#FFFFFF',
      'black': '#212529',
      'sky': '#A7CEFC',
    },
    fontFamily: {
      inter: ['Inter','Google Font'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
    },
  },
  plugins: [],
}

