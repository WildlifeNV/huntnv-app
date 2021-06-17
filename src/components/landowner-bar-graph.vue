<template>
<div class="m-10 rounded-lg bg-white overflow-hidden shadow-lg">
    <div class="bg-white p-6">
      <div class="lg:flex lg:items-center lg:justify-between uppercase">
        <div v-if="results" class="flex-1 min-w-0 p-3">
          <h2 class="font-bold">Landownership Chart</h2>
          <bar-chart
            :data="results"
            :min="0"
            :max="1"
            xtitle="Precentage of owernship"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// see https://chartkick.com/vue
export default {
  props: ['results']
}
</script>
