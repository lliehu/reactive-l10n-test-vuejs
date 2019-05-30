<template>
    <div>
        <label>
            {{ $t('cat_count_label') }}
            <input type="number" name="catCount" v-model="$root.$data.catCount"/>
        </label>
    </div>
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