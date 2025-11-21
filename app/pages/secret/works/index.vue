<template>

  <Head description="Work management" title="Works Management" />
  <PageLayout>

    <NuxtLink :to="`${route.path}/add`"
      class="inline-flex items-center gap-2 px-4 py-2 bg-teal-400 text-zinc-900 font-semibold rounded shadow hover:bg-teal-500 transition">
      <i class="mdi mdi-plus text-lg"></i>
      Add Work
    </NuxtLink>

    <ListTable :metaDatas="metadatas?.data ?? []" :isloading="pending" :data="works?.data.content.map(w => ({
      ...w,
      startContractDate: formatLocalDate(w.startContractDate),
      endContractDate: formatLocalDate(w.endContractDate),
      createdAt: formatLocalDate(w.createdAt),
      updatedAt: formatLocalDate(w.updatedAt),
    })) ?? []" :actions="[
      { name: 'view', label: 'View', color: 'orange' },
      { name: 'update', label: 'Update', color: 'teal' },
      { name: 'delete', label: 'Delete', color: 'red' }
    ]" @action="handleAction" />

  </PageLayout>
</template>

<script setup lang="ts">
import ListTable from '~/components/authenticated/ListTable.vue';
import Head from '~/components/Head.vue';
import { workService } from '~/services/work.service';
import { useMyBreadcrumbStore } from '~/stores/breadcrumb';
import { useConfirm } from '~/composables/confirm'
import PageLayout from '~/layouts/authenticated/PageLayout.vue';

const { ask } = useConfirm()

interface TableActionEvent {
  action: string;
  row: any;
}

interface Work {
  id: string;
  employer: string;
  description: string;
  startContractDate: string;
  endContractDate: string;
  active: boolean;
  fullTime: boolean;
  monthlySalary: number;
  dailyRate: number;
  hourlyRate: number;
  minuteRate: number;
  jobTitle: string;
  hoursPerDay: number;
  startTime: number;
  endTime: number;
  createdAt: string;
  updatedAt: string;
}

const breadCrumbStore = useMyBreadcrumbStore();

const toast = useToast();

const route = useRoute();

const query = computed(() => {
  const { tab, ...rest } = route.query;
  return rest;
});

const {
  data: works,
  pending,
  error,
  refresh
} = await useAsyncData(
  `work-lists-${route.path}`,
  async () => await workService().fetchAllWorks(query.value), {
  watch: [query]
}
);

const { data: metadatas } = await useAsyncData(`works-metadatas-${route.path}`, async () =>
  await workService().fetchMetaDatas()
);

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

onMounted(() => {

  breadCrumbStore.breadCrumb = [];

  const isExist = breadCrumbStore.breadCrumb.find(b => b.link === '/secret/works');

  if (!isExist)
    breadCrumbStore.breadCrumb.push({
      name: 'Works',
      link: '/secret/works'
    })
});

const handleAction = async ({ action, row }: TableActionEvent) => {
  console.log(action, row);

  if (action === "delete") {
    const ok = await ask('Do you want to delete this work?');

    if (ok)
      handleDelete(row.id);

  }

  else if (action === 'update')
    navigateTo(`${route.path}/${row?.id}/update`);
  else if (action === 'view')
    navigateTo(`${route.path}/${row?.id}`);
}

const handleDelete = async (workId: string) => {

  try {
    console.log(workId);

    await workService().deleteWorkById(workId);

    toast.success({
      title: 'Sucess!',
      message: 'Successfully work deleted.'
    });

    await refresh();

  } catch (e) {
    toast.error({
      title: 'Oops!',
      message: 'Failed delete work! Try again.'
    });
  }
}

</script>
