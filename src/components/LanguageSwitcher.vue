<template>
    <div>
        <v-btn @click="switchLanguageToAuto()" :color="!!!manuallySelectedLanguage ? 'success' : ''">AUTO</v-btn>
        <v-btn @click="switchLanguageTo('fi')" :color="!!manuallySelectedLanguage && language === 'fi' ? 'success' : ''">FI</v-btn>
        <v-btn @click="switchLanguageTo('en')" :color="!!manuallySelectedLanguage && language === 'en' ? 'success' : ''">EN</v-btn>
    </div>
</template>

<script>
    import i18next from 'i18next'

    export default {
        name: 'LanguageSwitcher',
        props: {
        },
        methods: {
            switchLanguageTo(newLanguage = 'en') {
                this.$root.$data.manuallySelectedLanguage = true;
                i18next.changeLanguage(newLanguage);
            },
            switchLanguageToAuto() {
                this.$root.$data.manuallySelectedLanguage = false;
                i18next.changeLanguage(navigator.language)
            }
        },
        computed: {
            language() {
                return this.$root.$data.language;
            },
            manuallySelectedLanguage() {
                return this.$root.$data.manuallySelectedLanguage;
            }
        }
    }
</script>

<style scoped>
</style>