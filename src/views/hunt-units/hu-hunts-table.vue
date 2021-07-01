<template>
  <div class="bg-gray-50 p-6 rounded-md shadow-md">
    <h3 class="font-bold text-xl text-black uppercase pb-2">Hunts</h3>
    <div class="rounded-md">
      <table v-if="huntUnit" class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th scope="col" class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Species
            </th>
            <th scope="col" class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Draw Type
            </th>
            <th scope="col" class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Weapon
            </th>
            <th scope="col" class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Season Dates
            </th>
            <th scope="col" class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Units
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 capitalize">
            <tr v-for="i in huntUnit.hunts" :key="i.hunt_id">
              <td class="px-2 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                {{ i.display_name }}
              </td>
              <td class="px-2 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                {{ i.draw_type }}
              </td>
              <td class="px-2 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                {{ i.weapon }}
              </td>
              <td class="px-2 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                {{ i.season_dates }}
              </td>
              <td class="px-2 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                {{ i.unit_group }}
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HuntUnitsTable',
  props: ['huntUnit']
}
</script>

<style scoped>
#table_body {
  height: 50vh;
}
</style>
