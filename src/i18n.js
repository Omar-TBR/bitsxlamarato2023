import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: require('./locales/en.json'),
  es: require('./locales/es.json'),
  ca: require('./locales/ca.json'),
  // Add more languages as needed
};

const i18n = new VueI18n({
  locale: 'en', // set default locale
  messages,
});

export default i18n;