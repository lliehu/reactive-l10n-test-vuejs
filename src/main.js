import Vue from 'vue'
import App from './App.vue'

import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'

Vue.use(VueI18Next);

const i18nResources = {
  en: {
    translation: {
      "app": {
        "name": "Vue.js Reactive I18n test"
      },
      "testString": "Test string",
      "cat_count": "Only {{count}} cat plotting to kill them.",
      "cat_count_plural": "{{count}} cats plotting to kill them.",
      "cat_count_female": "Only {{count}} cat plotting to kill her.",
      "cat_count_female_plural": "{{count}} cats plotting to kill her.",
      "cat_count_male": "Only {{count}} cat plotting to kill him.",
      "cat_count_male_plural": "{{count}} cats plotting to kill him.",
      "gendered_pronoun_object": "them",
      "gendered_pronoun_object_female": "her",
      "gendered_pronoun_object_male": "him",
      "cat_count_label": "Cat count:"
    }
  },
  fi: {
    translation: {
      "app": {
        "name": "Reaktiivinen internationalisointitesti Vue.js:llä"
      },
      "testString": "Testimerkkijono",
      "cat_count": "Vain yksi {{count}} kissa juonii hänen tappamista.",
      "cat_count_plural": "{{count}} kissaa juonii hänen tappamista.",
      "cat_count_female": "Vain yksi {{count}} kissa juonii hänen tappamista.",
      "cat_count_female_plural": "{{count}} kissaa juonii hänen tappamista.",
      "cat_count_male": "Vain yksi {{count}} kissa juonii hänen tappamista.",
      "cat_count_male_plural": "{{count}} kissaa juonii hänen tappamista.",
      "gendered_pronoun_object": "hän (neutraali)",
      "gendered_pronoun_object_female": "hän (nainen)",
      "gendered_pronoun_object_male": "hän (mies)",
      "cat_count_label": "Kissojen määrä:"
    }
  }
};

const store = {
  state: {
    gender: 'female',
    language: navigator.language,
    catCount: 0,
    resources: i18nResources
    // TODO How to describe that current language is either based on browser
    // or has been forced.
  }
};

i18next.init({
  lng: store.state.language,
  resources: i18nResources
});

i18next.on('languageChanged', function(lng) {
  store.state.language = lng;
});

const i18n = new VueI18Next(i18next);

Vue.config.productionTip = false;

window.addEventListener("languagechange", () => {
  i18next.changeLanguage(navigator.language);
});

new Vue({
  i18n,
  render: h => h(App),
  data: function() {
    return store.state
  }
}).$mount('#app');
