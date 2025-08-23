<template>
  <div
    :class="[
      style,
      'bg-cover bg-center bg-no-repeat animate_animated animate_fadeIn animate_faster bg-fixed min-h-screen text-white transition-all ease-in-out',
    ]"
    :style="`background-image: url('${image}');`"
  >
    <div class="h-auto w-auto overflow-x-hidden bg-gray-200/80">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  style?: string;
  image: string;
}>();

onMounted(() => {
  headerStore.background = "bg-zinc-900";
});

const headerStore = useMyHeaderStore();
</script>

<style></style>
