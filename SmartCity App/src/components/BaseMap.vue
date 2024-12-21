<template>
  <div id="mapContainer" class="py-4"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { busRoutes } from '@/data/busRoutes';

export default {
  name: "BaseMap",
  data() {
    return {
      map: null,
      accessToken: 'pk.eyJ1IjoiaGlraXV6cngiLCJhIjoiY200dnp3YjNuMDhlcDJsczg4ZG8zdzJzdCJ9.7wr-8CWiCCbse_YWie_VaA',
      busRoutes,
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    this.map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v10",
      center: [3.46885482669494, 36.75979773014405], // Boumerdes, Algeria
      zoom: 9,
    });

    this.map.on('load', () => {
      this.map.loadImage(
        'https://cdn-icons-png.flaticon.com/512/3448/3448339.png',
        (error, image) => {
          if (error) throw error;
          this.map.addImage('bus-icon', image);
        }
      );
    });
  },
  methods: {
    displayRoute(line) {
      const selectedRoute = this.busRoutes[line];

      if (this.map.getLayer("route")) {
        this.map.removeLayer("route");
        this.map.removeSource("route");
      }
      if (this.map.getLayer("stations")) {
        this.map.removeLayer("stations");
        this.map.removeSource("stations");
      }

      // Add Route Layer
      this.map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: selectedRoute.route,
        },
      });
      this.map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#0000ff",
          "line-width": 4,
        },
      });

      // Add Stations Layer
      this.map.addSource("stations", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: selectedRoute.stations.map((station) => ({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: station.coords,
            },
            properties: {
              title: station.name,
            },
          })),
        },
      });
      this.map.addLayer({
        id: "stations",
        type: "symbol",
        source: "stations",
        layout: {
          'icon-image': 'bus-icon',
          'icon-size': 0.05,
          'icon-allow-overlap': true,
          'text-field': ['get', 'title'],
          'text-offset': [0, 1.5],
          'text-anchor': 'top'
        }
      });

      // Zoom to the route
      this.zoomToRoute(selectedRoute.route.coordinates);
    },

    zoomToRoute(coordinates) {
      // Create a bounds object from the route coordinates
      const bounds = coordinates.reduce((bounds, coord) => {
        return bounds.extend(coord);
      }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

      // Fit the map to the bounds with some padding
      this.map.fitBounds(bounds, { padding: 30 });
    }
  }
};
</script>
