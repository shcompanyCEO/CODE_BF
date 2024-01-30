import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './public/locales/en.json';
import koTranslations from './public/locales/ko.json';
import thTranslations from './public/locales/th.json';

const resources = {
  en: { translation: enTranslations },
  ko: { translation: koTranslations },
  th: { translation: thTranslations },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko', // Set the default language
  fallbackLng: 'en', // Fallback language if a translation is missing
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
