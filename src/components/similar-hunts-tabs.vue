<template>
  <div>
    <div class="sm:hidden">
      <label
        for="tabs"
        class="sr-only"
      >
        Select a tab
      </label>
      <select
       id="tabs"
       name="tabs"
       class="capitalize block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option
          v-for="result in results"
          :key="result.species"
          :selected="result.current"
        >
          {{ result.species }} ({{ result.count }})
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200 uppercase">
        <div
          class="-mb-px flex space-x-2 uppercase"
          aria-label="Tabs"
        >
          <button
            @click="$emit('filter', result.species)"
            v-for="result in results" :key="result.species"
            :class="['border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 capitalize', 'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm capitalize']"
            :aria-current="result.current ? 'page' : undefined"
          >
            {{ result.species }}
            <span
              v-if="result.count"
              :class="['bg-gray-100 text-gray-900', 'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block']"
            >
              {{ result.count }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      results: null
    }
  },
  created () {
    this.setHunts()
  },
  methods: {
    setHunts () {
      const hunts = this.data.similar_hunts
      const data = {}
      for (const { species } of hunts) {
        data[species] = {
          species,
          count: data[species] ? data[species].count + 1 : 1
        }
      }
      const result = Object.values(data)
      this.results = result
    }
  }
}
</script>
