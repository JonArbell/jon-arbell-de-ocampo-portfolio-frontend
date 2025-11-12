<template>
  <nav class="text-sm text-zinc-400 mb-4">
    <ul class="flex items-center space-x-2">
      <li v-for="(item, index) in items" :key="item.link" class="flex items-center">
        <NuxtLink :to="item.link" class="hover:text-white">
          {{ item.name }}
        </NuxtLink>
        <span v-if="index < items.length - 1" class="mx-2">/</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue';

defineProps<{
  items: { name: string | ComputedRef<string>; link: string }[];
}>();
</script>
