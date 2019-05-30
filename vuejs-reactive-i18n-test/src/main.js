import Vue from 'vue'
import App from './App.vue'

import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'

Vue.use(VueI18Next);

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "testString": "Test string"
      }
    }
  }
});

const i18n = new VueI18Next(i18next)

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app');
