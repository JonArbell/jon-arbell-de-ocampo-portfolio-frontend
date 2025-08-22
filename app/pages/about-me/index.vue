<template>
  <div>
    <Custom :image="'/img/cover-hero-section.png'">
      <Head
        :title="'About Me'"
        :description="`Explore Jon's projects, tech stack, and resume. Specializing in Nuxt, Angular, Spring Boot and Laravel.`"
      />

      <section>
        <div>
          <Hero
            :subtitle="'Driven by curiosity, grounded in code'"
            :title="`From Learning to Mastery: A Developer's Story`"
            :style="'bg-gray-200/90'"
          />
        </div>
      </section>

      <section>
        <div
          class="flex items-center justify-center gap-10 xl:gap-4 flex-col-reverse xl:flex-row xl:h-96 bg-gray-50 w-full px-4 py-10 xl:px-52"
        >
          <div
            class="flex-1 text-xs 2xl:text-sm tracking-widest text-teal-950 justify-center items-center flex"
          >
            <p>
              I’m deeply passionate about backend development, having started my
              journey with Java Spring Boot where I focused on building secure,
              scalable systems and efficient REST APIs. Although my career began
              on the frontend with Nuxt/Vue 3, that experience gave me a
              stronger appreciation for the full stack and how the backend
              connects with the user experience. Since August, I’ve been fully
              focused on backend work with Laravel, where I feel most at home
              architecting systems and optimizing performance. Beyond coding, I
              express creativity through photography, video editing, and short
              film making, which allow me to balance my technical work with
              artistic expression.
            </p>
          </div>
          <div class="flex-1 justify-center items-center flex">
            <NuxtImg
              class="h-56 rounded-lg hover:scale-105 transition-all duration-300"
              src="/img/arbell_3.webp"
            />
          </div>
        </div>
      </section>

      <section>
        <div
          class="flex items-center text-xs 2xl:text-sm justify-center gap-4 text-white flex-col xl:h-96 bg-orange-900 w-full p-15 px-4 xl:px-52"
        >
          <h2 class="font-semibold text-xl">Overview</h2>

          <hr class="w-[25%] border-2 rounded-full" />

          <p class="text-center">
            Adaptability and innovation drive my journey as a developer. I
            specialize in backend architecture while exploring frontend
            technologies to build seamless, high-performing applications. Every
            challenge is an opportunity to refine my skills, optimize systems,
            and create impactful solutions.
          </p>
        </div>
      </section>

      <section class="bg-zinc-900 w-full">
        <div
          class="flex items-center gap-7 xl:flex-row flex-col justify-center w-full p-15 pb-0 px-4 xl:px-52"
        >
          <div
            class="flex flex-col flex-1 gap-4 tracking-widest text-xs 2xl:text-sm"
          >
            <h2 class="text-orange-700 font-semibold text-xl">
              A Developer's Journey
            </h2>
            <hr
              class="border-2 border-b-orange-700 border-t-white rounded-full"
            />
            <p>
              I still remember the first time I wrote a program that actually
              worked. It was a simple C++ script, but the excitement of solving
              a problem through code was unforgettable. That moment sparked my
              journey of continuous learning—from writing basic programs to
              developing scalable applications with Spring Boot. Now, every
              challenge I encounter is another opportunity to grow. Coding isn't
              just a skill to me — it's a mindset.
            </p>
            <small class="text-orange-700"> Jon Arbell De Ocampo </small>
          </div>

          <div class="flex-1 items-center justify-center flex">
            <NuxtImg
              class="h-72 rounded-xl hover:scale-110 shadow-xl transition-all duration-300"
              src="/img/arbell_1.png"
            />
          </div>
        </div>

        <div
          class="flex items-center gap-7 xl:flex-row flex-col-reverse justify-center w-full p-15 px-4 xl:px-52"
        >
          <div class="flex-1 items-center justify-center flex">
            <NuxtImg
              class="h-72 rounded-xl hover:scale-110 shadow-xl transition-all duration-300"
              src="/img/arbell_2.jpg"
            />
          </div>
          <div
            class="flex flex-col flex-1 gap-4 tracking-widest text-xs 2xl:text-sm"
          >
            <h2 class="text-orange-700 font-semibold text-xl">
              The Problem-Solver's Mindset
            </h2>
            <hr
              class="border-2 border-b-orange-700 border-t-white rounded-full"
            />
            <p>
              Every bug is a puzzle, and every system issue is a challenge
              waiting to be solved. As a backend developer, I've learned that
              the best solutions aren't always the easiest ones—they're the ones
              that scale, perform, and stand the test of time. My approach to
              coding is simple: write clean, maintainable, and efficient
              solutions that make an impact.
            </p>
            <small class="text-orange-700"> Jon Arbell De Ocampo </small>
          </div>
        </div>
      </section>

      <section>
        <div
          class="flex items-center gap-7 xl:flex-row flex-col-reverse justify-center w-full p-15 px-4 xl:px-52"
        >
          <ul
            class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 items-stretch"
          >
            <li v-for="(item, index) in boxes" :key="index" class="flex">
              <Box
                :title="item.title"
                :descriptions="item.descriptions"
                class="flex-1"
              />
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
import Box from "./components/Box.vue";
const boxes = [
  {
    title: "MISSION",
    descriptions: [
      "Short-term: Deepen full-stack skills and build impactful applications with Spring Boot / Laravel & Nuxt / Angular.",
      "Long-term: Innovate real-world solutions — freelancing, a tech-driven company, or my own venture.",
    ],
  },
  {
    title: "CORE VALUES",
    descriptions: [
      "Problems are growth opportunities — consistency and curiosity fuel progress.",
      "Teamwork matters — I thrive in spaces that share, challenge, and collaborate.",
    ],
  },
  {
    title: "PHILOSOPHY",
    descriptions: [
      "Programming is a lifetime game of leveling up. Each challenge is a new level, every bug is a boss fight, and writing clean code is my cheat code for team success and project longevity.",
    ],
  },
];
</script>

<style></style>
