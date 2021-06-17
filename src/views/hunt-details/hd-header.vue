<template>
  <div class="m-10 rounded-lg bg-white overflow-hidden shadow-lg">
    <div class="bg-white p-6">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="sm:flex sm:space-x-5">
          <div class="lg:flex lg:items-center lg:justify-between uppercase">
            <div v-if="hunt" class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                {{ hunt.display_name }}
              </h2>
              <div class="pt-2 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  <IdentificationIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {{ hunt.draw_type }}
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  <img src="@/assets/images/aim.png" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-200" aria-hidden="true"/>
                  {{ hunt.weapon }}
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {{ hunt.season_dates }}
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  <ArrowsExpandIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {{ formatAcres(hunt.landownership[0].hunt_area) }} ACRES
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                  <TagIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {{ hunt.quota }}
                </div>
              </div>
              <div class="mt-5 flex items-center text-sm text-gray-500">
                <p>Units: </p>
                  <span v-for="units in hunt.units" :key="units.hunt_id" class="relative z-0 inline-flex shadow-sm rounded-md">
                    <button type="button" class="relative inline-flex items-center mx-2 px-4 py-2 rounded border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                      {{ units }}
                    </button>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CalendarIcon, IdentificationIcon, ArrowsExpandIcon, TagIcon } from '@heroicons/vue/outline'

export default {
  name: 'hd-sidebar',
  components: {
    CalendarIcon,
    IdentificationIcon,
    ArrowsExpandIcon,
    TagIcon
  },
  props: ['hunt'],
  setup () {
    function formatAcres (area) {
      const acres = area / 4047
      return acres.toFixed(2)
    }

    return {
      formatAcres
    }
  }
}
</script>
