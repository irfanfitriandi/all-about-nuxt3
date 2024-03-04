<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: {} as () => NuxtError,
})

console.log(props.error)
</script>

<template>
  <div>ERROR APP</div>
</template>
