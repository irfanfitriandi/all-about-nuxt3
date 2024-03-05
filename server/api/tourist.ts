export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseURL = config.apiUrl
  const url = baseURL + event.path.replace('/api', '')
  const query = getQuery(event)
  const headers: HeadersInit = new Headers()

  headers.set('Authorization', getHeader(event, 'Authorization') as string)

  const res = await $fetch(url, {
    query,
    headers,
  })

  return res
})
