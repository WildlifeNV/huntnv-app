import axios from 'axios'

const baseURL = process.env.VUE_APP_API_URL

const apiClient = axios.create({
  baseURL: baseURL,
  withCredentials: false,
  headers: {
    Accpest: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getHunts = () => {
  return apiClient.get('/hunts')
}

const getHunt = (id) => {
  return apiClient.get(`/hunts/${id}`)
}

const getHuntFeature = (id) => {
  return apiClient.get(`/features/hunt_geometries/${id}.geojson`)
}

const getHuntUnit = (id) => {
  return apiClient.get(`/hunt-units/${id}`)
}

const getHuntUnitFeatures = (id) => {
  return apiClient.get(`/features/hunt_units.geojson?hunt_units=${id}`)
}

export {
  getHunts,
  getHunt,
  getHuntFeature,
  getHuntUnitFeatures,
  getHuntUnit
}
