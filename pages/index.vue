<script setup lang="ts">
const { $getDataList, $axios } = useNuxtApp()
const config = useRuntimeConfig()
const storeAuth = useAuthStore()

// fetch using custom plugin
const { data } = await $getDataList()
if (data) {
  console.log(data.value)
}
const loading = ref(true)

// fetch using custom composable
const res = await useFetchApi('/tourist', {})
const resData = res.data
console.log(resData.value)

// fetch using axios
const loadDataAxios = () => {
  $axios
    .get(config.public.apiUrl + '/tourist')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
}

// fetch using ofetch
const loadDataOFetch = () => {
  const headers: HeadersInit = new Headers()

  headers.set('Authorization', 'Bearer ' + storeAuth.token)
  headers.set('Accept', 'application/json')

  $fetch(config.public.apiUrl + '/tourist', {
    headers,
  })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
      throw new Error(err)
    })
}

onMounted(() => {
  loadDataAxios()
  loadDataOFetch()
  loading.value = false
})
</script>

<template>
  <div v-if="loading" class="flex h-screen w-full items-center justify-center">
    Loading o o o
  </div>
  <div v-else class="flex h-screen w-full flex-col items-center gap-2">
    <h1 class="text-5xl">INDEX PAGE</h1>
    <div class="flex flex-col gap-4">
      <div
        v-for="(d, idx) in data.data"
        :key="idx"
        class="h-36 rounded-xl bg-gray-200 px-3 py-5"
      >
        {{ d.tourist_name }}
      </div>
    </div>
  </div>
</template>
