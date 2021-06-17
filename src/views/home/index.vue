<template>
  <div class='bg-white w-full overflow-y-scroll'>
    <div class="flex space-x-2">
      <div class="w-12 h-12 bg-oxford-50">50</div>
      <div class="w-12 h-12 bg-oxford-100">100</div>
      <div class="w-12 h-12 bg-oxford-200">200</div>
      <div class="w-12 h-12 bg-oxford-300">300</div>
      <div class="w-12 h-12 bg-oxford-400">400</div>
      <div class="w-12 h-12 bg-oxford-500">500</div>
      <div class="w-12 h-12 bg-oxford-600">600</div>
      <div class="w-12 h-12 bg-oxford-700">700</div>
      <div class="w-12 h-12 bg-oxford-800">800</div>
      <div class="w-12 h-12 bg-oxford-900">900</div>
    </div>
    <div class="flex space-x-2 mt-2">
      <div class="w-12 h-12 bg-olive-50">50</div>
      <div class="w-12 h-12 bg-olive-100">100</div>
      <div class="w-12 h-12 bg-olive-200">200</div>
      <div class="w-12 h-12 bg-olive-300">300</div>
      <div class="w-12 h-12 bg-olive-400">400</div>
      <div class="w-12 h-12 bg-olive-500">500</div>
      <div class="w-12 h-12 bg-olive-600">600</div>
      <div class="w-12 h-12 bg-olive-700">700</div>
      <div class="w-12 h-12 bg-olive-800">800</div>
      <div class="w-12 h-12 bg-olive-900">900</div>
    </div>
    <div class="flex space-x-2 mt-2">
      <div class="w-12 h-12 bg-saffron-50">50</div>
      <div class="w-12 h-12 bg-saffron-100">100</div>
      <div class="w-12 h-12 bg-saffron-200">200</div>
      <div class="w-12 h-12 bg-saffron-300">300</div>
      <div class="w-12 h-12 bg-saffron-400">400</div>
      <div class="w-12 h-12 bg-saffron-500">500</div>
      <div class="w-12 h-12 bg-saffron-600">600</div>
      <div class="w-12 h-12 bg-saffron-700">700</div>
      <div class="w-12 h-12 bg-saffron-800">800</div>
      <div class="w-12 h-12 bg-saffron-900">900</div>
    </div>
    <div class="flex space-x-2 mt-2">
      <div class="w-12 h-12 bg-blue-50">50</div>
      <div class="w-12 h-12 bg-blue-100">100</div>
      <div class="w-12 h-12 bg-blue-200">200</div>
      <div class="w-12 h-12 bg-blue-300">300</div>
      <div class="w-12 h-12 bg-blue-400">400</div>
      <div class="w-12 h-12 bg-blue-500">500</div>
      <div class="w-12 h-12 bg-blue-600">600</div>
      <div class="w-12 h-12 bg-blue-700">700</div>
      <div class="w-12 h-12 bg-blue-800">800</div>
      <div class="w-12 h-12 bg-blue-900">900</div>
    </div>
    <pre><code>{{ hunts }}</code></pre>
  </div>
</template>

<script>
// import api services
import { getHunts } from '@/services/hunt-services.js'

export default {
  name: 'Home',
  components: {},
  data () {
    return {
      hunts: null
    }
  },
  created () {
    getHunts().then((response) => {
      this.hunts = response.data
    })
  }
}
</script>
