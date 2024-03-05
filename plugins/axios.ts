import axios from 'axios'

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()
  const userAuth = useCookie('token')

  const token = userAuth.value

  axios.defaults.withCredentials = false
  axios.defaults.baseURL = config.public.apiUrl
  axios.defaults.headers.common.Authorization = 'Bearer ' + token

  return {
    provide: {
      axios,
    },
  }
})
