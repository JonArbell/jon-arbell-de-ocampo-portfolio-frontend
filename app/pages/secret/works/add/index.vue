<template>

  <WorkLayout>
    <div class="space-y-6 p-4 md:p-8">

      <!-- Page Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 class="text-2xl font-bold text-orange-400">Add Work</h1>
        <button @click="saveWork"
          class="px-4 py-2 bg-teal-400 text-zinc-900 rounded font-semibold hover:bg-teal-500 transition">
          Save Work
        </button>
      </div>

      <div class="bg-zinc-800 rounded shadow p-6 space-y-6">

        <!-- Job Info -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-zinc-300 font-medium mb-1">Job Title</label>
            <input type="text" v-model="form.jobTitle" placeholder="Software Engineer"
              class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
          </div>

          <div>
            <label class="block text-zinc-300 font-medium mb-1">Employer</label>
            <input type="text" v-model="form.employer" placeholder="Keep Exploring Inc."
              class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
          </div>

          <div class="md:col-span-2">
            <label class="block text-zinc-300 font-medium mb-1">Description</label>
            <textarea v-model="form.description" rows="3" class="w-full p-2 rounded bg-zinc-900 text-zinc-200"
              placeholder="Pinaka malopit na company."></textarea>
          </div>
        </div>

        <!-- Schedule Info -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-zinc-300 font-medium mb-1">Hours per Day</label>
            <input type="number" min="1" max="24" v-model="form.hoursPerDay"
              class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
          </div>

          <div class="flex gap-2">
            <div class="flex-1">
              <label class="block text-zinc-300 font-medium mb-1">Start Time</label>
              <input type="number" min="0" max="23" v-model="form.startTime"
                class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
            </div>
            <div class="flex-1">
              <label class="block text-zinc-300 font-medium mb-1">End Time</label>
              <input type="number" min="0" max="23" v-model="form.endTime"
                class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
            </div>
          </div>

          <div class="flex gap-2">
            <div class="flex-1">
              <label class="block text-zinc-300 font-medium mb-1">Break Start</label>
              <input type="number" min="0" max="23" v-model="form.breakStartTime"
                class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
            </div>
            <div class="flex-1">
              <label class="block text-zinc-300 font-medium mb-1">Break End</label>
              <input type="number" min="0" max="23" v-model="form.breakEndTime"
                class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
            </div>
          </div>
        </div>

        <!-- Salary Info -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-zinc-300 font-medium mb-1">Monthly Salary</label>
            <input type="number" min="0" v-model="form.monthlySalary"
              class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
          </div>
          <div>
            <label class="block text-zinc-300 font-medium mb-1">Full Time?</label>
            <select v-model="form.fullTime" class="w-full p-2 rounded bg-zinc-900 text-zinc-200">
              <option :value="true">Yes</option>
              <option :value="false">No</option>
            </select>
          </div>
        </div>

        <!-- Contract Dates -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-zinc-300 font-medium mb-1">Start Contract Date</label>
            <input type="date" v-model="form.startContractDate" class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
          </div>
          <div>
            <label class="block text-zinc-300 font-medium mb-1">End Contract Date</label>
            <input type="date" v-model="form.endContractDate" class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
          </div>
        </div>

      </div>
    </div>
  </WorkLayout>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import WorkLayout from '../layout/WorkLayout.vue'
import { workService } from '~/services/work.service'

const toast = useToast();

const route = useRoute();

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
