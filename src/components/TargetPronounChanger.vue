<template>
    <div>
        <v-btn @click="switchPronounTo('')" :color="!!!gender ? 'success' : ''">{{ $t('gendered_pronoun_object') }}</v-btn>
        <v-btn @click="switchPronounTo('female')" :color="gender === 'female' ? 'success' : ''">{{ $t('gendered_pronoun_object', {context: 'female'}) }}</v-btn>
        <v-btn @click="switchPronounTo('male')" :color="gender === 'male' ? 'success' : ''">{{ $t('gendered_pronoun_object', {context: 'male'}) }}</v-btn>
    </div>
</template>

<script>
    export default {
        name: 'TargetPronounChanger',
        props: {

        },
        methods: {
            switchPronounTo(newPronoun = '') {
                this.$root.$data.gender = newPronoun;
            }
        },
        computed: {
            gender() {
                return this.$root.$data.gender;
            }
        }
    }
</script>

<style scoped>
</style>