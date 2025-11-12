<template>
  <AuthenticatedLayout>

    <Breadcrumb :items="breadcrumbItems" />

    <AttendanceList :attendances="[
      { id: 1, day: 1, status: 'present', remarks: 'On time' },
      { id: 2, day: 2, status: 'absent', remarks: 'Sick leave' }
    ]" month="January" :year="2025" />

  </AuthenticatedLayout>
</template>

<script lang="ts" setup>
import AuthenticatedLayout from '~/layouts/AuthenticatedLayout.vue';
import AttendanceList from '../../components/AttendanceList.vue';
import Breadcrumb from '../../components/Breadcrumb.vue';
import { useMyWorkStoreStore } from '../../stores/workStore';
import { workService } from '~/services/work.service';

const route = useRoute();

const workStore = useMyWorkStoreStore();

const workName = computed(() => workStore.selectedWork?.title || '');

const breadcrumbItems = [
  { name: 'Works', link: '/secret/works' },
  { name: workName, link: `/secret/works/${route.params.workId}/` },
  { name: 'Attendances', link: `/secret/works/${route.params.workId}/attendances` }
];

const { } = useAsyncData(`attendances-work-${route.path}`, async () => {

  if (workStore.selectedWork) return null;

  const res = await workService().fetchWorkById(route.params.workId as string);
  workStore.selectedWork = res?.data;

  return res;

});

</script>

<style scoped>
/* Optional: smooth hover effect for table rows */
table tr:hover {
  background-color: #2c2c2c;
}
</style>
