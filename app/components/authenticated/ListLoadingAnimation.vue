<template>
  <div class="overflow-x-auto w-full">
    <table class="min-w-full border border-zinc-700 rounded-xl overflow-hidden">
      <thead class="bg-zinc-900 text-zinc-400">
        <tr>
          <th class="px-4 py-2 text-left">Title</th>
          <th class="px-4 py-2 text-left">Description</th>
          <th class="px-4 py-2 text-left">ID</th>
          <th class="px-4 py-2 text-left">Start</th>
          <th class="px-4 py-2 text-left">End</th>
          <th class="px-4 py-2 text-left">Created</th>
          <th class="px-4 py-2 text-center">Active</th>
          <th class="px-4 py-2 text-center">Full Time</th>
          <th class="px-4 py-2 text-center">Action</th>
        </tr>
      </thead>
      <tbody class="bg-zinc-800">
        <tr v-for="n in 5" :key="n" class="animate-pulse">
          <td class="px-4 py-2">
            <div class="h-5 bg-zinc-700 rounded w-3/4"></div>
          </td>
          <td class="px-4 py-2">
            <div class="h-4 bg-zinc-700 rounded w-4/5"></div>
          </td>
          <td class="px-4 py-2">
            <div class="h-4 bg-zinc-700 rounded w-full"></div>
          </td>
          <td class="px-4 py-2">
            <div class="h-4 bg-zinc-700 rounded w-3/4"></div>
          </td>
          <td class="px-4 py-2">
            <div class="h-4 bg-zinc-700 rounded w-3/4"></div>
          </td>
          <td class="px-4 py-2">
            <div class="h-4 bg-zinc-700 rounded w-3/4"></div>
          </td>
          <td class="px-4 py-2 text-center">
            <div class="h-4 bg-teal-600 rounded w-8 mx-auto"></div>
          </td>
          <td class="px-4 py-2 text-center">
            <div class="h-4 bg-orange-500 rounded w-8 mx-auto"></div>
          </td>
          <td class="px-4 py-2 text-center">
            <div class="h-8 w-20 bg-orange-500/50 rounded-lg mx-auto"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
// No props needed, reusable loader
</script>

<style scoped>
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
}

.animate-pulse {
  animation: pulse 1.2s ease-in-out infinite;
}
</style>
