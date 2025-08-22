<template>
  <div
    class="rounded-2xl bg-zinc-900 p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
  >
    <!-- Title -->
    <h3
      class="font-semibold text-xl text-white mb-4 border-b border-zinc-700 pb-2"
    >
      {{ title }}
    </h3>

    <!-- Descriptions -->
    <ul class="space-y-2 flex-1">
      <li
        v-for="(item, index) in descriptions"
        :key="index"
        class="text-zinc-200 text-xs 2xl:text-sm leading-relaxed flex items-start gap-2"
      >
        <!-- Orange Accent Bullet -->
        <span class="w-2 h-2 mt-1 rounded-full bg-teal-700"></span>
        <span>{{ item }}</span>
      </li>
    </ul>

    <!-- Accent Footer Bar -->
    <div
      class="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-teal-500 to-orange-400 opacity-80"
    ></div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  descriptions: string[];
}>();
</script>
