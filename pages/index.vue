<script setup lang="ts">
const config = useRuntimeConfig()
const { $getDataList, $axios } = useNuxtApp()
const { data, pending } = await $getDataList()
// const { data } = await useFetchApi('/tourist', {})
if (data) {
  console.log(data.value)
}
const loading = ref(true)

// fetch using axios
const loadDataAxios = () => {
  $axios
    .get(config.public.apiUrl + '/tourist')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
}

// fetch using ofetch
const loadDataOFetch = () => {
  const headers: HeadersInit = new Headers()

  headers.set('Authorization', 'Bearer ' + config.public.apiToken)
  headers.set('Accept', 'application/json')

  $fetch(config.public.apiUrl + '/tourist', {
    headers,
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

// set cookie
const authCookie = useCookie<{ tkn: string }>('auth')
const handleCookie = (payload: string) => {
  authCookie.value = { tkn: payload }
}

onMounted(() => {
  loadDataAxios()
  loadDataOFetch()
  loading.value = false
})
</script>

<template>
  <div v-if="!loading" class="flex h-screen w-full flex-col items-center gap-2">
    <h1 class="text-5xl">INDEX PAGE</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="data">
      <div v-for="(d, idx) in data.data" :key="idx">{{ d.tourist_name }}</div>
    </div>
    <button @click="handleCookie('aaa')">Cookie Set</button>
    <button @click="console.log(authCookie)">Cek</button>
  </div>
</template>
