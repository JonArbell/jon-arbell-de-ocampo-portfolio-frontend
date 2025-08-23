<template>
  <div>
    <nav>
      <ul>
        <div
          class="xl:text-sm md:text-xs w-full text-[10px] space-y-7 lg:space-y-0 py-4 lg:py-0 px-10 lg:px-0 lg:flex items-center justify-around"
        >
          <li v-for="(nav, index) in navStore.navs" :key="index">
            <NuxtLink
              class="transition-all duration-300"
              @click="changeRoute"
              :to="nav.link"
            >
              <span
                :class="[
                  'hover:text-orange-700',
                  route.path === '/' + nav.link
                    ? 'text-orange-700 brightness-150'
                    : 'text-white',
                ]"
              >
                {{ nav.name }}
              </span>
            </NuxtLink>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useMySideBarStore } from "~/stores/side-bar";

const sidebarStore = useMySideBarStore();
const changeRoute = () => {
  sidebarStore.isSideBarOpen = false;
};

const route = useRoute();

const navStore = useMyNavigationsStore();
</script>

<style></style>
