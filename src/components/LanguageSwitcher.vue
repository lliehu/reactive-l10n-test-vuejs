<template>
  <div>
    <v-btn
      @click="switchLanguageToAuto()"
      :color="!!!manuallySelectedLanguage ? 'success' : ''"
    >
      {{ $t('language_automatic') }}
    </v-btn>
    <v-btn
      v-for="language in languages"
      v-bind:key="language.code"
      @click="switchLanguageTo(language.code)"
      :color="
        !!manuallySelectedLanguage && currentLanguage === language.code
          ? 'success'
          : ''
      "
    >
      {{ language.nativeName }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data: function() {
    return {
      languages: [
        {
          code: 'en',
          nativeName: 'English'
        },
        {
          code: 'fi',
          nativeName: 'Suomi'
        },
        {
          code: 'aa',
          nativeName: 'In-Context'
        }
      ]
    }
  },
  props: {},
  methods: {
    switchLanguageTo(newLanguage = 'en') {
      this.$root.$store.overrideUILanguageTo(newLanguage)
    },
    switchLanguageToAuto() {
      this.$root.$store.enableAutomaticUILanguage()
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
