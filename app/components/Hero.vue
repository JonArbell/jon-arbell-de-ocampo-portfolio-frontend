<template>
  <div :class="[style, 'w-full bg-transparent h-72']">
    <div
      class="xl:px-[25rem] overflow-hidden p-5 xl:py-10 opacity-100 flex items-center flex-col justify-center space-y-4 h-full w-full"
    >
      <h2
        class="text-orange-700 font-bold text-center tracking-widest animate__animated animate__fadeInDown xl:text-3xl md:text-2xl text-xl"
      >
        {{ title }}
      </h2>

      <p
        class="text-teal-900 text-center italic xl:text-base md:text-sm text-xs animate__animated animate__fadeInLeft animate__delay-1s"
      >
        {{ subtitle }}
      </p>
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
