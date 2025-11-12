<template>
  <Landing>
    <Custom :image="'/img/photography/photograph_2.webp'">

      <Head :title="'My Tech Stack'"
        :description="`Discover the technologies Jon uses to build full-stack applications — from Spring Boot and Laravel on the backend to Nuxt, Angular, and Tailwind on the frontend, supported by PostgreSQL, MySQL, and modern dev tools.`" />

      <!-- Hero Section -->
      <section>
        <Hero :subtitle="'The technologies behind the solutions'" :title="`My Tools of Choice`"
          :style="'bg-gray-200/90'" />
      </section>

      <!-- About Section -->
      <section>
        <div
          class="flex items-center text-xs xl:text-sm tracking-widest justify-center flex-col gap-5 text-teal-950 h-80 xl:h-96 bg-gray-50 w-full px-4 py-10 xl:px-52">
          <h2 class="text-xl font-semibold">What I Do</h2>
          <p>
            I focus on building full-stack applications with a strong foundation
            in backend and frontend development. On the backend, I work with
            <span class="font-medium">Spring Boot</span> and
            <span class="font-medium">Laravel</span> to create secure, scalable,
            and efficient systems. On the frontend, I specialize in
            <span class="font-medium">Nuxt</span> and
            <span class="font-medium">Angular</span>
            to deliver modern, responsive, and user-friendly applications. My
            goal is to write clean, maintainable code, follow best practices,
            and create impactful software that drives efficiency and innovation.
          </p>
        </div>
      </section>

      <!-- Tech Stacks Section -->
      <section>
        <div class="bg-teal-950 text-white p-20 min-h-96 flex-col flex items-center justify-center gap-10">
          <h2 class="text-xl text-center font-semibold">My Tech Stacks</h2>

          <ul class="grid grid-cols-2 gap-10 justify-items-center md:grid-cols-3 xl:grid-cols-4 text-xs 2xl:text-sm">
            <li v-for="(tech, index) in techStack" :key="tech.name"
              class="rounded-lg text-center bg-zinc-800 shadow-xl hover:scale-110 transition-all duration-300 p-5 flex items-center gap-4 justify-center flex-col h-28 w-28">
              <Motion :initial="{ opacity: 0, scale: 0.8 }" :while-in-view="{ opacity: 1, scale: 1 }" :transition="{
                duration: 0.6,
                ease: 'easeInOut',
                delay: index * 0.1,
              }" :viewport="{ once: true }" class="flex flex-col items-center justify-center">
                <NuxtImg class="h-10" :src="`/img/${tech.icon}`" :alt="tech.name" />
                <span>{{ tech.name }}</span>
              </Motion>
            </li>
          </ul>
        </div>
      </section>
    </Custom>
  </Landing>
</template>

<script lang="ts" setup>
import Head from "~/components/Head.vue";
import Custom from "~/layouts/Custom.vue";
import Landing from "~/layouts/Landing.vue";

const techStack = [
  {
    name: "Spring Boot",
    icon: "spring.png",
  },
  {
    name: "Java",
    icon: "java.png",
  },
  {
    name: "Nuxt",
    icon: "nuxt.png",
  },
  {
    name: "Angular",
    icon: "angular.png",
  },
  {
    name: "Laravel",
    icon: "laravel.png",
  },
  {
    name: "PHP",
    icon: "php.png",
  },
  {
    name: "TypeScript",
    icon: "ts.png",
  },
  {
    name: "JavaScript",
    icon: "js.png",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind.png",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql.png",
  },
  {
    name: "MySQL",
    icon: "mysql.png",
  },
  {
    name: "GitHub",
    icon: "github.png",
  },
  {
    name: "Postman",
    icon: "postman.png",
  },
];
</script>

<style></style>
