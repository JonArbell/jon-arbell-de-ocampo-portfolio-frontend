<template>
  <div>
    <Custom :image="'/img/photography/photograph_3.webp'">
      <Head
        :title="'My Hobbies'"
        :description="`Explore Jon's projects, tech stack, and resume. Specializing in Nuxt, Angular, Spring Boot and Laravel.`"
      />

      <section>
        <div>
          <Hero
            :subtitle="'Capturing stories through film, photos, and creativity'"
            :title="`Life Beyond the Code`"
            :style="'bg-gray-200/90'"
          />
        </div>
      </section>

      <section>
        <div
          class="flex items-center justify-center gap-10 xl:gap-4 flex-col xl:flex-row h-80 xl:h-96 bg-gray-50 w-full px-4 py-10 xl:px-52"
        >
          <p class="text-xs 2xl:text-sm tracking-widest text-teal-950">
            Welcome to my hobbies section! This is where I showcase my
            creativity and the things I enjoy doing in my free time. Whether
            it's exploring new ideas, experimenting with different techniques,
            or simply creating for fun, each piece reflects my passion for
            self-expression. Feel free to explore and see what inspires me!
          </p>
        </div>
      </section>

      <section>
        <div
          class="flex items-center tracking-widest text-xs 2xl:text-sm min-h-96 gap-10 flex-col justify-center w-full p-15 px-4 xl:px-52 bg-teal-950"
        >
          <h2 class="text-orange-700 text-xl font-semibold">My Hobbies</h2>

          <div class="space-y-4">
            <h3 class="text-orange-700 text-lg">Photography</h3>
            <p>
              I focus on mobile photography, using my phone to capture images in
              my daily life. This allows me to explore different subjects and
              environments, documenting moments as I encounter them. Mobile
              photography offers convenience and flexibility, helping me
              experiment with different techniques and perspectives.
            </p>
            <div>
              <ul
                class="flex items-center justify-center flex-col xl:flex-row gap-5 w-full"
              >
                <li
                  class="flex-1"
                  v-for="(item, index) in photography"
                  :key="index"
                >
                  <NuxtImg
                    :class="[
                      'rounded-xl shadow-xl hover:scale-105 transition-all duration-300',
                    ]"
                    :src="`/img/photography/${item}`"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-orange-700 text-lg text-end">Photo Manipulation</h3>
            <p>
              I enjoy transforming ordinary images into something unique through
              editing. By adjusting colors, blending elements, and adding
              creative effects, I experiment with different techniques to bring
              new ideas to life. It's a way to push the limits of imagination
              and create visuals that go beyond what the camera captures.
            </p>
            <div>
              <ul class="flex flex-col xl:flex-row gap-5 w-full">
                <li
                  v-for="(item, index) in photomanipulation"
                  :key="index"
                  class="flex-1 flex"
                >
                  <NuxtImg
                    class="rounded-xl shadow-xl hover:scale-105 transition-all duration-300 w-full h-40 object-cover"
                    :src="`/img/photomani/${item}`"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-orange-700 text-lg text-center">Short Films</h3>
            <p>
              Filmmaking allows me to tell stories through motion and sound.
              Whether it's capturing real moments or creating scripted scenes, I
              explore different ways to convey emotions and ideas. From planning
              shots to editing the final cut, every step is an opportunity to
              bring creativity to life.
            </p>
            <div>
              <ul
                class="flex items-center justify-center flex-col xl:flex-row gap-5 w-full"
              >
                <li
                  v-for="(item, index) in shortFilms"
                  :key="index"
                  class="flex-1"
                >
                  <NuxtImg
                    class="rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                    :src="`/img/shortfilm/${item}`"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Custom>
  </div>
</template>

<script lang="ts" setup>
import Head from "~/components/Head.vue";
import Custom from "~/layouts/Custom.vue";

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
