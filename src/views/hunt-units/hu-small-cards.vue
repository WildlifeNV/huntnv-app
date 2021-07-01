<template>
  <div>
    <dl class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div class="px-4 py-5 bg-gray-50 shadow-md rounded-md overflow-hidden sm:p-6">
        <dt class="flex text-lg font-semibold text-gray-900">
          <KeyIcon class="flex-shrink-0 mr-2 h-8 w-8 text-gray-400" aria-hidden="true" />
          Hunter Access
        </dt>
        <dd class="mt-1 pl-10 text-sm font-medium text-gray-500">
          Travel east from Alturas and Cedarville, California on Highway 299. From Reno and Gerlach, Nevada, travel north on Highway 447. Roads in the unit range from high standard dirt, like Highway 299, to jeep trails. Many of the hunting areas are only accessible by four-wheel drive. Tire chains, extra gas, and extra spare tires are recommended.
        </dd>
      </div>
      <div class="px-4 py-5 bg-gray-50 shadow-md rounded-md overflow-hidden sm:p-6">
        <dt class="flex text-lg font-semibold text-gray-900">
          <SunIcon class="flex-shrink-0 mr-2 h-8 w-8 text-gray-400" aria-hidden="true" />
          Weather and Climate
        </dt>
        <dd class="mt-1 pl-10 text-sm font-medium text-gray-500">
          Precipitation in this area comes primarily in the form of snowfall during the months of November through March. Amounts of precipitation range from 8 inches on the valley floors to 18 inches at the highest peaks. Weather during the October hunting season is typically dry for the first two weeks with chances of snowstorms and accumulations of snow increasing during the last half of the season.
        </dd>
      </div>
      <div class="px-4 py-4 bg-gray-50 shadow-md rounded-md overflow-hidden sm:p-6">
        <dt class="flex text-lg font-semibold text-gray-900">
          <InformationCircleIcon class="flex-shrink-0 mr-2 h-8 w-8 text-gray-400" aria-hidden="true" />
          Facilities and Services
        </dt>
        <dd class="mt-1 pl-10 text-sm font-medium text-gray-500">
          There is a small hospital in Cedarville, California. Fuel, food, vehicle repair facilities, and motels are available in Cedarville and Gerlach. There are no developed campgrounds. Hunters typically take advantage of tree cover and or perennial water sources adjacent to the area that they are hunting. Tent-type camps are recommended. Trailer or RV-type hunters are confined to better road systems in the valley floors and are required to travel farther each day to reach their hunt area. In most cases, drinking water must be hauled from home or the nearest town.
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
import { KeyIcon, SunIcon, InformationCircleIcon } from '@heroicons/vue/outline'

export default {
  components: {
    KeyIcon,
    SunIcon,
    InformationCircleIcon
  }
}
</script>
