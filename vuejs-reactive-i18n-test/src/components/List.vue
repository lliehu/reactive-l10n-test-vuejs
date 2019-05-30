<template>
    <div>
        <span>{{ $t("cat_count", { context: this.$root.$data.gender, count: 3} ) }}</span>
    </div>
</template>

<script>
    export default {
        name: 'List',
        props: {
        }
    }
</script>

<style scoped>
</style>