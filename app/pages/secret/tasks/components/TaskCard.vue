<template>
  <div
    class="bg-zinc-900 border border-zinc-700 hover:border-teal-500 rounded-xl p-4 transition shadow-md cursor-pointer">

    <div class="flex justify-between items-start">
      <h3 class="text-zinc-200 font-semibold">{{ task?.title }}</h3>

      <span v-if="task?.priority" :class="priorityColor(task?.priority)" class="px-2 py-1 text-xs rounded">
        {{ task?.priority }}
      </span>
    </div>

    <p class="text-zinc-400 text-sm mt-1 line-clamp-2">
      {{ task?.description }}
    </p>

    <div class="flex justify-between items-center mt-3 text-xs text-zinc-500">
      <span>{{ task?.dueDate || "No Deadline" }}</span>
      <i class="i-lucide-chevron-right w-4 h-4"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  task: Object
})

const priorityColor = (p: string) => {
  return {
    high: "bg-orange-500 text-black",
    medium: "bg-teal-500 text-black",
    low: "bg-zinc-600 text-zinc-200"
  }[p] || "bg-zinc-700 text-zinc-300"
}
</script>
