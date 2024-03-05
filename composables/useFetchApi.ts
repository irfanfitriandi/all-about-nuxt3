import type { UseFetchOptions } from '#app'
import { defu } from 'defu'

export default async <T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {},
) => {
  const userAuth = useCookie('token')

  const defaults: UseFetchOptions<T> = {
    baseURL: '/api',
    // set user token if connected
    headers: userAuth.value
      ? { Authorization: `Bearer ${userAuth.value}` }
      : {},
  }

  const params = defu(options, defaults)

  const { data, refresh, error, pending } = await useFetch(url, params)

  if (error.value) {
    throw new Error(error.value as any)
    // throw createError(error.value as any)
  }

  return { data, pending, refresh }
}
