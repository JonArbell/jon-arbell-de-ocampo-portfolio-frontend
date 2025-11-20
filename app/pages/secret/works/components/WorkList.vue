<template>
  <ListLoadingAnimation v-if="isloading" />

  <div class="overflow-x-auto w-full rounded shadow bg-zinc-800">
    <table class="min-w-full table-auto border border-zinc-700">
      <thead class="bg-zinc-900 text-zinc-300">
        <tr>
          <th class="px-3 py-2 text-left text-teal-400 whitespace-nowrap">Title</th>
          <th class="px-3 py-2 text-left text-teal-400 whitespace-nowrap">Description</th>
          <th class="px-3 py-2 text-left text-teal-400 whitespace-nowrap">Employer</th>
          <th class="px-3 py-2 text-left text-teal-400 whitespace-nowrap">ID</th>
          <th class="px-3 py-2 text-left text-teal-400 whitespace-nowrap">Start Contract</th>
          <th class="px-3 py-2 text-left text-teal-400 whitespace-nowrap">End Contract</th>
          <th class="px-3 py-2 text-left text-teal-400 whitespace-nowrap">Created</th>
          <th class="px-3 py-2 text-center text-teal-400 whitespace-nowrap">Active</th>
          <th class="px-3 py-2 text-center text-teal-400 whitespace-nowrap">Full Time</th>
          <th class="px-3 py-2 text-center text-teal-400 whitespace-nowrap">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="work in works" :key="work.id" class="bg-zinc-800 hover:bg-zinc-700 transition">
          <td class="px-3 py-2 font-semibold text-white truncate max-w-[160px]">{{ work.jobTitle }}</td>
          <td class="px-3 py-2 text-zinc-400 truncate max-w-[220px]">{{ work.description }}</td>
          <td class="px-3 py-2 text-zinc-300 whitespace-nowrap">{{ work.employer }}</td>

          <!-- UUID truncated for mobile -->
          <td class="px-3 py-2 text-zinc-300 truncate max-w-[120px]" :title="work.id">
            {{ work.id.slice(0, 8) + '...' }}
          </td>

          <td class="px-3 py-2 text-zinc-300 whitespace-nowrap">{{ formatLocalDate(work.startContractDate) }}</td>
          <td class="px-3 py-2 text-zinc-300 whitespace-nowrap">{{ formatLocalDate(work.endContractDate) }}</td>
          <td class="px-3 py-2 text-zinc-300 whitespace-nowrap">{{ formatLocalDateTime(work.createdAt) }}</td>

          <td class="px-3 py-2 text-center whitespace-nowrap">
            <span :class="work.active
              ? 'bg-teal-500 text-white px-2 py-1 rounded-full text-xs'
              : 'bg-zinc-600 text-zinc-200 px-2 py-1 rounded-full text-xs'">
              {{ work.active ? 'Yes' : 'No' }}
            </span>
          </td>

          <td class="px-3 py-2 text-center whitespace-nowrap">
            <span :class="work.fullTime
              ? 'bg-teal-500 text-white px-2 py-1 rounded-full text-xs'
              : 'bg-zinc-600 text-zinc-200 px-2 py-1 rounded-full text-xs'">
              {{ work.fullTime ? 'Yes' : 'No' }}
            </span>
          </td>

          <td class="px-3 py-2 text-center whitespace-nowrap flex gap-2 justify-center">
            <NuxtLink :to="`${useRoute().path}/${work.id}`"
              class="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-400 transition text-sm">View</NuxtLink>
            <NuxtLink :to="`${useRoute().path}/${work.id}/update`"
              class="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-400 transition text-sm">Update
            </NuxtLink>
          </td>
        </tr>

        <tr v-if="!works.length">
          <td colspan="10" class="px-4 py-6 text-center text-zinc-400">
            No work records found.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script lang="ts" setup>
import ListLoadingAnimation from '~/components/authenticated/ListLoadingAnimation.vue';

defineProps<{
  works: any[];
  isloading: boolean;
}>();

</script>

<style scoped>
/* Optional: striped hover effect */
tbody tr:nth-child(even) {
  background-color: #2c2c2c;
  /* dark zinc variant */
}

tbody tr:hover {
  box-shadow: 0 4px 12px rgba(255, 165, 0, 0.2);
}

/* truncate long text nicely */
td.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
