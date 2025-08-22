<template>
  <header
    :class="[
      'flex items-center shadow-xl fixed bg-zinc-900 z-50 top-0 left-0 lg:float overflow-auto justify-between w-full p-5 lg:!animate__animated animate_faster animate__fadeInDown transition-all duration-300',
      {
        'xl:!bg-transparent xl:!shadow-none': useRoute().path === '/',
      },
    ]"
  >
    <NuxtLink
      @click="goHome"
      to="/"
      :class="[
        {
          'animate__animated lg:animate__fadeInLeft animate_slow animate__fadeInDown':
            sideBarStore.isFirstLoad,
        },
      ]"
      class="font-extrabold overflow-hidden w-auto italic text-white text-base sm:text-lg md:text-xl 2xl:text-2xl"
    >
      <h1 class="space-x-2">Jon <span class="text-orange-700">Arbell</span></h1>
    </NuxtLink>

    <div class="lg:w-[70%] lg:block hidden">
      <Navigations />
    </div>

    <button
      type="button"
      @click="sideBarStore.isSideBarOpen = !sideBarStore.isSideBarOpen"
      :class="[
        {
          animate__animated: sideBarStore.isFirstLoad,
        },
      ]"
      class="self-end text-white transition-all duration-500 lg:hidden animate_slow animate_animated animate__fadeInRight"
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
