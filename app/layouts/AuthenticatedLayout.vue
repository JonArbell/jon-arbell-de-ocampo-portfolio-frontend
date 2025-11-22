<template>


  <div class="flex h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white">

    <!-- SIDEBAR -->
    <aside :class="[
      'fixed md:static top-0 left-0 h-full w-64 flex flex-col p-5 transition-transform duration-300 z-40 border-r border-zinc-700/50 backdrop-blur-sm bg-zinc-900/80 shadow-lg',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    ]">
      <!-- Logo / Title -->
      <h2
        class="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500 drop-shadow-lg flex-shrink-0">
        {{ myAccountStore.myAccount ? myAccountStore.myAccount.username : 'Guest' }}
      </h2>

      <!-- Navigation -->
      <nav
        class="flex flex-col space-y-2 mt-8 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 flex-1 pr-2">
        <NuxtLink v-for="s in sidebars" :key="s.name" :to="`/secret/${s.link}`" :class="[
          route.path === `/secret/${s.link}`
            ? 'bg-gradient-to-r from-orange-900 via-zinc-800 to-green-900 text-white shadow-md shadow-orange-900/40 border-l-4 border-green-500'
            : 'hover:bg-zinc-800/70 text-zinc-300 hover:text-white',
          'flex items-center px-4 py-3 rounded-md transition-all duration-200 gap-3'
        ]" @click="closeSidebarOnMobile">
          <i class="mdi text-2xl" :class="s.icon" />
          <span class="font-medium tracking-wide">{{ s.name }}</span>
        </NuxtLink>
      </nav>

      <!-- Footer -->
      <div class="mt-auto pt-6 border-t border-zinc-700/40 flex-shrink-0">
        <footer>
          <p class="text-xs text-zinc-500 text-center">
            © {{ new Date().getFullYear() }} Keep Exploring. All rights reserved.
          </p>
        </footer>
      </div>
    </aside>

    <!-- OVERLAY (Mobile only) -->
    <div v-if="sidebarOpen" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
      @click="sidebarOpen = false"></div>

    <!-- MAIN CONTENT -->
    <main class="flex-1 flex flex-col overflow-hidden">

      <!-- HEADER -->
      <header
        class="flex justify-between items-center bg-zinc-900/70 border-b border-zinc-800/60 p-4 md:p-5 shadow-md backdrop-blur-sm">
        <div class="flex items-center gap-3">
          <!-- Hamburger -->
          <button @click="sidebarOpen = !sidebarOpen"
            class="md:hidden text-3xl text-orange-400 hover:text-orange-300 transition-colors">
            <i class="mdi mdi-menu"></i>
          </button>

        </div>

        <!-- Profile dropdown -->
        <div class="relative">
          <img src="" alt="Profile"
            class="w-10 h-10 rounded-full border-2 border-green-500 cursor-pointer hover:scale-105 transition-transform duration-200"
            @click="toggleProfile = !toggleProfile" />

          <Transition name="fade">
            <div v-if="toggleProfile"
              class="absolute right-0 mt-3 w-48 bg-zinc-900/90 border border-zinc-700/60 rounded-md shadow-lg py-2 backdrop-blur-sm">

              <NuxtLink v-for="p in profileLinks" :key="p.name" :to="`/secret/${p.link}`"
                class="block px-4 py-2 hover:bg-zinc-800/80 transition-colors" @click="toggleProfile = false">
                {{ p.name }}
              </NuxtLink>

              <button @click="logout" class="block w-full text-left px-4 py-2 hover:bg-red-700/80 transition-colors">
                Logout
              </button>
            </div>
          </Transition>
        </div>
      </header>

      <!-- CONTENT -->
      <section class="flex-1 overflow-auto p-4 md:p-8 bg-zinc-950/30">
        <div>
          <slot />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, Transition } from 'vue'
import { useRoute } from '#app'
import { useMyTokenStore } from '~/stores/token'
import { sidebars } from '~/utils/sidebars'
import { myAccountService } from '~/services/my-account.service'

const route = useRoute()
const tokenStore = useMyTokenStore()
const toggleProfile = ref(false)
const sidebarOpen = ref(false)

const isLoading = ref(true);

const myAccountStore = useMyMyAccountStore();

const logout = () => {
  tokenStore.clearAllTokens()
  navigateTo('/secret/login')
}

const closeSidebarOnMobile = () => {
  if (window.innerWidth < 768) sidebarOpen.value = false
}

const { } = await useAsyncData(`my-account-${route.path}`, async () => {

  if (myAccountStore.myAccount) return null;

  const res = await myAccountService().fetchMyAccount();

  myAccountStore.myAccount = res.data;

  return res;
});

onMounted(() => {
  if (!tokenStore.isAuthenticated) navigateTo('/secret/login');

  setTimeout(() => {
    isLoading.value = false;
  }, 700);

})

const profileLinks = [
  { name: 'My Profile', link: 'my-profile' },
  { name: 'My Portfolio', link: 'my-portfolio' },
];

</script>
<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Optional: profile dropdown fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #18181b;
}

::-webkit-scrollbar-thumb {
  background-color: #4b5563;
  border-radius: 4px;
}
</style>
