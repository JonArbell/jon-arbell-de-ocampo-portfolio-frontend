<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="bg-zinc-900 text-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">

      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-orange-400">{{ work.title }}</h2>
        <button @click="$emit('close')" class="text-zinc-400 hover:text-red-500 text-2xl">&times;</button>
      </div>

      <!-- Content -->
      <div class="space-y-2">
        <p class="text-zinc-300">{{ work.description }}</p>

        <div v-if="work.details">
          <h3 class="font-semibold text-green-400 mt-4">Details:</h3>
          <p class="text-zinc-300">{{ work.details }}</p>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-6 flex justify-end">
        <button @click="$emit('close')"
          class="px-4 py-2 bg-orange-500 rounded hover:bg-orange-400 transition">Close</button>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ work: any }>();
</script>
