<template>
  <div v-for="(item, index) in timeline" :key="index" class="mb-16 relative tracking-widest">
    <Motion :initial="{ opacity: 0, x: -50 }" :whileInView="{ opacity: 1, x: 0 }"
      :viewport="{ once: true, amount: 0.4 }" :transition="{ duration: 0.6, delay: index * 0.1, ease: 'easeInOut' }"
      class="relative group">
      <!-- Dot -->
      <span
        class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full ring-4 ring-teal-900 group-hover:scale-125 transition-transform duration-300"></span>

      <!-- Card -->
      <div
        class="bg-white/95 backdrop-blur p-6 rounded-2xl shadow-lg transition-transform duration-300 group-hover:translate-x-2 group-hover:shadow-xl">
        <h2 class="text-xl font-semibold text-orange-700 mb-2">
          {{ item.title }}
        </h2>
        <small class="text-xs text-teal-800 font-medium mb-3 block">
          {{ item.date }}
        </small>
        <p class="text-teal-950 2xl:text-sm text-xs leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </Motion>
  </div>
</template>

<script lang="ts" setup>
interface Timeline {
  title: string;
  date: string;
  description: string;
}

defineProps<{
  timeline: Timeline[];
}>();
</script>

<style></style>
