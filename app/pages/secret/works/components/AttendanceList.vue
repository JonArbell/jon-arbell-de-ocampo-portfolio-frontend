<template>
  <div class="space-y-6">
    <h2 class="text-xl font-semibold text-orange-400">
      Attendances in {{ formatYearMonth(salaryMonth) }}
    </h2>

    <!-- TABLE -->
    <div class="overflow-x-auto rounded shadow bg-zinc-800">
      <table class="w-full text-sm">
        <thead class="bg-zinc-900 text-zinc-300 text-xs uppercase">
          <tr>
            <th class="px-4 py-3 text-left">Day</th>
            <th class="px-4 py-3 text-left">In</th>
            <th class="px-4 py-3 text-left">Out</th>
            <th class="px-4 py-3 text-left hidden md:table-cell">Worked</th>
            <th class="px-4 py-3 text-left hidden md:table-cell">Late</th>
            <th class="px-4 py-3 text-left hidden md:table-cell">Undertime</th>
            <th class="px-4 py-3 text-left hidden xl:table-cell">Overtime</th>
            <th class="px-4 py-3 text-left hidden xl:table-cell">Total Deductions</th>
            <th class="px-4 py-3 text-left hidden xl:table-cell">Remarks</th>
            <th class="px-4 py-3 text-left">Status</th>
            <th class="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>

          <!-- EMPTY STATE -->
          <tr v-if="attendances.length === 0">
            <td colspan="11" class="px-4 py-10 text-center text-zinc-400">
              <div class="flex flex-col items-center gap-2">

                <i class="mdi mdi-calendar-remove text-5xl text-zinc-600"></i>

                <p class="text-lg font-medium text-zinc-300">No attendances found</p>
                <p class="text-sm text-zinc-500">Try adding a new record.</p>

              </div>
            </td>
          </tr>

          <tr v-else v-for="(att, index) in attendances" :key="att.id"
            class="border-b border-zinc-700 hover:bg-zinc-700 transition">
            <td class="px-4 py-3 text-zinc-200 font-medium">
              {{ att.dayOfMonth }}
            </td>

            <!-- Time In -->
            <td class="px-4 py-3 text-teal-400 font-semibold">
              {{ formatLocalTime(att.timeIn) }}
            </td>

            <!-- Time Out -->
            <td class="px-4 py-3 text-orange-400 font-semibold">
              {{ formatLocalTime(att.timeOut) }}
            </td>

            <!-- Worked Hours -->
            <td class="px-4 py-3 text-zinc-300 hidden md:table-cell">
              {{ att.workedHours }} hrs
            </td>

            <!-- Late -->
            <td class="px-4 py-3 text-red-400 hidden md:table-cell">
              <span>
                {{ att.lateMinutes }} min
              </span>

            </td>

            <!-- Undertime -->
            <td class="px-4 py-3 text-yellow-400 hidden md:table-cell">
              <span>
                {{ att.underTimeMinutes }} min
              </span>

            </td>

            <!-- Overtime -->
            <td class="px-4 py-3 text-teal-300 hidden xl:table-cell">
              <span>
                {{ att.overtimeMinutes }} min
              </span>

            </td>

            <!-- Total Deductions -->
            <td class="px-4 py-3 text-red-300 hidden xl:table-cell">
              ₱ {{ att.totalDeductions }}
            </td>

            <!-- Remarks -->
            <td class="px-4 py-3 text-zinc-300 hidden xl:table-cell">
              {{ att.remarks }}
            </td>

            <!-- Status Column -->
            <td class="px-4 py-3">
              <div class="flex gap-1 flex-wrap">

                <span v-if="att.absent" class="px-2 py-0.5 rounded text-xs bg-red-500 text-zinc-900">
                  Absent
                </span>

                <span v-if="att.doublePay" class="px-2 py-0.5 rounded text-xs bg-teal-400 text-zinc-900">
                  Double Pay
                </span>

                <span v-if="!att.absent && att.timeIn" class="px-2 py-0.5 rounded text-xs bg-orange-500 text-zinc-900">
                  Present
                </span>

              </div>
            </td>

            <!-- Action -->
            <td class="px-4 py-3">
              <button @click="openUpdate(att, index)" class="px-3 py-1 rounded bg-teal-500 text-zinc-900 text-sm">
                Edit
              </button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>


<script setup lang="ts">

const props = defineProps<{
  attendances: any[],
  salaryMonth: string
}>();

const showFormModal = ref(false)

const form = ref({
  absent: false,
  doublePay: false,
  remarks: '',
  dayOfMonth: 0,
  timeIn: '',
  timeOut: ''
});

const isUpdateMode = ref(false)
const editIndex = ref<number | null>(null)

function openUpdate(att: any, index: number) {
  isUpdateMode.value = true
  editIndex.value = index
  form.value.dayOfMonth = att.dayOfMonth
  form.value.timeIn = att.timeIn
  form.value.timeOut = att.timeOut
  form.value.remarks = att.remarks
  showFormModal.value = true
}

</script>

<style scoped>
table th,
table td {
  white-space: nowrap;
}

tbody tr:nth-child(even) {
  background: #27272a;
  /* Darker Zinc zebra */
}
</style>