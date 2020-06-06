import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import fi from './vuetify_locale_fi'
import i18next from 'i18next'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  lang: {
    current: 'fi', // This is updated in main.js. See updateVuetifyLanguage().
    locales: { fi },
    t: (key, ...params) => i18next.t(key, params)
  }
})
