<template>
  <div :class="[style, 'w-full bg-transparent h-72']">
    <div
      class="xl:px-[25rem] overflow-hidden p-5 xl:py-10 opacity-100 flex items-center flex-col justify-center space-y-4 h-full w-full"
    >
      <!-- Title Motion -->
      <Motion
        :initial="{ opacity: 0, y: -30 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, amount: 0.5 }"
        :transition="{ duration: 0.7, ease: 'easeInOut' }"
        class="text-orange-700 font-bold text-center tracking-widest xl:text-3xl md:text-2xl text-xl"
      >
        {{ title }}
      </Motion>

      <!-- Subtitle Motion -->
      <Motion
        :initial="{ opacity: 0, x: -50 }"
        :whileInView="{ opacity: 1, x: 0 }"
        :viewport="{ once: true, amount: 0.5 }"
        :transition="{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }"
        class="text-teal-900 text-center italic xl:text-base md:text-sm text-xs"
      >
        {{ subtitle }}
      </Motion>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  style?: string;
  title: string;
  subtitle: string;
}>();
</script>
