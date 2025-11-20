<template>
  <!-- BACKDROP -->
  <div v-if="message" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <!-- MODAL -->
    <div class="w-full max-w-sm bg-zinc-800 rounded-xl shadow-xl p-6 border border-zinc-700 animate-fadeIn">
      <!-- ICON -->
      <div class="flex justify-center mb-3">
        <i class="mdi mdi-help-circle-outline text-5xl text-orange-400"></i>
      </div>

      <!-- MESSAGE -->
      <p class="text-center text-zinc-200 text-lg font-medium">
        {{ message }}
      </p>

      <!-- ACTIONS -->
      <div class="mt-6 flex justify-center gap-3">
        <button @click="cancel" class="px-4 py-2 rounded-lg bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition">
          Cancel
        </button>

        <button @click="confirm"
          class="px-4 py-2 rounded-lg bg-orange-500 text-zinc-900 font-semibold hover:bg-orange-400 transition">
          Yes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConfirm } from '~/composables/confirm'

const { message, confirm, cancel } = useConfirm()
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.18s ease-out;
}
</style>
