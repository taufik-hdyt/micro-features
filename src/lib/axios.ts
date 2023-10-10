import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://api.dazelpro.com/mobile-legends'
})