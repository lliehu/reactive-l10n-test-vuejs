<template>
    <div>
        <button @click="switchLanguageTo('fi')" :class="{ selected: language === 'fi'}">FI</button>
        <button @click="switchLanguageTo('en')" :class="{ selected: language === 'en'}">EN</button>
    </div>
</template>

<script>
    import i18next from 'i18next'

    export default {
        name: 'TargetPronounChanger',
        props: {
        },
        methods: {
            switchLanguageTo(newLanguage = 'en') {
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
    button {
        background: white;
        color: black;
        border: 1px solid #333;
        padding: 1em;
    }
    .selected {
        background: green;
        color: white;
    }
</style>