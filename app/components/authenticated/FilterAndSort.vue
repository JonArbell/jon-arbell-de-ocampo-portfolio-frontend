<template>
  <div v-if="hasAnyControls"
    class="w-full flex flex-col gap-3 p-3 sm:p-4 rounded-2xl bg-zinc-900 shadow-xl border border-zinc-700">

    <!-- Search -->
    <div v-if="searchableColumns.length" class="flex flex-col sm:flex-row sm:items-center sm:gap-2">
      <input type="text" v-model="localSearch" @keyup.enter="onSearchClick" placeholder="Search..."
        class="flex-1 p-2 sm:p-3 rounded-xl bg-zinc-800 text-white placeholder-zinc-500 text-sm sm:text-base border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" />
      <button @click="onSearchClick"
        class="w-full sm:w-auto mt-2 sm:mt-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-teal-500 text-white text-sm sm:text-base font-medium hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-colors">
        Search
      </button>
    </div>

    <!-- Sort -->
    <div v-if="sortableColumns.length" class="flex flex-col sm:flex-row sm:items-center sm:gap-2">
      <select v-model="localSortBy" @change="onSortChange"
        class="flex-1 p-2 sm:p-3 rounded-xl bg-zinc-800 text-white text-sm sm:text-base border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors">
        <option disabled value="">Sort By</option>
        <option v-for="col in sortableColumns" :key="col.name" :value="col.name">
          {{ col.label }}
        </option>
      </select>

      <select v-model="localDirection" @change="onDirectionChange"
        class="flex-1 p-2 sm:p-3 rounded-xl bg-zinc-800 text-white text-sm sm:text-base border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors mt-2 sm:mt-0">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>

    <!-- Filter -->
    <div v-if="filterableColumns.length" class="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
      <h3 class="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-0">Filter</h3>

      <div v-for="col in filterableColumns" :key="col.name"
        class="flex items-center gap-2 bg-zinc-800 rounded-xl border border-zinc-700 hover:border-teal-500 transition-colors cursor-pointer p-2">
        <input type="checkbox" :id="`${col.name}-filter`" :value="col.name" v-model="localFilterValues"
          @change="onFilterChange" class="w-4 h-4 sm:w-5 sm:h-5 accent-teal-500" />
        <label :for="`${col.name}-filter`" class="text-white text-sm sm:text-base font-medium select-none">
          {{ col.label }}
        </label>
      </div>
    </div>

    <!-- Reset Button -->
    <div class="flex justify-end mt-2">
      <button @click="resetAll"
        class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-red-600 text-white text-sm sm:text-base font-medium hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors">
        Reset
      </button>
    </div>

  </div>
</template>


<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

type ColumnMeta = {
  name: string;
  label: string;
  type?: string;
  sortable?: boolean;
  filterable?: boolean;
  searchable?: boolean;
};

const props = defineProps<{
  metaDatas?: ColumnMeta[];
}>();

const router = useRouter();
const route = useRoute();

const localSearch = ref(route.query.q || "");
const localSortBy = ref(route.query.sortBy || "");
const localDirection = ref(route.query.direction || "desc");
const localFilterValues = ref<string[]>(
  route.query.filter
    ? String(route.query.filter).split(",")
    : []
);

const searchableColumns = computed(() => props.metaDatas?.filter(col => col.searchable) || []);
const sortableColumns = computed(() => props.metaDatas?.filter(col => col.sortable) || []);
const filterableColumns = computed(() => props.metaDatas?.filter(col => col.filterable) || []);
const hasAnyControls = computed(() => searchableColumns.value.length || sortableColumns.value.length || filterableColumns.value.length);

const onSearchClick = () => {
  const query = { ...route.query };
  if (localSearch.value) query.q = localSearch.value;
  else delete query.q;

  router.replace({ query });
};

const onFilterChange = () => {
  const query = { ...route.query };

  if (localFilterValues.value.length > 0) {
    query.filter = localFilterValues.value.join(",");
  } else {
    delete query.filter;
  }

  router.replace({ query });
};

const onSortChange = () => {
  const query = { ...route.query };
  if (localSortBy.value) query.sortBy = localSortBy.value;
  else delete query.sortBy;
  router.replace({ query });
};

const onDirectionChange = () => {
  const query = { ...route.query };
  if (localDirection.value === 'asc') query.direction = localDirection.value;
  else delete query.direction;
  router.replace({ query });
};

const resetAll = () => {
  localSearch.value = "";
  localSortBy.value = "";
  localDirection.value = "desc";
  localFilterValues.value = [];

  const { tab } = route.query;
  router.replace({ query: tab ? { tab } : {} });
};

</script>

<style scoped></style>
