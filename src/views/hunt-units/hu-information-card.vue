<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50 overflow-hidden rounded-md shadow-md">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Hunt Unit Information
      </h3>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="flex text-sm font-medium text-gray-500">
             <LocationMarkerIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Location
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Unit 011 is located in the extreme northwest corner of Nevada. This hunt area is bounded on the north by the Oregon border, on the west by the California - Nevada state line, on the south by the Lost Creek Road, and on the east by Highway 34 and the Sheldon National Antelope Refuge boundary. See unit descriptions in the Nevada Hunt Book.
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="flex text-sm font-medium text-gray-500">
            <PhotographIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Terrain
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            The terrain is typical of the Great Basin and can best be described as rugged with broken rims, plateaus and small mountain ranges running in a north - south direction. Much of the area is volcanic in origin, making vehicular traffic slow and rough.
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class=" flex text-sm font-medium text-gray-500">
            <GlobeIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Vegetation
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Mountain mahogany, bitterbrush, big sagebrush, and juniper characterize upper elevation habitat. The wetter sites, near perennial water sources, and/or northeast slope pockets, typically have small aspen stands associated with them. When compared to areas in eastern Nevada, vegetation in this hunt area is considered to be fairly open.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { LocationMarkerIcon, PhotographIcon, GlobeIcon } from '@heroicons/vue/outline'

const stats = [
  { name: 'Hunter Access', stat: 'Travel east from Alturas and Cedarville, California on Highway 299. From Reno and Gerlach, Nevada, travel north on Highway 447. Roads in the unit range from high standard dirt, like Highway 299, to jeep trails. Many of the hunting areas are only accessible by four-wheel drive. Tire chains, extra gas, and extra spare tires are recommended.' },
  { name: 'Weather and Climate', stat: 'Precipitation in this area comes primarily in the form of snowfall during the months of November through March. Amounts of precipitation range from 8 inches on the valley floors to 18 inches at the highest peaks. Weather during the October hunting season is typically dry for the first two weeks with chances of snowstorms and accumulations of snow increasing during the last half of the season.' },
  { name: 'Facilities and Services', stat: 'There is a small hospital in Cedarville, California. Fuel, food, vehicle repair facilities, and motels are available in Cedarville and Gerlach. There are no developed campgrounds. Hunters typically take advantage of tree cover and or perennial water sources adjacent to the area that they are hunting. Tent-type camps are recommended. Trailer or RV-type hunters are confined to better road systems in the valley floors and are required to travel farther each day to reach their hunt area. In most cases, drinking water must be hauled from home or the nearest town.' }
]

export default {
  components: {
    LocationMarkerIcon,
    PhotographIcon,
    GlobeIcon
  },
  setup () {
    return {
      stats
    }
  }
}
</script>
