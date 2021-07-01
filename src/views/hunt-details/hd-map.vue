<template>
  <section
    id="map"
    aria-labelledby="primary-heading"
    class="min-w-0 h-3/6 flex flex-col overflow-hidden lg:order-last bg-olive-200 rounded-md shadow-md"
  >
    <h1
      id="primary-heading"
      class="sr-only">Map</h1>
    map
  </section>
</template>

<script>
import maplibregl from 'maplibre-gl'
const TILE_URL = process.env.VUE_APP_API_URL

export default {
  name: 'hd-map',
  props: ['geojson', 'hunt_units'],
  data () {
    return {
      huntUnits: []
    }
  },
  mounted () {
    // renderMap() is called onMounted
    this.renderMap()
  },
  methods: {
    // renders the map to the html section with id="map"
    renderMap () {
      const map = new maplibregl.Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/topo/style.json?key=BJ5Us337tUIPtCCZeKV8',
        center: [-117, 39],
        zoom: 5
      })
      // sets the map to local data
      this.map = map
      map.addControl(new maplibregl.FullscreenControl())

      // when the map loads these functions will run
      map.on('load', () => {
        // public landownership layers
        map.addSource('landownership', {
          type: 'vector',
          tiles: [`${TILE_URL}/features/public_landownership/{z}/{x}/{y}.pbf`],
          minzoom: 8,
          maxzoom: 14
        })

        // usfs
        map.addLayer({
          id: 'landownership-usfs-fill',
          type: 'fill',
          source: 'landownership',
          'source-layer': 'public_landownership',
          paint: {
            'fill-opacity': 0.25,
            'fill-color': '#60C99E'
          },
          filter: ['==', 'surface_mgmt_agency', 'US Forest Service']
        })
        map.addLayer({
          id: 'landownership-usfs-outline',
          type: 'line',
          source: 'landownership',
          'source-layer': 'public_landownership',
          layout: {
            'line-cap': 'round',
            'line-join': 'round'
          },
          paint: {
            'line-opacity': 1,
            'line-color': '#60C99E',
            'line-width': 1
          },
          filter: ['==', 'surface_mgmt_agency', 'US Forest Service']
        })

        // blm
        map.addLayer({
          id: 'landownership-blm-fill',
          type: 'fill',
          source: 'landownership',
          'source-layer': 'public_landownership',
          paint: {
            'fill-opacity': 0.25,
            'fill-color': '#FED17E'
          },
          filter: ['==', 'surface_mgmt_agency', 'Bureau of Land Management']
        })
        map.addLayer({
          id: 'landownership-blm-outline',
          type: 'line',
          source: 'landownership',
          'source-layer': 'public_landownership',
          layout: {
            'line-cap': 'round',
            'line-join': 'round'
          },
          paint: {
            'line-opacity': 1,
            'line-color': '#FED17E',
            'line-width': 1
          },
          filter: ['==', 'surface_mgmt_agency', 'Bureau of Land Management']
        })

        // usfws
        map.addLayer({
          id: 'landownership-usfws-fill',
          type: 'fill',
          source: 'landownership',
          'source-layer': 'public_landownership',
          paint: {
            'fill-opacity': 0.25,
            'fill-color': '#AE9BCE'
          },
          filter: ['==', 'surface_mgmt_agency', 'US Fish and Wildlife Service']
        })
        map.addLayer({
          id: 'landownership-usfws-outline',
          type: 'line',
          source: 'landownership',
          'source-layer': 'public_landownership',
          layout: {
            'line-cap': 'round',
            'line-join': 'round'
          },
          paint: {
            'line-opacity': 1,
            'line-color': '#AE9BCE',
            'line-width': 1
          },
          filter: ['==', 'surface_mgmt_agency', 'US Fish and Wildlife Service']
        })

        // bia
        map.addLayer({
          id: 'landownership-bia-fill',
          type: 'fill',
          source: 'landownership',
          'source-layer': 'public_landownership',
          paint: {
            'fill-opacity': 0.25,
            'fill-color': '#FEA955'
          },
          filter: ['==', 'surface_mgmt_agency', 'Bureau of Indian Affairs']
        })
        map.addLayer({
          id: 'landownership-bia-outline',
          type: 'line',
          source: 'landownership',
          'source-layer': 'public_landownership',
          layout: {
            'line-cap': 'round',
            'line-join': 'round'
          },
          paint: {
            'line-opacity': 1,
            'line-color': '#EDC4A5',
            'line-width': 1
          },
          filter: ['==', 'surface_mgmt_agency', 'Bureau of Indian Affairs']
        })

        // other federal
        map.addLayer({
          id: 'landownership-other-fill',
          type: 'fill',
          source: 'landownership',
          'source-layer': 'public_landownership',
          paint: {
            'fill-opacity': 0.25,
            'fill-color': '#EDC4A5'
          },
          filter: ['==', 'surface_mgmt_agency', 'Federal (other)']
        })
        map.addLayer({
          id: 'landownership-other-outline',
          type: 'line',
          source: 'landownership',
          'source-layer': 'public_landownership',
          layout: {
            'line-cap': 'round',
            'line-join': 'round'
          },
          paint: {
            'line-opacity': 1,
            'line-color': '#FEA955',
            'line-width': 1
          },
          filter: ['==', 'surface_mgmt_agency', 'Federal (other)']
        })

        // state & local
        map.addLayer({
          id: 'landownership-local-fill',
          type: 'fill',
          source: 'landownership',
          'source-layer': 'public_landownership',
          paint: {
            'fill-opacity': 0.25,
            'fill-color': '#96CDDF'
          },
          filter: [
            'any',
            ['==', 'surface_mgmt_agency', 'Local'],
            ['==', 'surface_mgmt_agency', 'State']
          ]
        })
        map.addLayer({
          id: 'landownership-local-outline',
          type: 'line',
          source: 'landownership',
          'source-layer': 'public_landownership',
          layout: {
            'line-cap': 'round',
            'line-join': 'round'
          },
          paint: {
            'line-opacity': 1,
            'line-color': '#96CDDF',
            'line-width': 1
          },
          filter: [
            'any',
            ['==', 'surface_mgmt_agency', 'Local'],
            ['==', 'surface_mgmt_agency', 'State']
          ]
        })

        // add hunt polygon to local data from props
        map.addSource('hunt', {
          type: 'geojson',
          data: this.geojson
        })
        // add fill layer of the hunt polygon
        map.addLayer({
          id: 'huntLayer',
          type: 'fill',
          source: 'hunt',
          layout: {},
          paint: {
            'fill-color': '#2e598a',
            'fill-opacity': 0.25
          }
        })
        // add the hunt unit polygons to local data from props
        map.addSource('hunt_units', {
          type: 'geojson',
          data: this.hunt_units
        })
        // add outline of hunt unit polygons
        map.addLayer({
          id: 'huntUnitsLayer-line',
          type: 'line',
          source: 'hunt_units',
          layout: {
            'line-cap': 'round',
            'line-join': 'round'
          },
          paint: {
            'line-opacity': 1,
            'line-color': '#f29645',
            'line-width': 2
          }
        })
        if (this.geojson) {
          // get coordinates from geojson multipolygon
          const coordinates = this.geojson.features[0].geometry.coordinates[0][0]
          // set bounds based on the coordinates from the multipolygon
          const bounds = coordinates.reduce(function (bounds, coord) {
            return bounds.extend(coord)
          }, new maplibregl.LngLatBounds(coordinates))
          // set the map bounds based on the bounds from the miltipolygon
          map.fitBounds(bounds, {
            padding: 20
          })
        } else {
          // get coordinates from geojson multipolygon
          const coordinates = this.hunt_units.features[0].geometry.coordinates[0][0]
          // set bounds based on the coordinates from the multipolygon
          const bounds = coordinates.reduce(function (bounds, coord) {
            return bounds.extend(coord)
          }, new maplibregl.LngLatBounds(coordinates))
          // set the map bounds based on the bounds from the miltipolygon
          map.fitBounds(bounds, {
            padding: 20
          })
        }
      })
    }
  }
}
</script>
