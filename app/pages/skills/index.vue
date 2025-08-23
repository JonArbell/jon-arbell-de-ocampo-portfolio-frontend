<template>
  <div>
    <Custom :image="'/img/photography/photograph_2.webp'">
      <Head
        :title="'My Tech Stack'"
        :description="`Explore Jon's projects, tech stack, and resume. Specializing in Nuxt, Angular, Spring Boot and Laravel.`"
      />

      <!-- Hero Section -->
      <section>
        <Hero
          :subtitle="'The technologies behind the solutions'"
          :title="`My Tools of Choice`"
          :style="'bg-gray-200/90'"
        />
      </section>

      <!-- About Section -->
      <section>
        <div
          class="flex items-center text-teal-950 h-80 xl:h-96 bg-gray-50 w-full px-4 py-10 xl:px-52"
        >
          <Motion
            class="flex items-center text-xs 2xl:text-sm h-full tracking-widest justify-center gap-10 xl:gap-4 flex-col xl:flex-row"
            :initial="{ opacity: 0, x: -50 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }"
            :viewport="{ once: true, amount: 0.4 }"
          >
            <h2 class="text-xl font-semibold">What I do</h2>
            <p>
              I am passionate about backend development, continuously refining
              my skills to build secure, scalable, and efficient applications.
              My core expertise lies in building REST APIs with Spring Boot,
              optimizing system performance, and integrating technologies for
              seamless backend solutions. On the frontend, I primarily work with
              Angular to create dynamic user interfaces, but I also build modern
              and responsive apps using Vue 3 JS. I strive to write clean,
              maintainable code, follow best practices, and develop impactful
              software that drives efficiency and innovation.
            </p>
          </Motion>
        </div>
      </section>

      <!-- Tech Stacks Section -->
      <section>
        <div
          class="bg-teal-950 text-white p-20 min-h-96 flex-col flex items-center justify-center gap-10"
        >
          <Motion
            :initial="{ opacity: 0, y: 30 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, ease: 'easeInOut' }"
            :viewport="{ once: true }"
          >
            <h2 class="text-xl text-center font-semibold">My Tech Stacks</h2>
          </Motion>

          <ul
            class="grid grid-cols-2 gap-10 justify-items-center md:grid-cols-3 xl:grid-cols-4 text-xs 2xl:text-sm"
          >
            <li
              v-for="(tech, index) in techStack"
              :key="tech.name"
              class="rounded-lg text-center bg-zinc-800 shadow-xl hover:scale-110 transition-all duration-300 p-5 flex items-center gap-4 justify-center flex-col h-28 w-28"
            >
              <Motion
                :initial="{ opacity: 0, scale: 0.8 }"
                :while-in-view="{ opacity: 1, scale: 1 }"
                :transition="{
                  duration: 0.6,
                  ease: 'easeInOut',
                  delay: index * 0.1,
                }"
                :viewport="{ once: true }"
                class="flex flex-col items-center justify-center"
              >
                <NuxtImg
                  class="h-10"
                  :src="`/img/${tech.icon}`"
                  :alt="tech.name"
                  placeholder="blur"
                />
                <span>{{ tech.name }}</span>
              </Motion>
            </li>
          </ul>
        </div>
      </section>
    </Custom>
  </div>
</template>

<script lang="ts" setup>
import Head from "~/components/Head.vue";
import Custom from "~/layouts/Custom.vue";

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
