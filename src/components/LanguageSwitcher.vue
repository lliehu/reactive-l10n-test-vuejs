<template>
    <div>
        <v-btn @click="switchLanguageTo('fi')" :color="language === 'fi' ? 'success' : ''">FI</v-btn>
        <v-btn @click="switchLanguageTo('en')" :color="language === 'en' ? 'success' : ''">EN</v-btn>
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
            }
        },
        computed: {
            language() {
                return this.$root.$data.language;
            }
        }
    }
</script>

<style scoped>
</style>