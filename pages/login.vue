<script setup lang="ts">
definePageMeta({
  layout: 'server',
})
</script>

<template>
  <div class="flex h-screen w-full flex-col items-center justify-center">
    <NuxtLink to="/">gaz</NuxtLink>
    <form action="" class="space-y-4 rounded-xl bg-gray-200 px-5 py-10">
      <h1 class="pb-14 text-center text-5xl">LOGIN</h1>
      <div class="flex flex-col gap-2">
        <label for="uname">Uname</label>
        <input
          name="uname"
          type="text"
          placeholder="uname"
          class="rounded-sm px-3 py-1"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="pw">Pw</label>
        <input
          name="pw"
          type="text"
          placeholder="pw"
          class="rounded-sm px-3 py-1"
        />
      </div>
      <button type="submit" class="w-full rounded-xl bg-black p-2 text-white">
        Login
      </button>
    </form>
  </div>
</template>
