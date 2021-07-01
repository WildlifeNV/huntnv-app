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
            'fill-opacity': 0.2
          }
        })
        // add the hunt unit polygons to local data from props
        map.addSource('hunt_units', {
          type: 'geojson',
          data: this.hunt_units
        })
        // add fill of hunt unit polygons
        map.addLayer({
          id: 'huntUnitsLayer-fill',
          type: 'fill',
          source: 'hunt_units',
          layout: {},
          paint: {
            'fill-color': '#fff',
            'fill-opacity': 0
          }
        })
        // add outline of hunt unit polygons
        map.addLayer({
          id: 'huntUnitsLayer-line',
          type: 'line',
          source: 'hunt_units',
          layout: {},
          paint: {
            'line-color': 'orange'
          }
        })
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
      })
      // // on click create popup at cursor location
      // map.on('click', 'huntUnitsLayer-fill', function (e) {
      //   new maplibregl.Popup()
      //     .setLngLat(e.lngLat)
      //     .setHTML(e.features[0].properties.display_name)
      //     .addTo(map)
      // })
      // // change the cursor to a pointer when the mouse is over the states layer.
      // map.on('mouseenter', 'huntUnitsLayer-fill', function () {
      //   map.getCanvas().style.cursor = 'pointer'
      // })
      // // change it back to a pointer when it leaves.
      // map.on('mouseleave', 'huntUnitsLayer-fill', function () {
      //   map.getCanvas().style.cursor = ''
      // })
    }
  }
}
</script>
