<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50 overflow-hidden rounded-md shadow-md">
    <div class="px-4 py-5 sm:px-6 bg-oxford-500">
      <h3 class="text-lg leading-6 font-medium text-gray-200">
        General Information
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

export default {
  components: {
    LocationMarkerIcon,
    PhotographIcon,
    GlobeIcon
  }
}
</script>
