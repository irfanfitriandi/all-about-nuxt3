export default defineEventHandler(async (event) => {
  // url
  const config = useRuntimeConfig()
  const targetPath = event.path.replace('/api', '')
  const url = config.apiUrl + targetPath

  // reqOpts
  const method = event.method
  const body = method === 'GET' ? undefined : await readBody(event)
  const query = getQuery(event)
  const headers: HeadersInit = new Headers()
  headers.set('Accept', 'application/json')

  if (method === 'POST') {
    headers.set('Content-Type', 'application/json')
  } else {
    headers.set('Content-Type', getHeader(event, 'Content-Type') as string)
  }
  headers.set('Authorization', getHeader(event, 'Authorization') as string)

  return $fetch(url, {
    method,
    query,
    headers,
    body,
  })
})
