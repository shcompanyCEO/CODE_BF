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
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
        toggle: 'background-color, border-color, transform',
      },
      maxWidth: {
        'layout-maxWidth': '640px',
      },
      leftTranstion: {
        'menu-left': '60%',
      },
      fontSize: {
        xxs: '13px',
        full: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
