<template>
  <div class="flex-1 flex xl:overflow-hidden">
    <!-- map area -->
    <section
      aria-labelledby="primary-heading"
      class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last bg-olive-200"
    >
      <h1 id="primary-heading" class="sr-only">Map</h1>
      map
    </section>

    <!-- hunt cards and filters (hidden on smaller screens) -->
    <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
      <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-200 overflow-y-scroll overflow-x-hidden">
        <p v-if="loading">LOADING...</p>
        <pre v-else><code>{{ hunts }}</code></pre>
      </div>
    </aside>
  </div>
</template>

<script>
import { getHunts } from '@/services/hunt-services.js'

export default {
  data () {
    return {
      hunts: null,
      loading: true
    }
  },
  async created () {
    this.loading = true

    const { data } = await getHunts()
    this.hunts = data

    this.loading = false
  }
}
</script>
