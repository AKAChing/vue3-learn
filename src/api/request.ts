import axios from 'axios'
import { BASE_URL } from './config'
export const instance = axios.create({
  baseURL: BASE_URL,
  method: 'get',
  timeout: 1000,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Headers": "Content-Type, Content-Lengh, Authorization, Accept,X-Requested-With",
  //   "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  // },
  // proxy: {
  //   protocol: 'http',
  //   host: '127.0.0.1',
  //   port: 3000,
  //   auth: {
  //     username: 'mikeymike',
  //     password: 'rapunz3l'
  //   }
  // },
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default instance