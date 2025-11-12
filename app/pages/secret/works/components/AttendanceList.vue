<template>
  <div class="space-y-4">

    <!-- Optional: Month/Year Header -->
    <h2 class="text-lg font-semibold text-orange-400">
      Attendances for {{ month }} {{ year }}
    </h2>

    <!-- Attendance Table for Desktop -->
    <div class="hidden md:block overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-zinc-800 text-zinc-300">
            <th class="px-4 py-2">Day</th>
            <th class="px-4 py-2">Status</th>
            <th class="px-4 py-2">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="att in attendances" :key="att.id" class="bg-zinc-900 hover:bg-zinc-800 transition">
            <td class="px-4 py-2">{{ att.day }}</td>
            <td class="px-4 py-2 capitalize">{{ att.status }}</td>
            <td class="px-4 py-2">{{ att.remarks || '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Attendance Cards for Mobile -->
    <div class="md:hidden space-y-2">
      <div v-for="att in attendances" :key="att.id" class="p-3 bg-zinc-800 rounded shadow hover:bg-zinc-700 transition">
        <div class="flex justify-between">
          <span class="font-medium">Day {{ att.day }}</span>
          <span class="capitalize text-green-400">{{ att.status }}</span>
        </div>
        <div class="text-zinc-400 text-sm mt-1">
          {{ att.remarks || '-' }}
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
defineProps<{
  attendances: {
    id: number | string;
    day: number;
    status: string;
    remarks?: string;
  }[];
  month?: string;
  year?: number;
}>();

// Props:
// attendances = array of attendance objects
// month & year = optional for header display
</script>

<style scoped>
/* Optional: smooth hover effect for table rows */
table tr:hover {
  background-color: #2c2c2c;
}
</style>
