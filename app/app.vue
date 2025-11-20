<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <ConfirmDialog />
</template>
<script lang="ts" setup>
import ConfirmDialog from './components/ConfirmDialog.vue';

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
