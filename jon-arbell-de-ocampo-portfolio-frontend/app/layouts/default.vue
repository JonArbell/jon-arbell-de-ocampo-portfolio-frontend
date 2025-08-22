<template>
  <Header />
  <div
    class="min-h-screen max-h-screen max-w-screen bg-center bg-cover"
    :style="`background-image: url(&quot;/img/cover-hero-section.png&quot;)`"
  >
    <main class="pt-16 min-h-full max-w-full">
      <slot @click="sidebarStore.isSideBarOpen = false" />
    </main>

    <Sidebar />
  </div>
</template>

<script lang="ts" setup>
const sidebarStore = useMySideBarStore();
</script>
