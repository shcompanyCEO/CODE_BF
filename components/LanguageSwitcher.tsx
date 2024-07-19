// components/LanguageSwitcher.tsx
import { PanelTopCloseIcon, SettingsIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const { locale, locales } = router;
  const { countryModalState, countryModalClose } = salonModeChangeeStore();
  const { t } = useTranslation('common');

  const changeLanguage = (newLocale: string) => {
    if (newLocale !== locale) {
      router.push(router.pathname, router.asPath, { locale: newLocale });
      i18n.changeLanguage(newLocale);
      localStorage.setItem('user-language', newLocale);
      countryModalClose();
    }
  };

  const lengugeText = (loc: string) => {
    if (loc === 'ko') {
      return 'korean';
    } else if (loc === 'en') {
      return 'United States';
    } else {
      return 'thailend';
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('user-language');
      if (savedLocale && savedLocale !== locale) {
        changeLanguage(savedLocale);
      }
    }
  }, []);

  return (
    <div>
      <div className="mt-6 text-center">
        <h1 className="text-2xl font-bold">{t('countryIntroduction')} </h1>
      </div>
      <div className="flex justify-between items-center mb-4">
        <PanelTopCloseIcon className="text-gray-400" />
        <h1 className="text-lg font-semibold">{t('countryLanguagesAndRegions')}</h1>
        <SettingsIcon className="text-gray-400" />
      </div>
      <div className="border-t border-gray-200 py-4">
        <h2 className="text-sm font-semibold mb-4">{t('countryLanguagesAndRegions')}</h2>
        <div className="grid grid-cols-2 gap-4"></div>
        {locales &&
          locales?.map((loc) => (
            <button
              key={loc}
              onClick={() => changeLanguage(loc)}
              className={`mx-2 ${locale === loc ? 'font-bold' : ''}`}
            >
              <div>
                <p>{loc}</p>
                <p className="text-gray-500">{lengugeText(loc)}</p>
              </div>
            </button>
          ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
