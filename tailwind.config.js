module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        1000: '1000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
