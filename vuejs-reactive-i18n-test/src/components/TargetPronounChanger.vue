<template>
    <div>
        <button>{{ $t('gendered_pronoun_object') }}</button>
        <button>{{ $t('gendered_pronoun_object', {context: 'female'}) }}</button>
        <button>{{ $t('gendered_pronoun_object', {context: 'male'}) }}</button>
    </div>
</template>

<script>
    export default {
        name: 'TargetPronounChanger',
        props: {

        }
    }
</script>

<style scoped>
</style>