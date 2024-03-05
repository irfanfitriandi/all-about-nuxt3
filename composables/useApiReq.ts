import type { UseFetchOptions } from '#app'
import { defu } from 'defu'

export default async <T>(url: string, options: UseFetchOptions<T> = {}) => {
  const defaults: UseFetchOptions<T> = {}

  const params = defu(options, defaults)

  const res = await $fetch(url, params as any).catch((err) => {
    throw new Error(err)
  })

  return res as T
}
