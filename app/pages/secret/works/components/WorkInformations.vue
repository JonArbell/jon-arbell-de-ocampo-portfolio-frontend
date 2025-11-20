<template>
  <div class="space-y-4">
    <div v-for="log in logs?.data?.content" :key="log.id"
      class="bg-zinc-900 border border-zinc-700 hover:border-orange-600 rounded-xl p-5 shadow-md transition-all duration-200 hover:shadow-lg hover:bg-zinc-800">
      <!-- Header -->
      <div class="flex justify-between items-center mb-3">
        <p class="text-lg font-semibold text-orange-400">
          {{ log.action }}
        </p>
        <p class="text-sm text-zinc-400">
          {{ parseLocalDateTime(log.createdAt) }}
        </p>
      </div>

      <!-- Work Info -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
        <p class="text-zinc-300"><span class="font-medium text-teal-400">Job Title:</span> {{ log.data.work.jobTitle }}
        </p>
        <p class="text-zinc-300"><span class="font-medium text-teal-400">Employer:</span> {{ log.data.work.employer }}
        </p>

        <p class="text-zinc-300"><span class="font-medium text-teal-400">Active:</span> {{ log.data.work.active ? 'Yes'
          :
          'No' }}</p>
        <p class="text-zinc-300"><span class="font-medium text-teal-400">Full Time:</span> {{ log.data.work.fullTime ?
          'Yes'
          : 'No' }}</p>

        <p class="text-zinc-300"><span class="font-medium text-teal-400">Start Time:</span> {{ log.data.work.startTime
        }}:00
        </p>
        <p class="text-zinc-300"><span class="font-medium text-teal-400">End Time:</span> {{ log.data.work.endTime }}:00
        </p>

        <p class="text-zinc-300"><span class="font-medium text-teal-400">Daily Rate:</span> ₱{{ log.data.work.dailyRate
        }}
        </p>
        <p class="text-zinc-300"><span class="font-medium text-teal-400">Monthly Salary:</span> ₱{{
          log.data.work.monthlySalary }}</p>

        <p class="text-zinc-300"><span class="font-medium text-teal-400">Start Contract:</span> {{
          log.data.work.startContractDate }}</p>
        <p class="text-zinc-300"><span class="font-medium text-teal-400">End Contract:</span> {{
          log.data.work.endContractDate }}</p>
      </div>

      <!-- Description -->
      <div class="mt-4 bg-zinc-800 border border-zinc-700 rounded-lg p-3">
        <p class="text-zinc-400 italic">"{{ log.data.work.description }}"</p>
      </div>

    </div>

    <div v-if="!logs?.data?.content?.length" class="text-center text-zinc-500 italic py-10">
      No work logs found.
    </div>
  </div>
</template>

<script lang="ts" setup>
import { workService } from '~/services/work.service';


const props = defineProps<{ workId: string }>();

const toast = useToast();

const route = useRoute();

onMounted(() => {
  useRouter().push({
    path: route.path,
    query: {
      tab: 'informations'
    }
  });
});

const { data: logs, error } = await useAsyncData(`work-infos-${props.workId}`, async () => workService().fetchAllWorkInfosByWorkId(props.workId));

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
