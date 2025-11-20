<template>
  <div v-if="hasAnyControls"
    class="w-full flex flex-col md:flex-row gap-3 md:items-center md:justify-between p-4 rounded-2xl bg-zinc-900 shadow-xl border border-zinc-700">

    <!-- Search -->
    <div v-if="searchableColumns.length" class="flex-1">
      <input type="text" v-model="localSearch" @input="onSearchChange" placeholder="Search..."
        class="w-full p-3 rounded-xl bg-zinc-800 text-white placeholder-zinc-500 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500" />
    </div>

    <!-- Sort -->
    <div v-if="sortableColumns.length" class="flex-1 flex flex-col md:flex-row gap-3">
      <select v-model="localSortBy" @change="onSortChange"
        class="w-full p-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
        <option disabled value="">Sort By</option>
        <option v-for="col in sortableColumns" :key="col.name" :value="col.name">
          {{ col.label }}
        </option>
      </select>

      <select v-model="localDirection" @change="onDirectionChange"
        class="w-full p-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>

    <!-- Filters -->
    <!-- <div v-if="filterableColumns.length" class="flex-1 flex flex-col md:flex-row gap-3">
      <div v-for="col in filterableColumns" :key="col.name" class="w-full">
        <select v-model="localFilterValues[col.name]" @change="onFilterChange(col.name)"
          class="w-full p-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
          <option disabled value="">{{ col.label }}</option>
          <option v-for="opt in col.options || []" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>
      </div>
    </div> -->

    <!-- Reset Button -->
    <div class="mt-3 md:mt-0">
      <button @click="resetAll"
        class="w-full md:w-auto px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400">
        Reset
      </button>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

type Option = { label: string; value: string | number; };
type ColumnMeta = {
  name: string;
  label: string;
  type?: string;
  sortable?: boolean;
  filterable?: boolean;
  searchable?: boolean;
  options?: Option[];
};

const props = defineProps<{
  metaDatas?: ColumnMeta[];
}>();

const router = useRouter();
const route = useRoute();

const localSearch = ref(route.query.search || "");
const localSortBy = ref(route.query.sortBy || "");
const localDirection = ref(route.query.direction || "desc");
const localFilterValues = ref<Record<string, any>>({});

const searchableColumns = computed(() => props.metaDatas?.filter(col => col.searchable) || []);
const sortableColumns = computed(() => props.metaDatas?.filter(col => col.sortable) || []);
const filterableColumns = computed(() => props.metaDatas?.filter(col => col.filterable) || []);
const hasAnyControls = computed(() => searchableColumns.value.length || sortableColumns.value.length || filterableColumns.value.length);

const onSearchChange = () => {
  const query = { ...route.query };
  if (localSearch.value) query.search = localSearch.value;
  else delete query.search;
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
  localFilterValues.value = {};

  const { tab } = route.query;
  router.replace({ query: tab ? { tab } : {} });
};

</script>

<style scoped></style>
