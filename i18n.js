// import { initReactI18next } from 'react-i18next';
// import i18n from 'i18next';

// import enTranslation from './public/locales/en/common.json'; // Import English translations
// import koTranslation from './public/locales/ko/common.json'; // Import French translations
// import thTranslation from './publiclocales/de/common.json'; // Import German translations

// i18n
//   .use(initReactI18next) // Initialize i18next with React
//   .init({
//     lng: 'ko', // Default language
//     fallbackLng: 'ko', // Fallback language if a translation is missing
//     debug: process.env.NODE_ENV === 'development', // Enable debug mode in development
//     resources: {
//       en: {
//         translation: enTranslation, // English translations
//       },
//       ko: {
//         koTranslation: koTranslation, // Korean translations
//       },
//       th: {
//         thTranslation: thTranslation, // Thailend translations
//       },
//     },
//     interpolation: {
//       escapeValue: false, // Not needed for React as it escapes by default
//     },
//   });

// export default i18n;
const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['fr', 'de'],
  localeSubpaths: {
    en: 'en',
    fr: 'fr',
    de: 'de',
  },
});
