<template>
  <header
    :class="[
      'flex items-center shadow-xl fixed bg-zinc-900 z-50 top-0 left-0 lg:float overflow-auto justify-between w-full p-5 transition-all duration-300',
      { 'xl:!bg-transparent xl:!shadow-none': useRoute().path === '/' },
    ]"
  >
    <NuxtLink
      @click="goHome"
      to="/"
      class="font-extrabold overflow-hidden w-auto italic text-white text-base sm:text-lg md:text-xl 2xl:text-2xl"
    >
      <h1 class="space-x-2">Jon <span class="text-orange-700">Arbell</span></h1>
    </NuxtLink>
    <div class="lg:w-[70%] lg:block hidden"><Navigations /></div>
    <button
      type="button"
      @click="sideBarStore.isSideBarOpen = !sideBarStore.isSideBarOpen"
      class="self-end icon transition-all block duration-500 lg:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-white text-xl"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
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
