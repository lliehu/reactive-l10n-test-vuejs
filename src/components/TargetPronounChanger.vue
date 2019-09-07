<template>
    <div>
        <button @click="switchPronounTo('')" :class="{ selected: !!!gender}">{{ $t('gendered_pronoun_object') }}</button>
        <button @click="switchPronounTo('female')" :class="{ selected: gender === 'female'}">{{ $t('gendered_pronoun_object', {context: 'female'}) }}</button>
        <button @click="switchPronounTo('male')" :class="{ selected: gender === 'male'}">{{ $t('gendered_pronoun_object', {context: 'male'}) }}</button>
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