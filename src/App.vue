<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="h-screen flex bg-gray-50 overflow-hidden">
    <hnv-mobile-menu
      as="template"
      :navigation="navigation"
      :user="user"
      :mobile-menu-open="mobileMenuOpen"
      @toggle-menu="mobileMenuOpen = false"
    />

    <!-- Static sidebar for desktop -->
    <hnv-sidebar-nav as="template" :navigation="navigation" :user="user" />

    <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
      <!-- Mobile top navigation -->
      <hnv-mobile-navbar class="lg:hidden" @toggle-menu="mobileMenuOpen = true" />

      <main class="flex-1 flex overflow-hidden">
        <!-- <div class="flex-1 flex xl:overflow-hidden"> -->
          <router-view />
        <!-- </div> -->
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { BookmarkAltIcon, GlobeIcon, HomeIcon, ChartBarIcon, PresentationChartLineIcon } from '@heroicons/vue/outline'
import HnvSidebarNav from '@/components/hnv-sidebar-nav.vue'
import HnvMobileNavbar from '@/components/hnv-mobile-navbar.vue'
import HnvMobileMenu from '@/components/hnv-mobile-menu.vue'

const user = {
  name: 'Emily Selman',
  imageUrl:
    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}
const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon },
  { name: 'Map', href: '#', icon: GlobeIcon },
  { name: 'Hunts', href: '#', icon: BookmarkAltIcon },
  { name: 'Odds', href: '#', icon: ChartBarIcon },
  { name: 'Harvest', href: '#', icon: PresentationChartLineIcon }
]

export default {
  name: 'MapPage',
  components: {
    HnvSidebarNav,
    HnvMobileNavbar,
    HnvMobileMenu
  },
  setup () {
    const mobileMenuOpen = ref(false)

    return {
      user,
      navigation,
      mobileMenuOpen
    }
  }
}
</script>
