<template>
  <div class="space-y-6 max-w-4xl mx-auto">

    <FilterAndSort :metaDatas="metadatas?.data" />

    <!-- Manual Add Modal -->
    <div v-if="showManualModal" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

      <div class="bg-zinc-900 border border-zinc-700 w-full max-w-md rounded-2xl p-6 shadow-xl relative">

        <h2 class="text-xl font-bold text-white mb-4">Add Monthly Salary (Manual)</h2>

        <!-- Year Select -->
        <div class="mb-4">
          <label class="block text-zinc-400 text-sm mb-1">Year</label>
          <select v-model="selectedYear"
            class="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-orange-500">
            <option disabled :value="0">Select Year</option>
            <option v-for="val in contractYears?.data" :key="val.year" :value="val.year">{{ val.year }}</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-zinc-400 text-sm mb-1">Available months</label>
          <select :disabled="selectedYear === 0" v-model="salaryMonth"
            class="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-orange-500">
            <option disabled :value="0">Select Month</option>
            <option v-for="m in availableMonths?.data" :key="m.value" :value="m.value">
              {{ m.name }}
            </option>
          </select>
        </div>

        <div v-if="salaryMonth" class="text-sm text-teal-400 mb-3">
          Salary Month: <span class="text-white">{{ salaryMonth }}</span>
        </div>

        <div class="flex justify-end gap-3 mt-4">
          <button @click="showManualModal = false"
            class="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg">
            Cancel
          </button>

          <button :disabled="!salaryMonth || selectedYear === 0" @click="submitManual"
            class="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold">
            Save
          </button>
        </div>

      </div>
    </div>

    <div class="flex gap-3 mb-4">
      <button @click="showManualModal = true"
        class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium shadow">
        Add Manual
      </button>

      <button @click="submitLatest"
        class="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium shadow">
        Add Latest
      </button>
    </div>

    <div v-if="!monthlySalaries?.data?.content?.length"
      class="text-center py-16 border border-zinc-700 bg-zinc-900 rounded-2xl shadow-lg">
      <p class="text-zinc-400 text-lg">No monthly salaries found.</p>
      <p class="text-zinc-500 text-sm mt-1">Once payrolls are added, they’ll show up here.</p>
    </div>

    <div v-else v-for="salary in monthlySalaries?.data?.content" :key="salary?.id"
      class="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 shadow-lg hover:shadow-xl transition hover:bg-zinc-800">

      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
        <h3 class="text-lg sm:text-xl font-bold text-orange-500">
          {{ formatYearMonth(salary.salaryMonth) }}
        </h3>
        <span class="text-sm text-zinc-400">
          Updated: {{ formatLocalDateTime(salary.updatedAt) ?? 'Not updated yet.' }}
        </span>
      </div>

      <!-- Salary Details -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-300">
        <div class="flex justify-between">
          <span class="font-semibold text-teal-400">Payable Salary:</span>
          <span class="text-white">{{ formatCurrency(salary.payableSalary) }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-semibold text-teal-400">Created At:</span>
          <span class="text-white">{{ formatLocalDateTime(salary.createdAt) }}</span>
        </div>
      </div>

      <!-- Action Button -->
      <div class="mt-4 text-right">
        <NuxtLink :to="`${route.path}/${salary.id}/attendances`"
          class="inline-block px-5 py-2 bg-green-500 rounded-xl font-medium text-white hover:bg-green-400 transition">
          View Attendances
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components';
import { useRoute } from 'vue-router';
import { monthlySalaryService } from '~/services/monthly-salary.service';
import { workService } from '~/services/work.service';
import FilterAndSort from '~/components/authenticated/FilterAndSort.vue';

const toast = useToast();

const props = defineProps<{ workId: string }>();

const route = useRoute();

const query = computed(() => {
  const { tab, ...rest } = route.query;
  return rest;
});

const showManualModal = ref(false);

const selectedYear = ref<number>(0);

const salaryMonth = ref<string | any>(0);

const { data: monthlySalaries, refresh: monthlySalariesRefresh } =
  await useAsyncData(`monthly-salaries-${props.workId}`,
    async () => await monthlySalaryService()
      .fetchAllMonthlySalariesByWorkId(props.workId, query.value),
    {
      watch: [query]
    });

const { data: contractYears } =
  await useAsyncData(`contract-years-in-monthly-salaries-${props.workId}`,
    async () => await workService().fetchContractYearsByWorkId(props.workId));

const { data: availableMonths } = await useAsyncData(`available-months-in-monthly-salaries-${props.workId}`, async () =>
  await workService().fetchAvailableMonthsByWorkId(props.workId, selectedYear.value), {
  watch: [selectedYear],
  immediate: false
}
);

const { data: metadatas } = await useAsyncData(`monthly-salaries-metadata-${props.workId}`, async () =>
  await monthlySalaryService().fetchMonthlySalaryMetadata()
);

const submitManual = async () => {
  if (!salaryMonth.value) return console.log("Select year & month first");

  try {

    await monthlySalaryService().addMonthlySalariesByWorkId(props.workId, salaryMonth.value);

    toast.success({
      title: 'Success!',
      message: `Salary month for ${salaryMonth.value} added successfully.`
    });

    await monthlySalariesRefresh();

    showManualModal.value = false;
    selectedYear.value = 0;
    salaryMonth.value = 0;
  } catch (e) {

    console.log(e);

    toast.error({
      title: 'Error!',
      message: `Failed to add salary month for ${salaryMonth.value}.`
    });
  }

}

const submitLatest = async () => {

  try {

    await monthlySalaryService().addMonthlySalariesLatestByWorkId(props.workId);

    toast.success({
      title: 'Success!',
      message: `Latest salary month added successfully.`
    });

    await monthlySalariesRefresh();

  } catch (e: any) {

    console.log(e?.message);

    toast.error({
      title: 'Error!',
      message: `${e?.message}`
    });
  }
}

</script>
