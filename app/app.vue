<template>
  <NuxtLayout>
    <NuxtPage />

    <!-- <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MRGN759L"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe>
    </noscript> -->
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
