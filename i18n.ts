import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from './next-i18next.config';

const isClient = typeof window !== 'undefined';
const savedLanguage = isClient ? localStorage.getItem('user-language') : 'ko';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    lng: `${savedLanguage}`,
    fallbackLng: 'ko',
    preload: nextI18NextConfig.i18n.locales,
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default appWithTranslation;