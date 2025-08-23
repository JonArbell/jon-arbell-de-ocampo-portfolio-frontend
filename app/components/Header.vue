<template>
  <header
    :class="[
      'flex items-center fixed z-50 top-0 left-0 justify-between w-full p-5 transition-colors duration-500 ease-in-out',
      {
        'bg-zinc-900 shadow-xl': useRoute().path !== '/',
        'bg-transparent shadow-none': useRoute().path === '/',
      },
    ]"
  >
    <NuxtLink
      @click="goHome"
      to="/"
      class="font-extrabold overflow-hidden italic text-white text-base sm:text-lg md:text-xl 2xl:text-2xl"
    >
      <h1 class="space-x-2">Jon <span class="text-orange-700">Arbell</span></h1>
    </NuxtLink>

    <div class="lg:w-[70%] lg:block hidden">
      <Navigations />
    </div>

    <button
      type="button"
      @click="sideBarStore.isSideBarOpen = !sideBarStore.isSideBarOpen"
      class="self-end text-white transition-all duration-300 lg:hidden"
    >
      <i class="fa fa-bars text-xl"></i>
    </button>
  </header>
</template>

<script lang="ts" setup>
const goHome = () => {
  sideBarStore.isSideBarOpen = false;
};

const sideBarStore = useMySideBarStore();
</script>

<style></style>
