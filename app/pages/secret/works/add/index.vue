<template>

  <Head title="Add work" description="Adding work" />

  <PageLayout>
    <div class="space-y-8 p-4 md:p-10">

      <!-- Page Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 class="text-3xl font-bold text-orange-400 tracking-tight">
          Add Work
        </h1>

        <button @click="saveWork" class="px-6 py-3 bg-teal-500 text-zinc-900 rounded-xl font-semibold shadow-md 
             hover:bg-teal-400 hover:shadow-lg transition-all active:scale-95">
          Save Work
        </button>
      </div>

      <div class="bg-zinc-900/60 backdrop-blur-xl border border-zinc-700 rounded-2xl shadow-xl p-6 md:p-10 space-y-10">

        <!-- Section: Job Info -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold text-teal-300">Job Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label class="block text-zinc-400 font-medium mb-1">Job Title</label>
              <input type="text" v-model="form.jobTitle" placeholder="Software Engineer" class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700 
                   focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all" />
            </div>

            <div>
              <label class="block text-zinc-400 font-medium mb-1">Employer</label>
              <input type="text" v-model="form.employer" placeholder="Keep Exploring Inc." class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700 
                   focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all" />
            </div>

            <div class="md:col-span-2">
              <label class="block text-zinc-400 font-medium mb-1">Description</label>
              <textarea v-model="form.description" rows="3" placeholder="Describe the role..." class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700
                   focus:ring-2 focus:ring-teal-500 transition-all"></textarea>
            </div>

          </div>
        </div>

        <!-- Section: Schedule -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold text-teal-300">Schedule Information</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label class="block text-zinc-400 font-medium mb-1">Hours per Day</label>
              <input type="number" v-model="form.hoursPerDay" class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700 
                   focus:ring-2 focus:ring-teal-500 transition-all" />
            </div>

            <div class="flex gap-4">
              <div class="flex-1">
                <label class="block text-zinc-400 font-medium mb-1">Start Time</label>
                <input type="number" v-model="form.startTime" class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700 
                     focus:ring-2 focus:ring-teal-500 transition-all" />
              </div>

              <div class="flex-1">
                <label class="block text-zinc-400 font-medium mb-1">End Time</label>
                <input type="number" v-model="form.endTime" class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700 
                     focus:ring-2 focus:ring-teal-500 transition-all" />
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-1">
                <label class="block text-zinc-400 font-medium mb-1">Break Start</label>
                <input type="number" v-model="form.breakStartTime" class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700 
                     focus:ring-2 focus:ring-teal-500 transition-all" />
              </div>

              <div class="flex-1">
                <label class="block text-zinc-400 font-medium mb-1">Break End</label>
                <input type="number" v-model="form.breakEndTime" class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700 
                     focus:ring-2 focus:ring-teal-500 transition-all" />
              </div>
            </div>

          </div>
        </div>

        <!-- Section: Salary -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold text-teal-300">Salary Details</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label class="block text-zinc-400 font-medium mb-1">Monthly Salary</label>
              <input type="number" v-model="form.monthlySalary" class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700 
                   focus:ring-2 focus:ring-teal-500 transition-all" />
            </div>

            <div>
              <label class="block text-zinc-400 font-medium mb-1">Full Time?</label>
              <select v-model="form.fullTime" class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700 
                   focus:ring-2 focus:ring-teal-500 transition-all">
                <option :value="true">Yes</option>
                <option :value="false">No</option>
              </select>
            </div>

          </div>
        </div>

        <!-- Section: Contract Dates -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold text-teal-300">Contract Duration</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label class="block text-zinc-400 font-medium mb-1">Start Contract Date</label>
              <input type="date" v-model="form.startContractDate" class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700
                   focus:ring-2 focus:ring-teal-500 transition-all" />
            </div>

            <div>
              <label class="block text-zinc-400 font-medium mb-1">End Contract Date</label>
              <input type="date" v-model="form.endContractDate" class="w-full p-3 rounded-xl bg-zinc-800/70 text-zinc-200 border border-zinc-700
                   focus:ring-2 focus:ring-teal-500 transition-all" />
            </div>

          </div>
        </div>

      </div>
    </div>

  </PageLayout>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { workService } from '~/services/work.service'
import Head from '~/components/Head.vue';
import { useConfirm } from '~/composables/confirm';
import PageLayout from '~/layouts/authenticated/PageLayout.vue';

const { ask } = useConfirm();

const toast = useToast();

interface WorkForm {
  jobTitle: string
  employer: string
  description: string
  hoursPerDay: number
  startTime: number
  endTime: number
  breakStartTime: number
  breakEndTime: number
  monthlySalary: number
  fullTime: boolean
  startContractDate: string
  endContractDate: string
}

const form = ref<WorkForm>({
  jobTitle: '',
  employer: '',
  description: '',
  hoursPerDay: 8,
  startTime: 8,
  endTime: 17,
  breakStartTime: 12,
  breakEndTime: 13,
  monthlySalary: 0,
  fullTime: true,
  startContractDate: '',
  endContractDate: ''
})


async function saveWork() {

  if (!form.value) return;

  const ok = await ask('Proceed with creating this work record?');

  if (!ok) return;

  try {

    await workService().addWork(form.value);

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
