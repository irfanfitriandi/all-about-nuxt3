export default defineNuxtRouteMiddleware((to) => {
  if (process.server) {
    return
  }

  const whitelistedPaths = ['/login', '/register']

  if (!whitelistedPaths.includes(to.path) && !to.path.startsWith('/api')) {
    const auth = useAuthStore()
    const token = auth.token

    if (!token) {
      return navigateTo('/login')
    }
  }
})
