<template>
  <div class="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-700 max-w-4xl mx-auto space-y-6">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <h2 class="text-2xl font-bold text-orange-500">{{ latestWorkInfo?.data.jobTitle }}</h2>
      <span class="text-sm text-zinc-400">{{ formatLocalDate(latestWorkInfo?.data.createdAt ?? '01-01-1901') }}</span>
    </div>

    <!-- Salary & Work Time Info -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <!-- Salary Card -->
      <div class="bg-zinc-800 p-4 rounded-lg shadow-inner space-y-2">
        <h3 class="text-teal-400 font-semibold text-lg">Salary & Rates</h3>
        <div class="flex justify-between">
          <span class="text-zinc-300 font-medium">Monthly Salary:</span>
          <span class="text-white">{{ formatCurrency(latestWorkInfo?.data.monthlySalary ?? 0) }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-300 font-medium">Daily Rate:</span>
          <span class="text-white">{{ formatCurrency(latestWorkInfo?.data.dailyRate ?? 0) }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-300 font-medium">Hourly Rate:</span>
          <span class="text-white">{{ formatCurrency(latestWorkInfo?.data.hourlyRate ?? 0) }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-300 font-medium">Minute Rate:</span>
          <span class="text-white">{{ formatCurrency(latestWorkInfo?.data.minuteRate ?? 0) }}</span>
        </div>
      </div>

      <!-- Work Time Card -->
      <div class="bg-zinc-800 p-4 rounded-lg shadow-inner space-y-2">
        <h3 class="text-teal-400 font-semibold text-lg">Work Hours</h3>
        <div class="flex justify-between">
          <span class="text-zinc-300 font-medium">Hours Per Day:</span>
          <span class="text-white">{{ latestWorkInfo?.data.hoursPerDay }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-300 font-medium">Start Time:</span>
          <span class="text-white">{{ formatTime(latestWorkInfo?.data.startTime ?? 0) }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-300 font-medium">End Time:</span>
          <span class="text-white">{{ formatTime(latestWorkInfo?.data.endTime ?? 0) }}</span>
        </div>
      </div>
    </div>

    <!-- Optional Description / Notes -->
    <div class="bg-zinc-800 p-4 rounded-lg text-zinc-300">
      <h3 class="text-teal-400 font-semibold mb-2">Description / Notes</h3>
      <p>{{ latestWorkInfo?.data.description ?? 'No description' }}</p>
    </div>

    <!-- View Attendances Button -->
    <div class="mt-4">
      <NuxtLink :to="`${route.path}/monthly-salaries`"
        class="inline-block w-full sm:w-auto px-6 py-3 text-center rounded-xl bg-teal-500 text-zinc-900 font-semibold shadow-lg hover:bg-teal-400 transition-colors duration-200">
        View All Salaries
      </NuxtLink>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { workService } from '~/services/work.service';
import { useMyWorkStoreStore } from '../stores/workStore';

const props = defineProps<{
  workId: string
}>();

const toast = useToast();

const workStore = useMyWorkStoreStore();

// Format helpers
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value);


const formatTime = (time: number) => {

  return time > 11 ?
    time > 12 ? `${time - 12} PM`
      : `${time} PM`
    : `${time} AM`;

};

const route = useRoute();

onMounted(() => {
  useRouter().push({
    path: route.path,
    query: {
      tab: 'overview'
    }
  });
});

const { data: latestWorkInfo, error } = await useAsyncData(`work-overview-${props.workId}`, async () => {

  const res = await workService()
    .fetchWorkById(props.workId);

  workStore.selectedWork = res.data;

  return res;
});


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
