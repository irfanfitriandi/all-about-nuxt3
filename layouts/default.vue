<script setup lang="ts">
console.log('render')
</script>

<template>
  <div>
    <!-- <ClientOnly> -->
    <!-- <template #fallback>
        <div>Loading...</div>
      </template> -->
    <slot />
    <!-- </ClientOnly> -->
  </div>
</template>
