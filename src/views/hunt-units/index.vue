<template>
  <div class="p-8 overflow-y-auto">
    <div class=" flex space-x-4 py-4">
      <h1 class="font-bold text-3xl">UNIT 011</h1>
      <span>Antelope</span>
      <span>Bighorn Sheep</span>
      <span>Mule Deer</span>
    </div>
    <hu-information-card class="h-auto w-auto" />
    <hu-stats class="py-4" />
  </div>
</template>

<script>
import HuInformationCard from '@/views/hunt-units/hu-information-card.vue'
import HuStats from '@/views/hunt-units/hu-stats.vue'

export default {
  name: 'HuntUnits',
  components: {
    // vue components
    HuInformationCard,
    HuStats
  }
}
</script>
