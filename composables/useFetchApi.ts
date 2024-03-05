import type { UseFetchOptions } from '#app'
import { defu } from 'defu'

export default async <T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {},
) => {
  // const userAuth = useCookie('token')
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: '/api',
    // set user token if connected
    // headers: userAuth.value
    //   ? { Authorization: `Bearer ${userAuth.value}` }
    //   : {},
    headers: { Authorization: `Bearer ${config.public.apiToken}` },
  }

  const params = defu(options, defaults)

  const { data, refresh, error, pending } = await useFetch(url, params)

  if (error.value) {
    // throw new Error()
    throw createError(error.value as any)
  }

  return { data, pending, refresh }
}
