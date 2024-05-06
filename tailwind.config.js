module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'layout-maxWidth': '640px',
      },
      leftTranstion: {
        'menu-left': '60%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
