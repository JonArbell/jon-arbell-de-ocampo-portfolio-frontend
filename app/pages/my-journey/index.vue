<template>
  <Landing>
    <Custom :image="'/img/photography/photograph_2.webp'">

      <Head :title="'My Journey'"
        :description="`Follow Jon's journey from early coding days to becoming a backend and frontend developer. Explore his timeline, reflections, and future goals in tech.`" />

      <!-- Hero -->
      <section>
        <Hero :subtitle="'From C++ beginnings to Backend Developer — the journey continues.'"
          :title="`A Developer on a Learning Journey`" :style="'bg-gray-200/90'" />
      </section>

      <!-- Timeline -->
      <section class="py-20 w-full bg-zinc-950">
        <div class="relative lg:mx-52 mx-4 border-l-4 border-orange-500 pl-6">
          <Timeline :timeline="timeline" />
        </div>
      </section>

      <!-- Reflection -->
      <section>
        <div
          class="text-center tracking-widest xl:px-52 px-4 py-20 h-72 flex flex-col items-center justify-center gap-5">
          <h2 class="text-xl font-bold text-orange-700 mb-6">
            Always Learning, Always Building
          </h2>
          <p class="text-teal-800 text-xs 2xl:text-sm leading-relaxed">
            This journey isn’t a finish line — it’s a launchpad. Every challenge
            I’ve faced sharpened my skills, and every project is a step toward
            creating something bigger. The best part? I’m just getting started.
          </p>
        </div>
      </section>

      <!-- Future Goals -->
      <section>
        <div class="text-center tracking-widest xl:px-52 px-4 py-20 bg-orange-900 text-white">
          <h2 class="text-xl font-bold text-white mb-6">
            What’s Next in My Journey?
          </h2>
          <p class="max-w-2xl mx-auto text-orange-100 text-xs 2xl:text-sm leading-relaxed mb-10">
            My journey has only just started. As I continue building real-world
            projects, I’m setting my eyes on more ambitious goals. The plan?
            Stay curious, keep pushing limits, and contribute to meaningful
            systems that impact communities.
          </p>

          <!-- Reusable Component -->
          <Box :goals="goals" />
        </div>
      </section>
    </Custom>
  </Landing>
</template>

<script lang="ts" setup>
import Head from "~/components/Head.vue";
import Custom from "~/layouts/Custom.vue";
import Box from "./components/Box.vue";
import Timeline from "./components/Timeline.vue";
import Landing from "~/layouts/Landing.vue";
const goals = [
  {
    title: "Master Laravel & Spring Boot",
    description:
      "Sharpen Laravel for company projects while continuing to deepen Spring Boot expertise for scalable, enterprise-grade systems.",
  },

  {
    title: "Fullstack Confidence",
    description:
      "Strengthen skills in both frontend (Vue/Nuxt, Angular) and backend (Spring Boot, Laravel) to be an all-around dev.",
  },
  {
    title: "Open Source & Community",
    description:
      "Share projects, contribute to open-source, and give back to the dev community that fueled my growth.",
  },
];

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
    date: "Aug 2025 – Nov 2025",
    description:
      "Transitioned to Junior Backend Developer as per my passion. Now focusing on Laravel and backend system development while continuously learning scalable system design.",
  },
];
</script>

<style></style>
