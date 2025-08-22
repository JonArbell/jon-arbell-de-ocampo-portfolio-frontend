<template>
  <footer class="bg-zinc-900 text-zinc-200 px-6 py-12">
    <div
      class="w-full mx-auto flex flex-col xl:flex-row justify-between items-center gap-10"
    >
      <!-- Left Brand / Tagline -->
      <div class="text-center space-y-2">
        <h3 class="tracking-widest font-bold text-xl text-orange-800">
          Keep Exploring
        </h3>
      </div>

      <!-- Divider -->
      <hr class="bg-white border-0 w-full h-px xl:w-px xl:h-20 opacity-30" />

      <!-- Middle Nav -->
      <div class="text-center">
        <nav>
          <ul
            class="flex flex-col xl:flex-row gap-4 xl:gap-6 text-xs font-medium"
          >
            <li>
              <NuxtLink
                to="/"
                class="hover:text-orange-500 transition-colors duration-300"
              >
                Home
              </NuxtLink>
            </li>
            <li v-for="(nav, index) in navStore.navs" :key="index">
              <NuxtLink
                :to="nav.link"
                class="hover:text-orange-500 transition-colors duration-300"
              >
                {{ nav.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="mt-4 text-xs text-zinc-500 space-y-2">
          <p>&copy; {{ new Date().getFullYear() }} Jon Arbell De Ocampo</p>
          <p>All rights reserved.</p>
        </div>
      </div>

      <!-- Divider -->
      <hr class="bg-white border-0 w-full h-px xl:w-px xl:h-20 opacity-30" />

      <!-- Right Socials -->
      <div class="text-center xl:text-right space-y-4">
        <ul class="flex justify-center gap-5">
          <li
            v-for="(social, index) in socials"
            :key="index"
            class="hover:scale-110 transition-transform"
          >
            <NuxtLink
              :to="social.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <NuxtImg
                :src="social.img"
                :alt="social.name"
                class="h-8 w-8 rounded-full hover:border-orange-500 transition-colors"
              />
            </NuxtLink>
          </li>
        </ul>
        <p class="text-sm text-zinc-400">
          <a
            href="mailto:deocampo.arbelldonor@gmail.com"
            class="hover:text-orange-500 transition-colors"
          >
            deocampo.arbelldonor@gmail.com
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const navStore = useMyNavigationsStore();

const socials = [
  {
    name: "GitHub",
    link: "",
    img: "/img/github_icon.png",
  },
  {
    name: "LinkedIn",
    link: "",
    img: "/img/linkedin_icon.png",
  },
  {
    name: "Instagram",
    link: "",
    img: "/img/instagram.png",
  },
];
</script>

<style></style>
