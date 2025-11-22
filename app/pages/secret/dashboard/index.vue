<template>

  <Head :title="`Dashboard | ${myAccountStore.myAccount ? myAccountStore.myAccount.firstName : 'Guest'}`"
    description="Overview of your tasks, work entries, and key information on Jon Arbell's dashboard." />

  <AuthenticatedLayout>
    <div class="p-6 space-y-6">

      <!-- Header -->
      <div>
        <h1 class="text-4xl font-bold text-white">Welcome back, {{ myAccountStore.myAccount ?
          myAccountStore.myAccount.firstName : 'Guest' }}!</h1>
        <p class="text-zinc-400 mt-2">Here’s your quick overview</p>
      </div>

      <!-- Grid of Page Cards -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <router-link v-for="page in sidebars" :key="page.link" :to="`/${page.link}`"
          class="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-md transition cursor-pointer">
          <i :class="`${page.icon} text-3xl text-teal-400`"></i>
          <span class="text-zinc-200 font-medium text-center">{{ page.name }}</span>
        </router-link>
      </div>

      <!-- Optional: Quick Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-zinc-900 p-4 rounded-xl shadow flex flex-col items-start">
          <span class="text-sm text-zinc-400">Tasks</span>
          <span class="text-2xl font-bold text-white">12</span>
        </div>
        <div class="bg-zinc-900 p-4 rounded-xl shadow flex flex-col items-start">
          <span class="text-sm text-zinc-400">Savings</span>
          <span class="text-2xl font-bold text-white">₱25,000</span>
        </div>
        <div class="bg-zinc-900 p-4 rounded-xl shadow flex flex-col items-start">
          <span class="text-sm text-zinc-400">Expenses</span>
          <span class="text-2xl font-bold text-white">₱8,300</span>
        </div>
      </div>

    </div>
  </AuthenticatedLayout>
</template>

<script lang="ts" setup>
import AuthenticatedLayout from '~/layouts/AuthenticatedLayout.vue';
import Head from '~/components/Head.vue';
import { sidebars } from '~/utils/sidebars';

const myAccountStore = useMyMyAccountStore();

</script>

<style scoped>
/* Optional: hover effect & transition tweaks */
</style>
