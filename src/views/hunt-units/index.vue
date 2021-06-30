<template>
  <div class="p-8 overflow-y-auto">
    <div class=" flex space-x-4 py-4">
      <h1 class="font-bold text-4xl text-saffron-500">UNIT 011</h1>
      <span class="py-2">Antelope</span>
      <span class="py-2">Bighorn Sheep</span>
      <span class="py-2">Mule Deer</span>
    </div>
    <hu-stats class="py-4" />
    <hu-main-card class="h-auto w-auto" />
    <hu-small-card class="py-4" />
  </div>
</template>

<script>
import HuMainCard from '@/views/hunt-units/hu-main-card.vue'
import HuSmallCard from '@/views/hunt-units/hu-small-cards.vue'
import HuStats from '@/views/hunt-units/hu-stats.vue'

export default {
  name: 'HuntUnits',
  components: {
    // vue components
    HuMainCard,
    HuSmallCard,
    HuStats
  }
}
</script>
