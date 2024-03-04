<script setup lang="ts">
const { $getDataList, $axios } = useNuxtApp()
const { data, status, pending, error } = await $getDataList()
if (status) {
  console.log(status.value)
}
if (error) {
  console.log(error.value)
}

// fetch using axios
const loadData = () => {
  $axios
    .get('https://biroperjalanan.datacakra.com/api/tourist')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <div class="flex h-screen w-full flex-col items-center gap-2">
    <h1 class="text-5xl">INDEX PAGE</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="!error">
      <div v-for="(d, idx) in data.data" :key="idx">{{ d.tourist_name }}</div>
      <!-- {{ data.data }} -->
    </div>
  </div>
</template>
