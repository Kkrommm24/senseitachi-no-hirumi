import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ja: {
        translation: translation.ja
      },
      vi: {
        translation: translation.vi
      }
    },
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
