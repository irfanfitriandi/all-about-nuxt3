import axios from 'axios'

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()
  const token = config.public.apiToken

  axios.defaults.withCredentials = false
  axios.defaults.baseURL = config.public.apiUrl
  axios.defaults.headers.common.Authorization = 'Bearer ' + token

  return {
    provide: {
      axios,
    },
  }
})
