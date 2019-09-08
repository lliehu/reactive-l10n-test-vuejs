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
            if (this.$data.zoomControl) {
                this.$data.zoomControl.remove();
                this.$data.zoomControl = null;
            }
            this.$data.zoomControl = leaflet.control.zoom({
                zoomInTitle: this.$i18n.i18next.t('map.zoomInTitle'),
                zoomOutTitle: this.$i18n.i18next.t('map.zoomOutTitle')
            });
            this.$data.zoomControl.addTo(this.$data.map);
        }
    },
    mounted() {
        this.initMap();
        this.initZoomControl();
        this.$i18n.i18next.on('languageChanged', this.initZoomControl);
    }
}
</script>

<style>
#map {
    width: 100%;
    height: 400px;
    margin: auto;
}
</style>