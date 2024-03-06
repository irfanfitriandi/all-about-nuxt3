export const useAuthStore = defineStore('auth', () => {
  const { $createLogin } = useNuxtApp()
  const cookieAuth = useCookie('token')
  // state
  const token = ref('')
  const profileInfo = reactive({
    Id: '',
    Name: '',
    Email: '',
  })

  // actions
  const login = async (body: {}) => {
    await $createLogin(body).then((res: any) => {
      const t = res.data.Token
      token.value = t
      cookieAuth.value = btoa(t)
      profileInfo.Id = res.data.Id
      profileInfo.Name = res.data.Name
      profileInfo.Email = res.data.Email
      navigateTo('/')
    })
  }
  const register = async (body: {}) => {
    await useApiReq('/api/authaccount/registration', {
      method: 'POST',
      body,
    }).then((res) => {
      console.log(res)
    })
  }

  if (!token.value && cookieAuth.value) {
    token.value = atob(cookieAuth.value)
  }
  return { token, login, register }
})
