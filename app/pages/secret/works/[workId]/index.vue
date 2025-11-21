<template>

  <Head title="View Work" description="Viewing work information" />
  <WorkLayout>
    <div class="p-4 md:p-6 lg:p-8 space-y-6">
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

        <ListTable :metaDatas="[]" :data="logs?.data.content ?? []" :isloading="pending" v-if="activeTab === 'logs'"
          :workId="workId" />
      </div>

    </div>
  </WorkLayout>
</template>

<script lang="ts" setup>
import Head from '~/components/Head.vue';
import WorkOverview from '../components/WorkOverview.vue';
import { useRoute } from 'vue-router';
import { useMyWorkStoreStore } from '../stores/workStore';
import WorkLayout from '../layout/WorkLayout.vue';
import ListTable from '~/components/authenticated/ListTable.vue';
import { workService } from '~/services/work.service';

const route = useRoute();

const workId = computed(() => route.params.workId as string);

const toast = useToast();

const workStore = useMyWorkStoreStore();

const breadCrumbStore = useMyBreadcrumbStore();

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'logs', label: 'Work Informations / Logs' }
];

const activeTab = ref('overview');

const workName = computed(() => workStore.selectedWork?.jobTitle || '');

onMounted(() => {

  const isExist = breadCrumbStore.breadCrumb.find(b => b.link === `/secret/works/${workId.value}`);

  if (!isExist)
    breadCrumbStore.breadCrumb.push({ name: workName, link: `/secret/works/${workId.value}` })
});


const { data: logs, error, pending } = await useAsyncData(`work-infos-${workId}`, async () => await workService().fetchAllWorkInfosByWorkId(workId.value));

watch(error, (newError) => {

  if (!newError) return;

  const data = newError.data as any;

  if (newError.statusCode === 500) {

    if (!newError.statusMessage && !data && !newError.error) {
      toast.error({
        title: "Connection Error",
        message: "Cannot reach server. Please try again later.",
      });
    }

  } else if (newError.statusCode === 401) {

    const data = newError.data as any;

    const title = data?.errorName;

    toast.error({
      title: title,
      message: newError?.message,
    });

    if (title.includes('Session') || title.includes('Authentication Failed')) {
      setTimeout(() => {
        navigateTo('/secret/login');
      }, 500)
    }

  }

}, { immediate: true });

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
