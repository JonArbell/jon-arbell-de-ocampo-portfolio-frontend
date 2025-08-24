<template>
  <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <div v-for="(goal, index) in goals" :key="index" class="flex">
      <Motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :whileInView="{ opacity: 1, scale: 1 }"
        :viewport="{ once: true }"
        :transition="{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut' }"
        class="flex-1"
      >
        <div
          class="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col h-full"
        >
          <h3 class="text-lg font-semibold text-orange-700 mb-2">
            {{ goal.title }}
          </h3>
          <p class="text-xs text-zinc-300 leading-relaxed flex-1">
            {{ goal.description }}
          </p>
        </div>
      </Motion>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Goals {
  title: string;
  description: string;
}

defineProps<{
  goals: Goals[];
}>();
</script>

<style></style>
