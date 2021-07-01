<template>
  <div v-if="huntUnit" class="p-8 overflow-y-auto">
    <div class=" flex space-x-4 py-4">
      <h1 class="font-bold text-4xl text-saffron-500">Unit {{ huntUnit.display_name }}</h1>
      <span class="py-2">Antelope</span>
      <span class="py-2">Bighorn Sheep</span>
      <span class="py-2">Mule Deer</span>
    </div>
    <hu-stats class="py-4" />
    <div class="mt-4 grid grid-cols-1 lg:grid-cols-2 space-x-4">
      <hu-main-card class="col-span-1" />
      <hd-map :hunt_units="hunt_units" class="h-full col-span-1" />
    </div>
    <hu-small-card class="py-4" />
    <hu-hunts-table :huntUnit="huntUnit" />
  </div>
</template>

<script>
// import vue components
import HuMainCard from '@/views/hunt-units/hu-main-card.vue'
import HuSmallCard from '@/views/hunt-units/hu-small-cards.vue'
import HuStats from '@/views/hunt-units/hu-stats.vue'
import HdMap from '@/views/hunt-details/hd-map.vue'
import HuHuntsTable from '@/views/hunt-units/hu-hunts-table.vue'

// import api services
import { getHuntUnit, getHuntUnitFeatures } from '@/services/hunt-services.js'

export default {
  name: 'HuntUnits',
  props: ['id'],
  components: {
    // vue components
    HuMainCard,
    HuSmallCard,
    HuStats,
    HdMap,
    HuHuntsTable
  },
  data () {
    return {
      huntUnit: null,
      hunt_units: null
    }
  },
  async created () {
    // fetch huntUnit
    await getHuntUnit(this.id).then((response) => {
      this.huntUnit = response.data
    })
    // fetch hunt units
    await getHuntUnitFeatures(this.id).then((response) => {
      this.hunt_units = response.data
    })
  }
}
</script>
