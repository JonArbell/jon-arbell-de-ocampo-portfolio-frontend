<template>

  <Head title="Add New Work | Work Management"
    description="Add a new work entry including job details, schedule, salary, and contract duration." />

  <PageLayout>
    <AddUpdateWork :action="'Add'" />
  </PageLayout>
</template>


<script setup lang="ts">
import Head from '~/components/Head.vue';
import PageLayout from '~/layouts/authenticated/PageLayout.vue';
import { useMyWorkFormStore } from '../stores/work-form';
import AddUpdateWork from '../components/AddUpdateWork.vue';

const workFormStore = useMyWorkFormStore();

</script>
