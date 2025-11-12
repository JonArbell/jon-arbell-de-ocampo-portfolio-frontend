<template>

  <Head description="Work management" title="Works Management" />
  <AuthenticatedLayout>
    <div class="p-6 space-y-6">

      <Breadcrumb :items="breadCrumbStore.breadCrumb" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-orange-400">Work List</h2>
        <WorkList :works="works?.data.content ?? []" :isloading="pending" />
      </section>
    </div>
  </AuthenticatedLayout>
</template>

<script setup lang="ts">
import Head from '~/components/Head.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import WorkList from './components/WorkList.vue';
import AuthenticatedLayout from '~/layouts/AuthenticatedLayout.vue';
import { workService } from '~/services/work.service';
import { useMyBreadcrumbStore } from '~/stores/breadcrumb';

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

const query = computed(() => ({ ...route.query }));

const {
  data: works,
  pending,
  error
} = await useAsyncData(
  `work-lists-${route.path}`,
  async () => await workService().fetchAllWorks(), {
  watch: [query]
}
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

  breadCrumbStore.breadCrumb.push({
    name: 'Work',
    link: '/secret/works'
  })
});

</script>
