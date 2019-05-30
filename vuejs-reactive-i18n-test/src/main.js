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
        "app": {
          "name": "Vue.js Reactive I18n test"
        },
        "testString": "Test string",
        "cat_count_he": "There is only {{count}} cat plotting to kill him.",
        "cat_count_he_plural": "There are already {{count}} cats plotting to kill him.",
        "cat_count_she": "There is only {{count}} cat plotting to kill her.",
        "cat_count_she_plural": "There are already {{count}} cats plotting to kill her."
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
