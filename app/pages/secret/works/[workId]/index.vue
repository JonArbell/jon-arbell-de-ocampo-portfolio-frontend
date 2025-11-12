<template>

  <Head title="View Work" description="Viewing work information" />
  <AuthenticatedLayout>
    <div class="p-4 md:p-6 lg:p-8 space-y-6">

      <Breadcrumb :items="breadcrumbItems" />

      <div
        class="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 border-b border-zinc-700 overflow-x-auto">
        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
          'flex-shrink-0 px-4 py-2 font-medium transition rounded-md text-center whitespace-nowrap',
          activeTab === tab.id
            ? 'border-b-2 border-orange-500 text-white bg-zinc-800'
            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
        ]">
          {{ tab.label }}
        </button>
      </div>

      <div class="mt-4 space-y-4">
        <WorkOverview v-if="activeTab === 'overview'" :workId="workId" />
        <SalaryList v-if="activeTab === 'salaries'" :workId="workId" />
        <WorkInformations v-if="activeTab === 'logs'" :workId="workId" />
      </div>

    </div>
  </AuthenticatedLayout>
</template>

<script lang="ts" setup>
import Head from '~/components/Head.vue';
import AuthenticatedLayout from '~/layouts/AuthenticatedLayout.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import WorkOverview from '../components/WorkOverview.vue';
import SalaryList from '../components/SalaryList.vue';
import WorkInformations from '../components/WorkInformations.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const workId = computed(() => route.params.workId as string);

const work = {
  id: workId,
  title: 'Project A',
  description: 'Important project A',
  createdAt: '2025-01-01'
};

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'salaries', label: 'Monthly Salaries' },
  { id: 'logs', label: 'Work Informations / Logs' }
];
const activeTab = ref('overview');

const breadcrumbItems = [
  { name: 'Works', link: '/secret/works' },
  { name: work.title, link: `/secret/works/${workId}` }
];

</script>

<style scoped>
/* Optional: smooth horizontal scroll for tabs on mobile */
.flex.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.flex.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: #4b5563;
  border-radius: 3px;
}
</style>
