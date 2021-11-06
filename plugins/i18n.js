import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { defineNuxtPlugin } from '@nuxtjs/composition-api'

Vue.use(VueI18n)

export default defineNuxtPlugin(({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'fr',
    messages: {
      'fr': require('~/locales/fr.json'),
      'en': require('~/locales/en.json') 
    },
  });
})