<template>

  <AuthenticatedLayout>
    <div class="p-6 space-y-6">

      <Breadcrumb :items="breadCrumbStore.breadCrumb" />

      <section class="space-y-4">
        <slot />
      </section>

    </div>

  </AuthenticatedLayout>

</template>

<script setup lang="ts">
import AuthenticatedLayout from '~/layouts/AuthenticatedLayout.vue'
import Breadcrumb from '../components/Breadcrumb.vue';

const breadCrumbStore = useMyBreadcrumbStore();

</script>
<style scoped></style>
