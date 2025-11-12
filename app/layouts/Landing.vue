<template>
  <Header class="" />
  <div class="min-h-screen max-h-screen max-w-screen bg-center bg-cover overflow-x-hidden"
    :style="`background-image: url(&quot;/img/cover-hero-section.png&quot;)`">
    <main :class="[

      'max-w-full relative z-10 pt-16 min-h-full'
    ]">
      <slot @click="sidebarStore.isSideBarOpen = false" />
    </main>

    <Sidebar />
  </div>
</template>

<script lang="ts" setup>
const sidebarStore = useMySideBarStore();


</script>

<style></style>