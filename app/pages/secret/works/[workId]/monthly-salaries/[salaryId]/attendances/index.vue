<template>

  <Head title="Attendances" description="Angas" />

  <PageLayout>

    <!-- ADD BUTTON -->
    <div class="flex justify-end">
      <button @click="openAdd()" class="px-4 py-2 bg-orange-500 text-zinc-900 rounded font-medium shadow">
        Add Attendance
      </button>
    </div>

    <h2 class="text-xl font-semibold text-orange-400">
      Attendances in {{ formatYearMonth(monthlySalary?.data.salaryMonth ?? '') }}
    </h2>

    <ListTable :metaDatas="[]" :isloading="pending" :data="attendances?.data?.content ?? []" />

    <teleport to="body">
      <div v-if="showFormModal" class="fixed inset-0 z-50 bg-black/60 flex justify-center items-center px-4">
        <div class="bg-zinc-800 p-6 rounded shadow w-full max-w-md space-y-4">

          <h3 class="text-orange-400 font-semibold text-lg">
            {{ isUpdateMode ? 'Update Attendance' : 'Add Attendance' }}
          </h3>

          <div class="space-y-3">

            <!-- Day -->
            <div>
              <label class="block text-zinc-300">Day</label>
              <input type="number" min="1" max="2" v-model="form.dayOfMonth"
                class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
            </div>

            <!-- Time In -->
            <div>
              <label class="block text-zinc-300">Time In</label>
              <input type="time" v-model="form.timeIn" class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
            </div>

            <!-- Time Out -->
            <div>
              <label class="block text-zinc-300">Time Out</label>
              <input type="time" v-model="form.timeOut" class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
            </div>

            <!-- Remarks -->
            <div>
              <label class="block text-zinc-300">Remarks</label>
              <input type="text" v-model="form.remarks" class="w-full p-2 rounded bg-zinc-900 text-zinc-200" />
            </div>

            <!-- Checkboxes -->
            <div class="flex items-center gap-4 pt-2">

              <!-- Absent -->
              <label class="flex items-center gap-2 text-zinc-300 cursor-pointer">
                <input type="checkbox" v-model="form.absent" class="w-4 h-4 rounded bg-zinc-900" />
                Absent
              </label>

              <!-- Double Pay -->
              <label class="flex items-center gap-2 text-zinc-300 cursor-pointer">
                <input type="checkbox" v-model="form.doublePay" class="w-4 h-4 rounded bg-zinc-900" />
                Double Pay
              </label>

            </div>
          </div>

          <!-- ACTION BUTTONS -->
          <div class="flex justify-end gap-2 pt-4">

            <button @click="isUpdateMode ? updateAttendance() : saveAttendance()"
              class="px-3 py-1 bg-orange-400 text-zinc-900 rounded">
              {{ isUpdateMode ? 'Update' : 'Save' }}
            </button>

            <button @click="showFormModal = false" class="px-3 py-1 bg-red-500 text-zinc-100 rounded">
              Cancel
            </button>
          </div>

        </div>
      </div>
    </teleport>

  </PageLayout>
</template>

<script lang="ts" setup>
import { useMyWorkStoreStore } from '~/pages/secret/works/stores/work-store';
import { monthlySalaryService } from '~/services/monthly-salary.service';
import { workService } from '~/services/work.service';
import Head from '~/components/Head.vue';
import { attendanceService } from '~/services/attendance.service';
import ListTable from '~/components/authenticated/ListTable.vue';
import PageLayout from '~/layouts/authenticated/PageLayout.vue';

const route = useRoute();

const workStore = useMyWorkStoreStore();

const salaryId = computed(() => route.params.salaryId as string);

const workId = computed(() => route.params.workId as string);

const { data: attendances, refresh: attendancesRefresh, pending } = await useAsyncData(`all-attendances-${route.path}`, async () => await monthlySalaryService()
  .fetchAllAttendancesByMonthlySalaryId(salaryId.value), {
  watch: [salaryId]
});

const { data: monthlySalary } = await useAsyncData(`monthly-salary-in-all-attendances-${route.path}`, async () => await monthlySalaryService()
  .fetchMonthlySalaryById(salaryId.value), {
  watch: [salaryId]
});

const { } = await useAsyncData(`work-from-attendances-${route.path}-${workId.value}`, async () => {

  const res = await workService()
    .fetchWorkById(workId.value);

  workStore.selectedWork = res.data;

  return res;

}, {
  watch: [workId],
  immediate: false
});

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

function openAdd() {
  isUpdateMode.value = false
  editIndex.value = null
  form.value.dayOfMonth = 0
  form.value.timeIn = ''
  form.value.timeOut = ''
  form.value.remarks = ''
  showFormModal.value = true
}

async function saveAttendance() {
  if (form.value.dayOfMonth === 0) return

  try {

    await attendanceService().addAttendanceManual(salaryId.value, form.value);
    showFormModal.value = false
    await attendancesRefresh();
  } catch (e) {

  }


}

function updateAttendance() {
  if (editIndex.value === null) return

  showFormModal.value = false
}
</script>

<style scoped>
/* Optional: smooth hover effect for table rows */
table tr:hover {
  background-color: #2c2c2c;
}
</style>
