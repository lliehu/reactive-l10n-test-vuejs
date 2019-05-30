<template>
    <div>
        <span>{{ $t("cat_count", { context: gender, count: 3} ) }}</span>
    </div>
</template>

<script>
    export default {
        name: 'List',
        props: {
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