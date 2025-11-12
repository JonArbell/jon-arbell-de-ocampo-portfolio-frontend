<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="bg-zinc-900 text-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative overflow-auto max-h-[80vh]">

      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-green-400">Attendance</h2>
        <button @click="$emit('close')" class="text-zinc-400 hover:text-red-500 text-2xl">&times;</button>
      </div>

      <!-- Attendance Table -->
      <table class="w-full table-auto border-collapse">
        <thead>
          <tr class="bg-zinc-800">
            <th class="px-4 py-2 text-left text-zinc-200">Day</th>
            <th class="px-4 py-2 text-left text-zinc-200">Status</th>
            <th class="px-4 py-2 text-left text-zinc-200">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="att in attendance" :key="att.id" class="hover:bg-zinc-700 transition">
            <td class="px-4 py-2">{{ att.day }}</td>
            <td class="px-4 py-2">{{ att.status || 'Present' }}</td>
            <td class="px-4 py-2">{{ att.notes || '-' }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Footer -->
      <div class="mt-4 flex justify-end">
        <button @click="$emit('close')"
          class="px-4 py-2 bg-green-500 rounded hover:bg-green-400 transition">Close</button>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ attendance: any[] }>();
</script>
