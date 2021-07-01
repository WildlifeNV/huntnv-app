<template>
  <div>
    <dl class="grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div class="flex px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
        <ArrowsExpandIcon class="flex-shrink-0 mr-6 my-2 h-10 w-10 text-gray-400" aria-hidden="true" />
        <div class="">
          <dt class="flex text-sm font-medium text-gray-500 truncate">
            Total Square Miles
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">
            {{ setSquareMiles }}
          </dd>
        </div>
      </div>
      <div class="flex px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
        <ChartPieIcon class="flex-shrink-0 mr-6 my-2 h-10 w-10 text-gray-400" aria-hidden="true" />
        <div class="">
          <dt class="flex text-sm font-medium text-gray-500 truncate">
            Precentage Public Land
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">
            58.16%
          </dd>
        </div>
      </div>
      <div class="flex px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
        <SelectorIcon class="flex-shrink-0 mr-6 my-2 h-10 w-10 text-gray-400" aria-hidden="true" />
        <div class="">
          <dt class="flex text-sm font-medium text-gray-500 truncate">
            Elevation Range
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">
            5,000 - 7,500
          </dd>
        </div>
      </div>
    </dl>
  </div>
</template>

<script>
import { ArrowsExpandIcon, ChartPieIcon, SelectorIcon } from '@heroicons/vue/outline'

export default {
  name: 'HdStats',
  props: ['huntUnit'],
  components: {
    ArrowsExpandIcon,
    ChartPieIcon,
    SelectorIcon
  },
  computed: {
    setSquareMiles () {
      const area = (this.huntUnit.area / 2590000)
      return area.toFixed(2)
    }
  }
}
</script>
