<template>
  <div
    :class="{
      hidden: !sidebarStore.isSideBarOpen,
    }"
    class="fixed top-0 w-full bg-zinc-900 mt-16 animate__animated animate__superfast animate__slideInDown"
  >
    <Navigations />
  </div>
</template>

<script lang="ts" setup>
import Navigations from "./Navigations.vue";

const sidebarStore = useMySideBarStore();
</script>

<style></style>
