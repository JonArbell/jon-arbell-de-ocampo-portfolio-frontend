<template>

  <Head :title="'Jon Arbell De Ocampo'"
    :description="`Explore Jon's projects, tech stack, and resume. Specializing in Nuxt, Angular, Spring Boot and Laravel.`" />
  <div>
    <section class="text-white w-full pt-32 xl:pt-36 px-4 md:px-32 sm:px-20 xl:px-52 overflow-hidden">
      <div class="max-w-7xl mx-auto flex flex-col items-start justify-center space-y-4 lg:space-y-5">
        <!-- Hello -->
        <Motion :initial="{ opacity: 0, y: -30 }" :whileInView="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
          :transition="{ duration: 0.7, ease: 'easeInOut' }">
          <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wider">
            Hello,
          </h3>
        </Motion>

        <!-- I'm Jon Arbell -->
        <Motion :initial="{ opacity: 0, x: -50 }" :whileInView="{ opacity: 1, x: 0 }" :viewport="{ once: true }"
          :transition="{ duration: 0.7, ease: 'easeInOut', delay: 0.5 }">
          <h2
            class="text-4xl typing-effect duration-50 transition-all ease-in-out md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-widest">
            I'm
            <span class="text-orange-800 brightness-150">Jon Arbell</span>
          </h2>
        </Motion>

        <!-- Junior Backend Developer -->
        <Motion :initial="{ opacity: 0, x: 50 }" :whileInView="{ opacity: 1, x: 0 }" :viewport="{ once: true }"
          :transition="{ duration: 0.7, ease: 'easeInOut', delay: 1.0 }">
          <h4 class="text-teal-950 text-base md:text-lg xl:text-xl font-semibold tracking-wide brightness-150">
            Aspiring Software Engineer
          </h4>
        </Motion>

        <div class="lg:w-[65%]">
          <!-- Description -->
          <Motion :initial="{ opacity: 0, y: 30 }" :whileInView="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
            :transition="{ duration: 0.7, ease: 'easeInOut', delay: 1.5 }">
            <small
              class="text-[10px] brightness-75 md:text-xs xl:text-sm lg:text-lg text-white/75 max-w-4xl tracking-wide leading-relaxed">
              with hands-on experience in both frontend and backend development. I began my professional journey as a
              Junior Frontend Developer, working on real-world projects with Vue and Nuxt, and have since transitioned
              into a Junior Backend Developer role, gaining experience building scalable systems and robust APIs while
              continuing to expand my skills.
            </small>
          </Motion>

          <!-- Resume Button: Boom Effect -->
          <Motion :initial="{ opacity: 0, scale: 0.95 }" :whileInView="{ opacity: 1, scale: 1 }"
            :viewport="{ once: true, amount: 0.5 }" :transition="{ duration: 0.7, ease: 'easeInOut', delay: 3.0 }"
            class="w-full text-center mt-6">
            <NuxtLink external to="/resume.pdf" download="De Ocampo, Jon Arbell D_Resume.pdf"
              class="inline-block text-sm sm:text-base text-orange-700 font-semibold underline hover:text-orange-900">
              Download CV
            </NuxtLink>
          </Motion>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Head from "~/components/Head.vue";
const headerStore = useMyHeaderStore();
onMounted(() => {
  headerStore.background = "bg-transparent";
});
</script>

<style></style>
