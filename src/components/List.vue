<template>
  <div>
    <!-- TODO FIXME Do not use parseInt. -->
    <span>
      {{ $t('cat_count', { context: gender, count: parseInt(catCount, 10) }) }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {},
  computed: {
    gender() {
      return this.$root.$data.gender
    },
    catCount() {
      return this.$root.$data.catCount
    }
  }
}
</script>

<style scoped></style>
