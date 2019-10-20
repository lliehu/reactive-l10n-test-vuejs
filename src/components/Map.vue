<template>
  <div id="map"></div>
</template>

<script>
import leaflet from 'leaflet'
import '../../node_modules/leaflet/dist/leaflet.css'

import markerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'
import markerRetinaIcon from '../../node_modules/leaflet/dist/images/marker-icon-2x.png'
import shadowIcon from '../../node_modules/leaflet/dist/images/marker-shadow.png'

leaflet.Icon.Default.imagePath = ' ' // Set image path to non-empty to prevent Leaflet from trying to auto-detect it and fail horribly.
leaflet.Icon.Default.prototype.options.iconUrl = markerIcon
leaflet.Icon.Default.prototype.options.iconRetinaUrl = markerRetinaIcon
leaflet.Icon.Default.prototype.options.shadowUrl = shadowIcon
leaflet.Icon.Default.prototype.options.shadowRetinaUrl = shadowIcon

export default {
  name: 'Map',
  data: function() {
    return {
      map: null
    }
  },
  methods: {
    initMap() {
      this.$data.map = leaflet
        .map('map', {
          zoomControl: false
        })
        .setView([61.45, 23.85], 12)
      this.$data.map.on('click', event => {
        this.$store.addLogMessage('log_messages.marker_added', {
          position: event.latlng.toString()
        })
        let marker = leaflet.marker(event.latlng)
        marker.bindPopup(event.latlng.toString())
        marker.addTo(this.$data.map)
      })

      this.tileLayer = leaflet.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      )
      this.tileLayer.addTo(this.$data.map)
    },
    initZoomControl() {
      // This probably only works if translations objects
      // are made reactive by Vue.js.
      let zoomInTitle = this.$i18n.i18next.t('map.zoomInTitle')
      let zoomOutTitle = this.$i18n.i18next.t('map.zoomOutTitle')

      if (this.$data.zoomControl) {
        let currentOptions = this.$data.zoomControl.options
        if (
          currentOptions.zoomInTitle === zoomInTitle &&
          currentOptions.zoomOutTitle === zoomOutTitle
        ) {
          return
        }
        this.$data.zoomControl.remove()
        this.$data.zoomControl = null
      }
      this.$data.zoomControl = leaflet.control.zoom({
        zoomInTitle,
        zoomOutTitle
      })
      this.$data.zoomControl.addTo(this.$data.map)
    }
  },
  mounted() {
    this.initMap()
    this.$watch(this.initZoomControl)
    // TODO Is this really needed? Can I find some way so tha
    // this is not needed? Think about it.
    this.$i18n.i18next.on('languageChanged', this.initZoomControl)
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
