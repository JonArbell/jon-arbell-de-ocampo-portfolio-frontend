<template>

  <Head title="Update Work | Management"
    description="Update details of an existing work entry including job info, schedule, salary, and notes." />

  <PageLayout>
    <AddUpdateWork :action="'Update'" />
  </PageLayout>
</template>


<script setup lang="ts">
import { workService } from '~/services/work.service'
import Head from '~/components/Head.vue';
import PageLayout from '~/layouts/authenticated/PageLayout.vue';
import { useMyWorkFormStore } from '../../stores/work-form';
import AddUpdateWork from '../../components/AddUpdateWork.vue';

const route = useRoute();

const workFormStore = useMyWorkFormStore();

const workId = computed(() => route.params.workId as string);

const { } = await useAsyncData(`update-work-${route.path}`, async () => {

  const res = await workService().fetchWorkById(workId.value);



  return res;

}

  , {
    watch: [workId]
  });

</script>
