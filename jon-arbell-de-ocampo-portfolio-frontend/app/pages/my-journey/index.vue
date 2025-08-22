<template>
  <div>
    <Custom :image="'/img/photography/photograph_2.webp'">
      <Head
        :title="'My Journey'"
        :description="`Explore Jon's projects, tech stack, and resume. Specializing in Nuxt, Angular, Spring Boot and Laravel.`"
      />

      <section>
        <div>
          <Hero
            :subtitle="'From C++ beginnings to Backend Developer — the journey continues.'"
            :title="`A Developer on a Learning Journey`"
            :style="'bg-gray-200/90'"
          />
        </div>
      </section>

      <section class="container mx-auto px-6 py-20 bg-zinc-900">
        <div class="relative border-l-4 border-orange-500 pl-6">
          <div
            v-for="(item, index) in timeline"
            :key="index"
            class="mb-16 relative group tracking-widest"
          >
            <span
              class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full ring-4 ring-teal-900 group-hover:scale-125 transition-transform duration-300"
            ></span>

            <!-- Card -->
            <div
              class="bg-gray-50 p-6 rounded-2xl shadow-lg transition-transform duration-300 group-hover:translate-x-2 group-hover:shadow-xl"
            >
              <h2 class="text-xl font-semibold text-orange-700 mb-2">
                {{ item.title }}
              </h2>
              <small class="text-xs text-teal-800 font-medium mb-3">
                {{ item.date }}
              </small>
              <p class="text-teal-950 2xl:text-sm text-xs leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="text-center tracking-widest py-16 bg-gradient-to-b from-gray-50 to-gray-100"
      >
        <h2 class="text-xl font-bold text-orange-700 mb-6">
          Always Learning, Always Building
        </h2>
        <p
          class="max-w-2xl mx-auto text-teal-800 text-xs 2xl:text-sm leading-relaxed"
        >
          This journey isn’t a finish line — it’s a launchpad. Every challenge
          I’ve faced sharpened my skills, and every project is a step toward
          creating something bigger. The best part? I’m just getting started.
        </p>
      </section>
    </Custom>
  </div>
</template>

<script lang="ts" setup>
import Head from "~/components/Head.vue";
import Custom from "~/layouts/Custom.vue";

const timeline = [
  {
    title: "First Steps in Programming (C++)",
    date: "May – June 2023",
    description:
      "Started learning programming with C++. Focused on console basics, learning problem-solving and logic building.",
  },
  {
    title: "TESDA Java NC III Course",
    date: "Oct – Dec 2023",
    description:
      "Enrolled in TESDA’s Java Programming NC III course. Learned Java fundamentals, basic console applications, and a little bit of JavaFX.",
  },
  {
    title: "Data Encoder Job",
    date: "Jan – July 2024",
    description:
      "Worked as a Data Encoder while continuing to study programming on the side. This period built my discipline and time management.",
  },
  {
    title: "Fullstack Web Dev Self-Study",
    date: "April – July 2024",
    description:
      "Started Angela Yu’s Fullstack Web Development 2024 course on Udemy. Learned HTML, CSS, and JavaScript basics alongside Spring Boot. Couldn’t fully commit due to job workload.",
  },
  {
    title: "Grinding & Deep Learning",
    date: "Aug – Dec 2024",
    description:
      "Dedicated time to seriously grind programming. Focused on Spring Boot for backend and picked up Angular (from November). Built small projects and practiced building CRUD apps.",
  },
  {
    title: "Angular & Frontend Growth",
    date: "Jan – Mar 2025",
    description:
      "Continued learning Angular and preparing for professional work. Improved on UI design with Tailwind and explored Nuxt 3 basics.",
  },
  {
    title: "Junior Frontend Developer",
    date: "April – July 2025",
    description:
      "Got hired as a Junior Frontend Developer (Vue.js). Built dashboards, charts, user management, and barangay system features. Learned Vue 3 fast in a production environment.",
  },
  {
    title: "Junior Backend Developer (Laravel)",
    date: "Aug 2025 – Present",
    description:
      "Transitioned to Junior Backend Developer as per my passion. Now focusing on Laravel and backend system development while continuously learning scalable system design.",
  },
];
</script>

<style></style>
