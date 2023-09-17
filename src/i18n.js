import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./components/en/translation.json";
import hiTranslation from "./components/hi/translation.json";
import esTranslation from "./components/es/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
