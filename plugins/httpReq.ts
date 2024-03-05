export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      // auth
      createLogin: async (body: {}) => {
        return await useApiReq('/api/authaccount/login', {
          method: 'POST',
          body,
        })
      },
      getDataList: async (query?: {}) => {
        const url = `/api/tourist`

        const { data, pending } = await useFetchApi(url, { query })

        return { data, pending }
      },
    },
  }
})
