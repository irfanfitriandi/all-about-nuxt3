<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  layout: 'server',
})
const storeAuth = useAuthStore()
const formRegister = reactive({
  name: '',
  email: '',
  password: '',
})

const submitRegister = () => {
  storeAuth.register(formRegister).then(() => {
    navigateTo('/login')
  })
}
</script>

<template>
  <div class="flex h-screen w-full flex-col items-center justify-center">
    <NuxtLink to="/">gaz</NuxtLink>
    <NuxtLink to="/register">registez</NuxtLink>
    <form
      class="space-y-4 rounded-xl bg-gray-200 px-5 py-10"
      @submit.prevent="submitRegister()"
    >
      <h1 class="pb-14 text-center text-5xl">Register</h1>
      <div class="flex flex-col gap-2">
        <label for="name">Name</label>
        <input
          v-model="formRegister.name"
          name="name"
          type="text"
          placeholder="name"
          class="rounded-sm px-3 py-1"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email">Email</label>
        <input
          v-model="formRegister.email"
          name="email"
          type="email"
          placeholder="email"
          class="rounded-sm px-3 py-1"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password">Password</label>
        <input
          v-model="formRegister.password"
          name="password"
          type="password"
          placeholder="password"
          class="rounded-sm px-3 py-1"
        />
      </div>
      <button type="submit" class="w-full rounded-xl bg-black p-2 text-white">
        Register
      </button>
    </form>
  </div>
</template>
