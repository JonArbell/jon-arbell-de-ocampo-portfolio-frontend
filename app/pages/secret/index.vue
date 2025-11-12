<template>
  <div></div>
</template>

<script lang="ts" setup>

const tokenStore = useMyTokenStore();

onMounted(() => {
  if (tokenStore.isAuthenticated) {
    navigateTo('/secret/dashboard');
  } else {
    navigateTo('/secret/login');
  }
});

</script>

<style></style>
