import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

import './assets/tailwind.css'
import '../node_modules/maplibre-gl/dist/maplibre-gl.css'

createApp(App).use(router).use(VueChartkick).mount('#app')
