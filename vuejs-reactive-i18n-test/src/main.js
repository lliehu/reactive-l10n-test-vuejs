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
    },
    fi: {
      translation: {
        "app": {
          "name": "Reaktiivinen internationalisointitesti Vue.js:llä"
        },
        "testString": "Testimerkkijono",
        "cat_count": "Vain yksi {{count}} kissa juonii hänen tappamista.",
        "cat_count_plural": "Jo {{count}} kissaa juonii hänen tappamista.",
        "cat_count_female": "Vain yksi {{count}} kissa juonii hänen tappamista.",
        "cat_count_female_plural": "Jo {{count}} kissaa juonii hänen tappamista.",
        "cat_count_male": "Vain yksi {{count}} kissa juonii hänen tappamista.",
        "cat_count_male_plural": "Jo {{count}} kissaa juonii hänen tappamista.",
        "gendered_pronoun_object": "hän (neutraali)",
        "gendered_pronoun_object_female": "hän (nainen)",
        "gendered_pronoun_object_male": "hän (mies)"
      }
    }
  }
});

i18next.on('languageChanged', function(lng) {
  store.state.language = lng;
});

const i18n = new VueI18Next(i18next);

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
