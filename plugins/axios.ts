import axios from 'axios'

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()
  const auth = useAuthStore()

  axios.defaults.withCredentials = false
  axios.defaults.baseURL = config.public.apiUrl
  axios.defaults.headers.common.Authorization = 'Bearer ' + auth.token

  return {
    provide: {
      axios,
    },
  }
})
