import { omit } from './objects.js'

export const drawDifficultyToStr = (v, abbr = true) => {
  if (!v) return null

  const mapper = {
    1: ['VH', 'Very Hard'],
    2: ['H', 'Hard'],
    3: ['M', 'Moderate'],
    4: ['E', 'Easier'],
    5: ['VE', 'Easiest']
  }

  return mapper[v][abbr ? 0 : 1] || 'N/A'
}

export const toPercent = (v) => {
  if (!v) return null

  const p = v * 100
  return `${p.toFixed(0)}%`
}

export const sortHuntYear = (direction) => (f, s) => {
  if (direction === 'desc') {
    return s.hunt_year - f.hunt_year
  } else {
    return f.hunt_year - s.hunt_year
  }
}

const groupBy = (list, accessor) => {
  const map = new Map()
  list.forEach((item) => {
    const key = accessor(item)
    const collection = map.get(key)
    if (!collection) {
      map.set(key, [item])
    } else {
      collection.push(item)
    }
  })

  let out = {}
  map.forEach((v, k) => {
    out[k] = {
      total: v.length,
      values: v
    }
  })

  return out
}

export const pickHuntData = (d) => {
  return [
    {
      hunt_year: d.hunt_year,
      metric: 'Apps',
      value: d.n_applications
    },
    {
      hunt_year: d.hunt_year,
      metric: 'Quota',
      value: d.n_successful_applications
    }
  ]
}

const matchSpeciesMaturity = (species) => {
  const speciesMatcher = {
    antelope: 'length_or_greater',
    'california bighorn sheep': 'age_or_greater',
    elk: 'length_or_greater',
    'mountain goat': '',
    'mule deer': 'points_or_greater',
    'nelson (desert) bighorn sheep': 'age_or_greater',
    'rocky mountain bighorn sheep': 'age_or_greater'
  }

  return speciesMatcher[species]
}

export const pickHarvestData = (species) => (d) => {
  const maturity = matchSpeciesMaturity(species)

  return [
    {
      hunt_year: d.hunt_year,
      metric: 'Harvest %',
      value: (d.harvest_rate * 100).toFixed(0)
    },
    {
      hunt_year: d.hunt_year,
      metric: 'Maturity %',
      value: (d[maturity] * 100).toFixed(0)
    }
  ]
}

export const pickBonusPoints = (apps) => (d) => {
  return [
    {
      bp: d.bonus_points,
      metric: '% Apps',
      value: Number(((d.n_applications / apps) * 100).toFixed(2)) || 0
    },
    {
      bp: d.bonus_points,
      metric: '% Drawn',
      value: Number(((d.n_successful / d.n_applications) * 100).toFixed(2)) || 0
    }
  ]
}

export const pickDrawData = (d) => {
  return [
    {
      hunt_year: d.hunt_year,
      metric: 'Rank',
      value: d.draw_difficulty_rank
    },
    {
      hunt_year: d.hunt_year,
      metric: 'BP',
      value: d.median_bp_of_successful_applications
    }
  ]
}

export const drawTableData = (data) => {
  const fields = [
    { field: 'hunt_year', label: 'Hunt Year' },
    { field: 'n_successful_applications', label: 'Qutoa' },
    { field: 'n_applications', label: 'Apps' },
    { field: 'n_first_choice_apps', label: '1st Choice' },
    { field: 'n_second_choice_apps', label: '2nd Choice' },
    { field: 'n_third_choice_apps', label: '3rd Choice' },
    { field: 'n_fourth_choice_apps', label: '4th Choice' },
    { field: 'n_fifth_choice_apps', label: '5th Choice' },
    { field: 'median_bp_of_successful_applications', label: 'Median BP' },
    { field: 'draw_difficulty_ratio', label: 'Draw Rank' },
    { field: 'draw_difficulty_qtile', label: 'Draw Difficulty' }
  ]
  const rows = data
    .map((d) => omit(d, 'id'))
    .map((d) => ({
      ...d,
      draw_difficulty_qtile: drawDifficultyToStr(d.draw_difficulty_qtile, false)
    }))
    .sort(sortHuntYear('desc'))

  return { fields, rows }
}

export const harvestTableData = (data) => {
  if (!data) return null

  const fields = [
    { field: 'hunt_year', label: 'Hunt Year' },
    { field: 'hunters_afield', label: 'Hunters Afield' },
    { field: 'effort_days', label: 'Effort Days' },
    { field: 'hunt_days', label: 'Hunt Days' },
    { field: 'harvest_rate', label: 'Harvest Rate' },
    { field: 'successful_hunters', label: '# Harvested' },
    { field: 'points_or_greater', label: '>= Points' },
    { field: 'length_or_greater', label: '>= Length' },
    { field: 'age_or_greater', label: '>= Age' },
    { field: 'bc_or_greater', label: '>= BC Score' },
    { field: 'hunter_satisfaction', label: 'Satisfaction' }
  ]
  const rows = data
    .map((d) => omit(d, ['id']))
    .map((d) => ({
      ...d,
      harvest_rate: toPercent(d.harvest_rate),
      points_or_greater: toPercent(d.points_or_greater),
      length_or_greater: toPercent(d.length_or_greater),
      age_or_greater: toPercent(d.age_or_greater),
      bc_or_greater: toPercent(d.bc_or_greater)
    }))
    .sort(sortHuntYear('desc'))

  return { fields, rows }
}

export const bpTableData = (data) => {
  if (!data) return null

  const huntYears = [...new Set(data.map((d) => d.hunt_year))]
  const rows = huntYears
    .map((y) => {
      return data
        .filter((d) => d.hunt_year === y)
        .reduce(
          (p, c) => {
            return { ...p, [c.bonus_points]: c.n_applications }
          },
          { hunt_year: y }
        )
    })
    .sort(sortHuntYear('desc'))

  const bpFields = Object.keys(omit(rows[0], 'hunt_year')).map((k) => {
    return { field: `${k}`, label: `${k}` }
  })
  const fields = [{ field: 'hunt_year', label: 'Hunt Year' }, ...bpFields]

  return { fields, rows }
}

export const relatedHuntsData = (data) => {
  data = data.map((d) => ({
    ...d,
    harvest_rate: toPercent(d.harvest_rate),
    draw_difficulty_qtile: drawDifficultyToStr(d.draw_difficulty_qtile, false)
  }))
  const grouped = groupBy(data, (d) => d.species)

  return grouped
}

export const isDepredation = (huntName) => {
  const answer = huntName?.includes('depredation') ?? null
  console.log({ huntName, answer })
  return answer
}
