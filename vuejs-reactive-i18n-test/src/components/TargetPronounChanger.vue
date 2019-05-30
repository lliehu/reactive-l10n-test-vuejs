<template>
    <div>
        <button @click="switchPronounTo">{{ $t('gendered_pronoun_object') }}</button>
        <button @click="switchPronounTo('female')">{{ $t('gendered_pronoun_object', {context: 'female'}) }}</button>
        <button @click="switchPronounTo('male')">{{ $t('gendered_pronoun_object', {context: 'male'}) }}</button>
    </div>
</template>

<script>
    export default {
        name: 'TargetPronounChanger',
        props: {

        },
        methods: {
            switchPronounTo(newPronoun = '') {
                console.log('Changing pronoun to: ' + newPronoun);
                this.$root.$data.gender = newPronoun;
            }
        }
    }
</script>

<style scoped>
</style>