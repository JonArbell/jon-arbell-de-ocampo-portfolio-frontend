<template>
  <div class="space-y-2">
    <div v-for="log in logs" :key="log.id" class="p-4 bg-zinc-800 rounded shadow hover:bg-zinc-700 transition">
      <p class="text-zinc-300">{{ log.description }}</p>
      <p class="text-zinc-400 text-sm">Date: {{ log.date }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ workId: string }>();

// Mock logs
const logs = [
  { id: 1, description: 'Created project', date: '2025-01-01' },
  { id: 2, description: 'Updated milestone', date: '2025-02-01' }
];

const route = useRoute();

onMounted(() => {
  useRouter().push({
    path: route.path,
    query: {
      tab: 'informations'
    }
  });
});
</script>
