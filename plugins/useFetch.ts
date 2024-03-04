export default defineNuxtPlugin((_nuxtApp) => {
  // You can alternatively use this format, which comes with automatic type support
  return {
    provide: {
      getDataList: async (query?: {}) => {
        const token = ''
        const url = `/api/tourist`
        const headers = {
          Authorization: 'Bearer ' + token,
        }

        const { data, pending, error, status } = await useFetch(url, {
          query,
          headers,
        })

        return { data, pending, error, status }
      },
    },
  }
})
