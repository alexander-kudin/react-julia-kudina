import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).use(LanguageDetector).use(HttpApi).init({
  supportedLngs: ['ru', 'en'],
  fallbackLng: 'ru',
  detection: {
    order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain', 'queryString',],
    cache: ['cookie']
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n