import { computed, ref, shallowRef } from 'vue'
import { huntNvApi } from '../../lib/huntnv-client.js'
import {
  sortHuntYear,
  pickHuntData,
  pickHarvestData,
  pickBonusPoints,
  pickDrawData,
  drawTableData,
  harvestTableData,
  bpTableData,
  relatedHuntsData,
  isDepredation
} from '../../lib/data-utils.js'

const loading = ref(false)
const data = shallowRef()
const error = shallowRef()

const getHunt = (id) => {
  loading.value = true

  huntNvApi
    .getHunt(id)
    .then((response) => {
      data.value = response.data
      error.value = null
    })
    .catch((e) => {
      data.value = null
      error.value = e
    })
    .finally(() => {
      loading.value = false
    })
}

// computed props to check if hunt has data
const hasHarvestData = computed(() => !!data.value.harvest_data)
const hasDrawData = computed(() => !!data.value.draw_data)
const hasBpData = computed(() => !!data.value.bonus_points)
const hasHuntRestriction = computed(() => data.value.hunt_restrictions !== null)
const isNew = computed(() => data.value.is_new)
const isDepredationHunt = computed(() => isDepredation(data.value.hunt_name))

// computed props for hero stats
const pctPublicLand = computed(() => {
  return parseInt(data.value.public_land_pct) || 'N/A'
})

const lastQuota = computed(() => {
  return data.value.quota || 'N/A'
})

const lastApps = computed(() => {
  const x = data.value.draw_data.filter((d) => d.hunt_year === 2021)
  return x[0].n_applications || 'N/A'
})

const lastHarvest = computed(() => {
  if (!data.value.harvest_data) return 'N/A'

  const x = data.value.harvest_data.filter((d) => d.hunt_year === 2021)
  return parseInt(x[0].harvest_rate * 100) || 'N/A'
})

const drawDifficulty = computed(() => {
  const x = data.value.draw_data.filter((d) => d.hunt_year === 2021)
  return x[0].draw_difficulty_ratio || 'N/A'
})

// computed props for figures
const tidyHuntData = computed(() => {
  const tidy = data.value?.draw_data
    .sort(sortHuntYear('asc'))
    .map(pickHuntData)
    .flat()

  return tidy
})

const tidyHarvestData = computed(() =>
  data.value?.harvest_data
    .sort(sortHuntYear('asc'))
    .map(pickHarvestData(data.value?.species))
    .flat()
)

const tidyBonusPoints = computed(() => {
  const apps = data.value?.draw_data.filter((d) => d.hunt_year === 2021)[0]
    .n_applications

  const tidy = data.value?.bonus_points
    .filter((d) => d.hunt_year === 2021)
    .sort((a, b) => a.bonus_points - b.bonus_points)
    .map(pickBonusPoints(apps))
    .flat()

  return tidy
})

const tidyDrawData = computed(() => {
  return data.value?.draw_data
    .sort(sortHuntYear('asc'))
    .map(pickDrawData)
    .flat()
})

// computed props for tables
const drawTable = computed(() => drawTableData(data.value?.draw_data))
const harvestTable = computed(() => harvestTableData(data.value?.harvest_data))
const bpTable = computed(() => bpTableData(data.value?.bonus_points) ?? null)
const relatedHuntTable = computed(() =>
  relatedHuntsData([
    ...(data.value.related_hunts.hunts || []),
    ...(data.value.similar_hunts.hunts || [])
  ])
)

export function useHuntId() {
  return {
    loading,
    data,
    error,
    getHunt,

    // computed props: has data
    hasHarvestData,
    hasDrawData,
    hasBpData,
    hasHuntRestriction,
    isNew,
    isDepredationHunt,

    // computed props: used for hero stats
    pctPublicLand,
    lastQuota,
    lastApps,
    lastHarvest,
    drawDifficulty,

    // computed props: used for hunt figures & tables
    tidyHuntData,
    tidyHarvestData,
    tidyBonusPoints,
    tidyDrawData,

    // computed props: used for tables
    drawTable,
    harvestTable,
    bpTable,
    relatedHuntTable
  }
}
