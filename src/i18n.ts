import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationFR from './locales/fr.json';
import translationEN from './locales/en.json';

const resources = {
  fr: {
    translation: translationFR.translation
  },
  en: {
    translation: translationEN.translation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "fr", // use fr if detected lng is not available
    debug: true,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
