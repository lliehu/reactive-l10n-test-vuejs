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
        data: function() {
            return {
                gender: 'male'
            }
        }
    }
</script>

<style scoped>
</style>