<template>
<div id="map"></div>
</template>

<script>
import leaflet from 'leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';

export default {
    name: 'Map',
    methods: {
        initMap() {
            this.map = leaflet.map('map').setView([61.45, 23.85], 12);
            
            this.tileLayer = leaflet.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                {
                    maxZoom: 18,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
            );
            this.tileLayer.addTo(this.map);
        }
    },
    mounted() {
        this.initMap();
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