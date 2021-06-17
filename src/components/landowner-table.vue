<template>
  <div class="m-10 rounded-lg bg-white overflow-hidden shadow-lg">
    <div class="bg-white p-6">
      <div class="lg:flex lg:items-center lg:justify-between uppercase">
        <div v-if="hunt" class="flex-1 min-w-0 p-3">
            <h3 class="font-bold text-gray-900">Landownership Data</h3>
            <dl v-for="owner in hunt.landownership" :key="owner.hunt_id">
              <div class="py-3 flex justify-between text-sm font-medium mt-2 border-t border-gray-200">
                <dt class="text-gray-500">{{ owner.surface_mgmt_agency}}</dt>
                <dd class="text-gray-900">{{ formatAcres(owner.area) }} ({{ formatPrecentage(owner.coverage) }}% )</dd>
              </div>
            </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandownerTable',
  props: ['hunt'],
  setup () {
    function formatAcres (areaAcres) {
      const acres = areaAcres / 4047
      return acres.toFixed(2)
    }

    function formatPrecentage (areaPrecent) {
      const precent = areaPrecent * 100
      return precent.toFixed(2)
    }

    return {
      formatAcres,
      formatPrecentage
    }
  }
}
</script>
