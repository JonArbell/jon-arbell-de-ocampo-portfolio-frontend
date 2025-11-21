<template>

  <FilterAndSort :metaDatas="metaDatas" />

  <ListLoadingAnimation v-if="isloading" />

  <div v-else class="overflow-x-auto w-full rounded shadow bg-zinc-800">
    <table class="min-w-full table-auto border border-zinc-700">
      <!-- Table Head -->
      <thead class="bg-zinc-900 text-zinc-300">
        <tr>

          <th v-if="actions?.length" class="px-3 py-2 text-left text-orange-400 whitespace-nowrap">
            Actions
          </th>

          <th v-for="col in columns" :key="col" class="px-3 py-2 text-left text-teal-400 whitespace-nowrap">
            {{ formatColumn(col) }}
          </th>

        </tr>
      </thead>

      <!-- Table Body -->
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="bg-zinc-800 hover:bg-zinc-700 transition">

          <td v-if="actions?.length" class="px-3 py-2 whitespace-nowrap flex gap-2">
            <button v-for="action in actions" :key="action.name" @click="$emit('action', { action: action.name, row })"
              :class="actionColor(action.color)" class="px-2 py-1 rounded text-sm hover:opacity-90 transition">
              {{ action.label }}
            </button>
          </td>

          <td v-for="col in columns" :key="col" class="px-3 py-2 text-zinc-300 whitespace-nowrap">
            <span v-if="row[col] !== null && row[col] !== undefined">{{ row[col] }}</span>
            <span v-else class="text-zinc-500">-</span>
          </td>

        </tr>

        <!-- Empty state -->
        <tr v-if="!data.length">
          <td :colspan="columns.length + (actions?.length ? 1 : 0)" class="px-4 py-6 text-center text-zinc-400">
            No data available
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import FilterAndSort from './FilterAndSort.vue';
import ListLoadingAnimation from './ListLoadingAnimation.vue';

interface Action {
  name: string;
  label: string;
  color?: 'teal' | 'orange' | 'red' | 'zinc';
}

const props = defineProps<{
  data: Record<string, any>[];
  actions?: Action[];
  isloading: boolean;
  metaDatas: any[]
}>()

const columns = computed(() => {
  if (!props.data.length) return [];
  // extract all unique keys from objects
  const keys = new Set<string>();
  props.data.forEach(row => Object.keys(row).forEach(k => keys.add(k)));
  return Array.from(keys);
});

// dynamic button classes based on theme
const actionColor = (color?: string) => {
  switch (color) {
    case 'teal':
      return 'bg-teal-500 text-zinc-900';
    case 'orange':
      return 'bg-orange-500 text-zinc-900';
    case 'red':
      return 'bg-red-500 text-zinc-900';
    case 'zinc':
    default:
      return 'bg-zinc-600 text-zinc-100';
  }
}
</script>

<style scoped>
/* horizontal scroll will allow wide tables on small devices */
table {
  min-width: 100%;
}
</style>
