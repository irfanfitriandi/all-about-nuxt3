export default defineNuxtRouteMiddleware((to) => {
  if (process.server) {
    return
  }

  const whitelistedPaths = ['/login']

  if (!whitelistedPaths.includes(to.path) && !to.path.startsWith('/api')) {
    const authCookie = useCookie<string>('auth')
    const token = authCookie.value

    if (!token) {
      return navigateTo('/login')
    }
  }
})
