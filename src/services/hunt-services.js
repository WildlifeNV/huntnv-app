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

export {
  getHunts,
  getHunt
}
