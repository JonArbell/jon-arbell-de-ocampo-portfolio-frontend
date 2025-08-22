<template>
  <Head
    :title="'Jon Arbell De Ocampo'"
    :description="`Explore Jon's projects, tech stack, and resume. Specializing in Nuxt, Angular, Spring Boot and Laravel.`"
  />
  <div>
    <section
      class="text-white w-full animate__faster pt-48 px-4 md:px-32 sm:px-20 xl:px-52 overflow-hidden"
    >
      <div
        class="max-w-7xl mx-auto flex flex-col items-start justify-center space-y-1 lg:space-y-3"
      >
        <!-- Heading -->
        <div class="lg:space-y-3 space-y-1 text-left w-full overflow-hidden">
          <div
            class="animate__animated animate__fadeInDown transition-all ease-in-out"
          >
            <h3
              class="text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wider"
            >
              Hello,
            </h3>
          </div>
          <div class="overflow-hidden animate__animated animate__fadeInLeft">
            <h2
              class="text-3xl typing-effect duration-50 transition-all ease-in-out md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-widest"
            >
              I'm
              <span class="text-orange-800 brightness-150">Jon Arbell</span>
            </h2>
          </div>
        </div>

        <!-- Subheading -->
        <div class="overflow-hidden">
          <h4
            class="text-teal-950 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wide brightness-150 animate__animated animate__fadeInRight animate__delay-1s transition-all ease-in-out"
          >
            Junior Backend Developer
          </h4>
        </div>

        <!-- Description -->
        <div class="lg:w-[65%] overflow-hidden">
          <small
            class="text-[10px] brightness-75 md:text-xs xl:text-sm lg:text-lg text-white/75 max-w-4xl tracking-widef leading-relaxed animate__animated animate__fadeInUp animate__delay-2s transition-all ease-in-out"
          >
            and a fourth-year Computer Science student at the same time. I
            started my professional journey as a Junior Frontend Developer in
            April 2025, where I worked on real-world projects using Vue and
            Nuxt. As of August 1, I’ve transitioned into a Backend Developer
            role within the same company, allowing me to dive deeper into
            building scalable systems and robust APIs.
          </small>

          <!-- Resume Button -->
          <div
            class="w-full text-center animate__animated animate__fadeInUp animate__delay-3s transition-all ease-in-out"
          >
            <a
              href="/public/resume.pdf"
              download="De Ocampo, Jon Arbell D_Resume.pdf"
              class="inline-block text-sm sm:text-base text-orange-700 font-semibold underline hover:text-orange-900"
            >
              Download CV
            </a>
          </div>
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
