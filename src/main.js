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
      "cat_count_label": "Cat count:",
      "message_log": {
        "title": "Message log",
        "test_message": "Testing, 1, 2, 3, testing..."
      }
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
      "cat_count_label": "Kissojen määrä:",
      "message_log": {
        "title": "Viestiloki",
        "test_message": "Testataan, 1, 2, 3, testataan..."
      }
    }
  }
};

const store = {
  state: {
    gender: 'female',
    language: navigator.language,
    catCount: 0,
    resources: i18nResources,
    // True if language has been manually selected.
    // False e.g. when language is detected from navigator.language.
    manuallySelectedLanguage: false,
    messageLog: {
      messageList: [
        {
          time: new Date(),
          messageId: "message_log.test_message",
          parameters: {}
        },
        {
          time: new Date(),
          messageId: "message_log.test_message",
          parameters: {}
        },
        {
          time: new Date(),
          messageId: "message_log.test_message",
          parameters: {}
        }
      ]
    }
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
  if (!store.state.manuallySelectedLanguage) {
    i18next.changeLanguage(navigator.language);
  }
});

new Vue({
  i18n,
  render: h => h(App),
  data: function() {
    return store.state
  }
}).$mount('#app');
