export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      getDataList: async (query?: {}) => {
        const url = `/api/tourist`

        const { data, pending } = await useFetchApi(url, { query })

        return { data, pending }
      },
    },
  }
})
