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
        "cat_count": "There is only {{count}} cat plotting to kill them.",
        "cat_count_plural": "There are already {{count}} cats plotting to kill them.",
        "cat_count_female": "There is only {{count}} cat plotting to kill her.",
        "cat_count_female_plural": "There are already {{count}} cats plotting to kill her.",
        "cat_count_male": "There is only {{count}} cat plotting to kill him.",
        "cat_count_male_plural": "There are already {{count}} cats plotting to kill him.",
        "gendered_pronoun_object": "them",
        "gendered_pronoun_object_female": "her",
        "gendered_pronoun_object_male": "him"
      }
    }
  }
});

const i18n = new VueI18Next(i18next)

Vue.config.productionTip = false;

const store = {
  state: {
    gender: 'female',
    language: 'en'
  }
};

new Vue({
  i18n,
  render: h => h(App),
  data: function() {
    return store.state
  }
}).$mount('#app');
