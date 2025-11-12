<template>
  <div class="space-y-6 max-w-4xl mx-auto">
    <div v-for="salary in monthlySalaries?.data?.content" :key="salary?.id"
      class="bg-zinc-900 border border-zinc-700 rounded-2xl p-5 shadow-lg hover:shadow-xl transition hover:bg-zinc-800">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
        <h3 class="text-lg sm:text-xl font-bold text-orange-500">
          {{ formatYearMonth(salary.salaryMonth) }}
        </h3>
        <span class="text-sm text-zinc-400">
          Updated: {{ formatDateTime(salary.updatedAt) }}
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
          <span class="text-white">{{ formatDateTime(salary.createdAt) }}</span>
        </div>
      </div>

      <!-- Action Button -->
      <div class="mt-4 text-right">
        <NuxtLink :to="`${route.path}/attendances`"
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
import { monthlySalaryService } from '~/services/monthly-salaries.service';
const props = defineProps<{ workId: string }>();

const route = useRoute();

// Format helpers
const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(value);

const formatDateTime = (date: string) =>
  new Date(date).toLocaleString('en-PH', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

const formatYearMonth = (ym: string) => {
  const [year, month] = ym.split('-');
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleString('en-PH', { month: 'short', year: 'numeric' });
};

const { data: monthlySalaries } = await useAsyncData(``, async () =>
  monthlySalaryService().fetchAllMonthlySalariesByWorkId(props.workId));
</script>
