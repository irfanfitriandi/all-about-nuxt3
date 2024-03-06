import type { UseFetchOptions } from '#app'
import { defu } from 'defu'

export default async <T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {},
) => {
  const token = useAuthStore().token

  const defaults: UseFetchOptions<T> = {
    baseURL: '/api',
    // set user token if connected
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  }

  const params = defu(options, defaults)

  const { data, refresh, error, pending } = await useFetch(url, params)

  if (error.value) {
    console.log(error.value)
    // throw new Error(error.value as any)
    // throw createError(error.value as any)
  }

  return { data, pending, refresh }
}
