<template>

  <Head title="Update Work" description="Updating work" />

  <WorkLayout>
    <div>
      <h2>Update work</h2>
    </div>
  </WorkLayout>
</template>

<script lang="ts" setup>
import WorkLayout from '../../layout/WorkLayout.vue';
import Head from '~/components/Head.vue';

const route = useRoute();

const workId = computed(() => route.params.workId as string);



</script>

<style></style>