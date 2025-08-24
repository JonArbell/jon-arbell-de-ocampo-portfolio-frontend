<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const sidebarStore = useMySideBarStore();

onMounted(() => {
  if (sidebarStore.isFirstLoad) {
    setTimeout(() => {
      sidebarStore.isFirstLoad = false;
    }, 300);
  }
});
</script>

<style lang="css" scoped></style>
