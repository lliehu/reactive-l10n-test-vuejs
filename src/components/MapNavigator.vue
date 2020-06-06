<template>
  <v-card width="600px" class="mx-auto">
    <v-card-text>
      {{ $t('navigate_map_to_label') }}
      {/* Commenting attribute `no-data-text` allows to test localization of Vuetify. */}
      <v-autocomplete
        v-model="selectedPlace"
        :items="items"
        item-text="name"
        item-value="coordinates"
        :no-data-text="$t('no_places_message')"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn
        @click="$emit('navigate-map', selectedPlace)"
        :disabled="!!!selectedPlace"
      >
        {{ $t('navigate_map_button') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MapNavigator',
  data: function() {
    return {
      selectedPlace: null,
      items: [
        {
          name: 'Hervanta',
          coordinates: [61.45, 23.85]
        },
        {
          name: 'Kaleva',
          coordinates: [61.498642, 23.800743]
        }
      ]
    }
  },
  props: {},
  methods: {},
  computed: {}
}
</script>

<style scoped></style>
