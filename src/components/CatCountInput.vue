<template>
    <v-text-field :label="$t('cat_count_label')" type="number" name="catCount" v-model="$root.$data.catCount"/>
</template>

<script>
    export default {
        name: 'CatCountInput',
        props: {
        }
    }
</script>

<style scoped>
</style>