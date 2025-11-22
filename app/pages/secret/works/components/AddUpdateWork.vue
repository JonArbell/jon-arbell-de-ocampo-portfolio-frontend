<template>
  <div class="space-y-8 p-4 md:p-10">

    <!-- Page Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <h1 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-orange-400 tracking-tight">
        {{ action }} Work
      </h1>

    </div>

    <div class="bg-zinc-900/60 backdrop-blur-xl border border-zinc-700 rounded-2xl shadow-xl p-6 md:p-10 space-y-10">

      <!-- Job Details -->
      <section class="space-y-4">
        <h2 class="text-lg font-semibold text-teal-300">Job Details</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-zinc-400 font-medium mb-1">Job Title</label>
            <input type="text" v-model="workFormStore.form.jobTitle" placeholder="Ex. Software Engineer" class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                       border border-zinc-700 rounded-xl px-4 py-3 pr-10
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                       shadow-md hover:shadow-lg transition-all" />
          </div>

          <div>
            <label class="block text-zinc-400 font-medium mb-1">Employer</label>
            <input type="text" v-model="workFormStore.form.employer" placeholder="Ex. Keep Exploring Inc." class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                       border border-zinc-700 rounded-xl px-4 py-3 pr-10
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                       shadow-md hover:shadow-lg transition-all" />
          </div>

          <div class="md:col-span-2">
            <label class="block text-zinc-400 font-medium mb-1">Description</label>
            <textarea v-model="workFormStore.form.description" rows="3" placeholder="Describe the role..." class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                       border border-zinc-700 rounded-xl px-4 py-3 pr-10
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                       shadow-md hover:shadow-lg transition-all"></textarea>
          </div>
        </div>
      </section>

      <!-- Schedule Information -->
      <section class="space-y-4">
        <h2 class="text-lg font-semibold text-teal-300">Schedule Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label class="block text-zinc-400 font-medium mb-1">Hours per Day</label>
            <input type="number" v-model="workFormStore.form.hoursPerDay" class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                       border border-zinc-700 rounded-xl px-4 py-3 pr-10
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                       shadow-md hover:shadow-lg transition-all" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-zinc-400 font-medium mb-1">Start Time</label>
              <input type="number" v-model="workFormStore.form.startTime" class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                         border border-zinc-700 rounded-xl px-4 py-3 pr-10
                         focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                         shadow-md hover:shadow-lg transition-all" />
            </div>

            <div>
              <label class="block text-zinc-400 font-medium mb-1">End Time</label>
              <input type="number" v-model="workFormStore.form.endTime" class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                         border border-zinc-700 rounded-xl px-4 py-3 pr-10
                         focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                         shadow-md hover:shadow-lg transition-all" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-zinc-400 font-medium mb-1">Break Start</label>
              <input type="number" v-model="workFormStore.form.breakStartTime" class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                         border border-zinc-700 rounded-xl px-4 py-3 pr-10
                         focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                         shadow-md hover:shadow-lg transition-all" />
            </div>

            <div>
              <label class="block text-zinc-400 font-medium mb-1">Break End</label>
              <input type="number" v-model="workFormStore.form.breakEndTime" class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                         border border-zinc-700 rounded-xl px-4 py-3 pr-10
                         focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                         shadow-md hover:shadow-lg transition-all" />
            </div>
          </div>
        </div>
      </section>

      <!-- Salary Details -->
      <section class="space-y-4">
        <h2 class="text-lg font-semibold text-teal-300">Salary Details</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <!-- Full Time -->
          <div>
            <label class="block text-zinc-400 font-semibold mb-1 text-sm sm:text-base">Full Time?</label>
            <select v-model="workFormStore.form.fullTime" class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                       border border-zinc-700 rounded-xl px-4 py-3 pr-10
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                       shadow-md hover:shadow-lg transition-all">
              <option disabled value="">Select</option>
              <option :value="true">Yes</option>
              <option :value="false">No</option>
            </select>
          </div>

          <!-- Monthly Salary -->
          <div>
            <label class="block text-zinc-400 font-medium mb-1">Monthly Salary</label>
            <input type="number" v-model="workFormStore.form.monthlySalary" class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                       border border-zinc-700 rounded-xl px-4 py-3 pr-10
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                       shadow-md hover:shadow-lg transition-all" />
          </div>

          <!-- Daily Rate Type -->
          <div>
            <label class="block text-zinc-400 font-semibold mb-1 text-sm sm:text-base">Daily Rate Type</label>
            <div class="relative">
              <select v-model="workFormStore.form.dailyRateType" class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                         border border-zinc-700 rounded-xl px-4 py-3 pr-10
                         focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                         shadow-md hover:shadow-lg transition-all">
                <option disabled value="">Select Type</option>
                <option v-for="type in dailyRateTypes?.data" :key="type.value" :value="type.value">
                  {{ type.name.replace('_', ' ') }}
                </option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg class="w-5 h-5 text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div class="px-4 mt-2 text-xs sm:text-sm text-zinc-400 space-y-1">
              <p><strong>MON TO SAT:</strong> Monthly rate ÷ 26 working days</p>
              <p><strong>MON TO FRI:</strong> Monthly rate ÷ 22 working days</p>
              <p><strong>THIRTY:</strong> Monthly rate ÷ 30 days</p>
              <p><strong>DOLE365:</strong> Monthly rate ÷ 365 days</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contract Duration -->
      <section class="space-y-4">
        <h2 class="text-lg font-semibold text-teal-300">Contract Duration</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-zinc-400 font-medium mb-1">Start Contract Date</label>
            <input type="date" v-model="workFormStore.form.startContractDate" class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                       border border-zinc-700 rounded-xl px-4 py-3 pr-10
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                       shadow-md hover:shadow-lg transition-all" />
          </div>
          <div>
            <label class="block text-zinc-400 font-medium mb-1">End Contract Date</label>
            <input type="date" v-model="workFormStore.form.endContractDate" class="w-full appearance-none bg-zinc-800/80 text-zinc-100 text-sm sm:text-base
                       border border-zinc-700 rounded-xl px-4 py-3 pr-10
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                       shadow-md hover:shadow-lg transition-all" />
          </div>
        </div>
      </section>

    </div>

    <div class="flex flex-col md:flex-row justify-end items-start md:items-center gap-4">

      <button @click="workFormStore.resetForm()" class="px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-red-600 text-gray-200 text-sm sm:text-base md:text-base rounded-xl font-semibold shadow-md 
           hover:bg-red-500 hover:shadow-lg transition-all active:scale-95">
        Reset form
      </button>

      <button @click="saveWork" class="px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-teal-500 text-zinc-900 text-sm sm:text-base md:text-base rounded-xl font-semibold shadow-md 
           hover:bg-teal-400 hover:shadow-lg transition-all active:scale-95">
        Save Work
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { workService } from '~/services/work.service';
import { useMyWorkFormStore } from '../stores/work-form';
import { useConfirm } from '~/composables/confirm';

defineProps<{
  action: string
}>();

const toast = useToast();

const workFormStore = useMyWorkFormStore();

const { ask } = useConfirm();

const { data: dailyRateTypes } = await useAsyncData(`daily-rate-type-${useRoute().path}`, async () =>

  await workService().fetchDailyRateTypes()
);

async function saveWork() {

  if (!workFormStore.form) return;

  const ok = await ask('Proceed with creating this work record?');

  if (!ok) return;

  try {

    await workService().addWork(workFormStore.form);

    toast.success({
      title: 'Success!',
      message: 'Successfully work added!'
    })

    await navigateTo(`/secret/works`);
  } catch (e) {

    toast.error({
      title: 'Oops!!',
      message: 'Failed add work! Try again.'
    })


  }

}
</script>

<style></style>