<template>

  <Head description="Jon Arbells Dashboard" title="Dashboard" />
  <AuthenticatedLayout>

  </AuthenticatedLayout>
</template>

<script lang="ts" setup>
import AuthenticatedLayout from '~/layouts/AuthenticatedLayout.vue';
import Head from '~/components/Head.vue';
</script>

<style>
/* Optional: scrollbar styling for dark theme */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #18181b;
}

::-webkit-scrollbar-thumb {
  background-color: #4b5563;
  border-radius: 4px;
}
</style>
