<template>
<div id="map"></div>
</template>

<script>
import leaflet from 'leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';

export default {
    name: 'Map',
    data: function() {
        return {
            map: null
        };
    },
    methods: {
        initMap() {
            this.$data.map = leaflet.map('map', {
                zoomControl: false
            }).setView([61.45, 23.85], 12);
            this.$data.map.on('click', event => {
                let marker = leaflet.marker(event.latlng)
                marker.bindPopup(String(event.latlng))
                marker.addTo(this.$data.map)
            })
            
            this.tileLayer = leaflet.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                {
                    maxZoom: 18,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
            );
            this.tileLayer.addTo(this.$data.map);
        },
        initZoomControl() {
            // This probably only works if translations objects
            // are made reactive by Vue.js.
            let zoomInTitle = this.$i18n.i18next.t('map.zoomInTitle');
            let zoomOutTitle = this.$i18n.i18next.t('map.zoomOutTitle');

            if (this.$data.zoomControl) {
                let currentOptions = this.$data.zoomControl.options;
                if (currentOptions.zoomInTitle === zoomInTitle &&
                  currentOptions.zoomOutTitle === zoomOutTitle) {
                    return;
                }
                this.$data.zoomControl.remove();
                this.$data.zoomControl = null;
            }
            this.$data.zoomControl = leaflet.control.zoom({
                zoomInTitle,
                zoomOutTitle
            });
            this.$data.zoomControl.addTo(this.$data.map);
        }
    },
    mounted() {
        this.initMap();
        this.$watch(this.initZoomControl);
        // TODO Is this really needed? Can I find some way so tha
        // this is not needed? Think about it.
        this.$i18n.i18next.on('languageChanged', this.initZoomControl);
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