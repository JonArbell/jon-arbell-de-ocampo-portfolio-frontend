<template>
  <Landing>
    <Custom :image="'/img/photography/photograph_3.webp'">

      <Head :title="'My Hobbies'"
        :description="`Explore Jon's creative side beyond coding — from mobile photography and photo manipulation to short films that bring stories to life.`" />

      <!-- Hero Section -->
      <section>
        <div>
          <Hero :subtitle="'Capturing stories through film, photos, and creativity'" :title="`Life Beyond the Code`"
            :style="'bg-gray-200/90'" />
        </div>
      </section>

      <!-- Intro -->
      <section>
        <div
          class="flex items-center text-xs 2xl:text-sm tracking-widest text-teal-950 text-center xl:text-left justify-center gap-10 xl:gap-4 flex-col xl:flex-row h-80 xl:h-96 bg-gray-50 w-full px-4 py-10 xl:px-52">
          <p>
            Welcome to my hobbies section! This is where I showcase my
            creativity and the things I enjoy doing in my free time. Whether
            it's exploring new ideas, experimenting with different techniques,
            or simply creating for fun, each piece reflects my passion for
            self-expression. Feel free to explore and see what inspires me!
          </p>
        </div>
      </section>

      <!-- Main Hobbies Section -->
      <section>
        <div
          class="flex items-center tracking-widest text-xs 2xl:text-sm min-h-96 gap-14 flex-col justify-center w-full p-15 px-4 xl:px-52 bg-teal-950 text-white py-20">
          <!-- Photography -->
          <div class="space-y-4 w-full">
            <div class="w-full flex flex-col gap-4 items-start justify-center">
              <h3 class="text-orange-700 text-lg">Photography</h3>
              <p class="xl:w-[75%] w-full">
                I focus on mobile photography, using my phone to capture images
                in my daily life. This allows me to explore different subjects
                and environments, documenting moments as I encounter them.
                Mobile photography offers convenience and flexibility, helping
                me experiment with different techniques and perspectives.
              </p>
            </div>

            <ul class="flex items-center justify-center flex-col xl:flex-row gap-5 w-full">
              <li class="flex-1" v-for="(item, index) in photography" :key="index">
                <Motion :initial="{ opacity: 0, scale: 0.9 }" :while-in-view="{ opacity: 1, scale: 1 }" :transition="{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: index * 0.15,
                }" viewport="{ once: true }">
                  <NuxtImg :class="[
                    'rounded-xl shadow-xl hover:scale-105 transition-all duration-300',
                  ]" :src="`/img/photography/${item}`" />
                </Motion>
              </li>
            </ul>
          </div>

          <!-- Photo Manipulation -->
          <div class="space-y-4 w-full">
            <div class="w-full flex flex-col gap-4 items-center xl:items-end justify-center">
              <h3 class="text-orange-700 text-lg text-end">
                Photo Manipulation
              </h3>
              <p class="xl:w-[75%] w-full text-start xl:text-end">
                I enjoy transforming ordinary images into something unique
                through editing. By adjusting colors, blending elements, and
                adding creative effects, I experiment with different techniques
                to bring new ideas to life. It's a way to push the limits of
                imagination and create visuals that go beyond what the camera
                captures.
              </p>
            </div>

            <ul class="flex flex-col xl:flex-row gap-5 w-full">
              <li v-for="(item, index) in photomanipulation" :key="index" class="flex-1 flex">
                <Motion :initial="{ opacity: 0, y: 40 }" :while-in-view="{ opacity: 1, y: 0 }" :transition="{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: index * 0.15,
                }" viewport="{ once: true }" class="flex-1">
                  <NuxtImg
                    class="rounded-xl shadow-xl hover:scale-105 transition-all duration-300 w-full h-40 object-cover"
                    :src="`/img/photomani/${item}`" />
                </Motion>
              </li>
            </ul>
          </div>

          <!-- Short Films -->
          <div class="space-y-4 w-full">
            <div class="w-full flex flex-col gap-4 items-center justify-center">
              <h3 class="text-orange-700 text-lg text-center">Short Films</h3>
              <p class="xl:w-[75%] w-full text-start xl:text-center">
                Filmmaking allows me to tell stories through motion and sound.
                Whether it's capturing real moments or creating scripted scenes,
                I explore different ways to convey emotions and ideas. From
                planning shots to editing the final cut, every step is an
                opportunity to bring creativity to life.
              </p>
            </div>

            <ul class="flex items-center justify-center flex-col xl:flex-row gap-5 w-full">
              <li v-for="(item, index) in shortFilms" :key="index" class="flex-1">
                <Motion :initial="{ opacity: 0, scale: 0.85 }" :while-in-view="{ opacity: 1, scale: 1 }" :transition="{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                }" viewport="{ once: true }">
                  <NuxtImg class="rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                    :src="`/img/shortfilm/${item}`" />
                </Motion>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Custom>
  </Landing>
</template>

<script lang="ts" setup>
import Head from "~/components/Head.vue";
import Custom from "~/layouts/Custom.vue";
import Landing from "~/layouts/Landing.vue";
const photography = [
  "photograph_1.webp",
  "photograph_2.webp",
  "photograph_3.webp",
];

const photomanipulation = [
  "photoMani_1.webp",
  "photoMani_2.webp",
  "photoMani_3.webp",
  "photoMani_4.webp",
  "photoMani_5.webp",
];

const shortFilms = ["short_film_1.png", "short_film_2.png"];
</script>

<style></style>
