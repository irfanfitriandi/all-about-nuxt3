<script setup lang="ts">
import type { NuxtError } from '#app'
interface APIError {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  stack: string
}

const props = defineProps({
  error: {} as () => NuxtError,
})

const err = computed(() => {
  return props.error as unknown as APIError
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="flex h-screen w-full flex-col gap-4 overflow-clip p-4">
    <h1 class="text-5xl">ERROR APP</h1>
    <div v-if="err">
      <p class="pb-2">
        Error in path url: '{{ err.url }}' with statusCode: {{ err.statusCode }}
      </p>
      <code class="text-red-600">{{ err.message }}</code>
      <div class="pl-4" v-html="error.stack"></div>
      <button @click="handleError()">Clear Error</button>
    </div>
  </div>
</template>
