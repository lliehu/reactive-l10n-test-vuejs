<template>
  <div>
    <v-btn
      @click="switchLanguageToAuto()"
      :color="!!!manuallySelectedLanguage ? 'success' : ''"
    >
      AUTO
    </v-btn>
    <v-btn
      v-for="languageCode in languageCodes"
      v-bind:key="languageCode"
      @click="switchLanguageTo(languageCode)"
      :color="
        !!manuallySelectedLanguage && currentLanguage === languageCode
          ? 'success'
          : ''
      "
    >
      {{ languageCode.toUpperCase() }}
    </v-btn>
  </div>
</template>

<script>
import i18next from 'i18next'

export default {
  name: 'LanguageSwitcher',
  data: function() {
    return {
      languageCodes: ['en', 'fi']
    }
  },
  props: {},
  methods: {
    switchLanguageTo(newLanguage = 'en') {
      this.$root.$data.manuallySelectedLanguage = true
      i18next.changeLanguage(newLanguage)
    },
    switchLanguageToAuto() {
      this.$root.$data.manuallySelectedLanguage = false
      i18next.changeLanguage(navigator.language)
    }
  },
  computed: {
    currentLanguage() {
      return this.$root.$data.language
    },
    manuallySelectedLanguage() {
      return this.$root.$data.manuallySelectedLanguage
    }
  }
}
</script>

<style scoped></style>
