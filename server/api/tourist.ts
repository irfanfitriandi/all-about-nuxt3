export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseURL = String(config.apiUrl.replace('/api', ''))
  const query = getQuery(event)
  const headers: HeadersInit = new Headers()

  headers.set('Authorization', getHeader(event, 'Authorization') as string)

  const res = await $fetch(event.path, {
    baseURL,
    query,
    headers,
  })

  return res
})
