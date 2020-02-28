<template>
  <div id="map">
    <l-map
      style="z-index: 0"
      :center="center"
      :zoom="12"
      :options="{ zoomControl: false }"
      @click="addMarker"
    >
      <l-tile-layer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png"
        attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>, &copy; <a href='https://carto.com/attribution'>CARTO</a>"
        maxZoom="18"
      />
      <l-control-zoom
        :key="$t('map.zoomInTitle') + $t('map.zoomOutTitle')"
        :zoomInTitle="$t('map.zoomInTitle')"
        :zoomOutTitle="$t('map.zoomOutTitle')"
      />
      <l-marker v-for="marker in markerList" :key="marker" :lat-lng="marker">
        <l-popup>
          <v-btn @click="openDialog">{{ $t('add_new_comment_button') }}</v-btn>
        </l-popup>
      </l-marker>
    </l-map>
    <v-dialog v-model="dialogOpen">
      <v-card>
        <v-card-title class="headline">
          {{ $t('add_new_comment_title') }}
        </v-card-title>
        <v-card-text></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialogOpen = false">
            {{ $t('add_new_comment_button') }}
          </v-btn>

          <v-btn @click="dialogOpen = false">
            {{ $t('cancel_button') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Vue from 'vue'

import leaflet from 'leaflet'
import '../../node_modules/leaflet/dist/leaflet.css'

import markerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'
import markerRetinaIcon from '../../node_modules/leaflet/dist/images/marker-icon-2x.png'
import shadowIcon from '../../node_modules/leaflet/dist/images/marker-shadow.png'

import { LControlZoom, LMap, LMarker, LPopup, LTileLayer } from 'vue2-leaflet'

Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.component('l-popup', LPopup)
Vue.component('l-control-zoom', LControlZoom)

leaflet.Icon.Default.imagePath = ' ' // Set image path to non-empty to prevent Leaflet from trying to auto-detect it and fail horribly.
leaflet.Icon.Default.prototype.options.iconUrl = markerIcon
leaflet.Icon.Default.prototype.options.iconRetinaUrl = markerRetinaIcon
leaflet.Icon.Default.prototype.options.shadowUrl = shadowIcon
leaflet.Icon.Default.prototype.options.shadowRetinaUrl = shadowIcon

export default {
  name: 'Map',
  data: function() {
    return {
      center: [61.45, 23.85],
      markerList: [],
      dialogOpen: false
    }
  },
  created: function() {
    this.bus.$on('fly-to', args => {
      this.$data.center = args.latlng
    })
  },
  props: ['bus'], // TODO how to update map position when this changes
  methods: {
    addMarker(event) {
      this.$store.addLogMessage('log_messages.marker_added', {
        position: event.latlng.toString()
      })
      this.$data.markerList.push(event.latlng)
    },
    openDialog() {
      this.$data.dialogOpen = true
    }
  }
}
</script>

<style>
#map {
  width: 100%;
  height: 600px;
  margin: auto;
}
</style>
