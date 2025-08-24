<template>
  <div>
    <Custom :image="'/img/photography/photograph_2.webp'">
      <Head
        :title="'My Personal Projects'"
        :description="`Dive into Jon's personal projects — creative experiments, web apps, and problem-solving builds that showcase a passion for innovation and learning.`"
      />

      <!-- Hero Section -->
      <section>
        <Hero
          :subtitle="'Experiment. Build. Break. Improve.'"
          :title="`Turning Ideas Into Digital Reality`"
          :style="'bg-gray-200/90'"
        />
      </section>

      <!-- Intro Text Section -->
      <section>
        <div
          class="flex items-center justify-center gap-10 xl:gap-4 flex-col xl:flex-row h-80 xl:h-96 bg-gray-50 w-full px-4 py-10 xl:px-52"
        >
          <p class="text-xs 2xl:text-sm tracking-widest text-teal-950">
            Welcome to my projects section! Here, you'll find a collection of
            work that showcases my passion for building practical and innovative
            solutions. Each project represents a challenge tackled, a problem
            solved, or an idea brought to life. From web applications to
            software tools, I strive to create projects that are functional,
            efficient, and impactful. Feel free to explore and see what I've
            been working on!
          </p>
        </div>
      </section>

      <!-- Projects Placeholder Section -->
      <section>
        <div
          class="h-96 flex items-center gap-10 flex-col justify-center bg-teal-950 text-orange-700"
        >
          <h2 class="font-semibold text-xl">My Projects</h2>
          <small>UNDER CONSTRUCTION</small>
        </div>
      </section>
    </Custom>
  </div>
</template>

<script lang="ts" setup>
import Head from "~/components/Head.vue";
import Custom from "~/layouts/Custom.vue";
</script>

<style></style>
