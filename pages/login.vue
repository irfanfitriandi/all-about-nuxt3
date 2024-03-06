<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
definePageMeta({
  layout: 'auth',
})
const loading = ref(true)
const storeAuth = useAuthStore()

const formLogin = reactive({
  email: '',
  password: '',
})

const submitLogin = () => {
  storeAuth.login(formLogin).then(() => {
    navigateTo('/')
  })
}
onMounted(() => {
  loading.value = false
})
</script>

<template>
  <div v-if="loading" class="flex h-screen w-full items-center justify-center">
    Loading o o o
  </div>
  <div v-else class="flex h-screen w-full flex-col items-center justify-center">
    <NuxtLink to="/">gaz</NuxtLink>
    <NuxtLink to="/register">registez</NuxtLink>
    <form
      class="space-y-4 rounded-xl bg-gray-200 px-5 py-10"
      @submit.prevent="submitLogin()"
    >
      <h1 class="pb-14 text-center text-5xl">LOGIN</h1>
      <div class="flex flex-col gap-2">
        <label for="email">Email</label>
        <input
          v-model="formLogin.email"
          name="email"
          type="email"
          placeholder="email"
          class="rounded-sm px-3 py-1"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password">Password</label>
        <input
          v-model="formLogin.password"
          name="password"
          type="password"
          placeholder="password"
          class="rounded-sm px-3 py-1"
        />
      </div>
      <button type="submit" class="w-full rounded-xl bg-black p-2 text-white">
        Login
      </button>
    </form>
  </div>
</template>
