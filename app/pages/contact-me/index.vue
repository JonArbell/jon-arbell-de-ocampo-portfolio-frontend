<template>
  <div>
    <Custom :image="'/img/photography/photograph_3.webp'">
      <Head
        :title="'Contact Me'"
        :description="`Explore Jon's projects, tech stack, and resume. Specializing in Nuxt, Angular, Spring Boot and Laravel.`"
      />

      <Toast ref="toastRef" />

      <!-- Hero Section -->
      <section>
        <Hero
          :subtitle="'Collaboration starts with a conversation'"
          :title="`Let’s Build Something Together`"
          :style="'bg-gray-200/90'"
        />
      </section>

      <!-- Intro Text -->
      <section>
        <div
          class="flex items-center justify-center h-80 xl:h-96 bg-gray-50 w-full px-4 py-10 xl:px-52"
        >
          <Motion
            class="h-full flex items-center justify-center gap-10 xl:gap-4 flex-col xl:flex-row"
            :initial="{ opacity: 0, x: -50 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, ease: 'easeInOut' }"
            :viewport="{ once: true, amount: 0.4 }"
          >
            <p class="text-xs 2xl:text-sm tracking-widest text-teal-950">
              I'd love to hear from you. Whether you have a project in mind, a
              question, or just want to say hello, feel free to reach out. I'm
              always open to exciting opportunities and collaborations.
            </p>
          </Motion>
        </div>
      </section>

      <!-- Contact Form -->
      <section>
        <div
          class="flex items-center justify-center px-4 py-10 xl:px-48 w-full"
        >
          <Motion
            :initial="{ opacity: 0, y: 30, scale: 0.95 }"
            :while-in-view="{ opacity: 1, y: 0, scale: 1 }"
            :transition="{ duration: 0.8, ease: 'easeInOut' }"
            :viewport="{ once: true }"
          >
            <form
              @submit.prevent="handleSubmit"
              class="rounded-xl bg-zinc-900 tracking-widest space-y-7 p-8 w-full"
            >
              <!-- Heading -->
              <h2 class="text-orange-700 font-semibold text-xl">
                Start a Conversation
              </h2>

              <div class="flex flex-col xl:flex-row gap-7 w-full">
                <!-- Left Side: Form -->
                <div
                  class="flex flex-col gap-4 flex-1 w-full xl:h-60 text-xs 2xl:text-sm"
                >
                  <!-- Name + Email -->
                  <div class="flex flex-col md:flex-row gap-4 w-full">
                    <input
                      v-model="form.fullName"
                      class="flex-1 py-2 px-4 rounded-md outline-0 bg-gray-50 placeholder-gray-500 text-teal-950"
                      placeholder="Enter your full name*"
                      type="text"
                      required
                    />
                    <input
                      v-model="form.email"
                      class="flex-1 py-2 px-4 placeholder-gray-500 text-teal-950 rounded-md outline-0 bg-gray-50"
                      placeholder="Enter your email address*"
                      type="email"
                      required
                    />
                  </div>

                  <!-- Message -->
                  <textarea
                    v-model="form.message"
                    required
                    class="w-full py-2 h-48 xl:h-full px-4 rounded-md outline-0 placeholder-gray-500 text-teal-950 bg-gray-50 resize-none"
                    placeholder="Enter your message*"
                  ></textarea>
                </div>

                <!-- Right Side: Info -->
                <Motion
                  class="flex flex-col items-center justify-center gap-6 flex-1 text-xs 2xl:text-sm xl:h-60"
                  :initial="{ opacity: 0, x: 50 }"
                  :while-in-view="{ opacity: 1, x: 0 }"
                  :transition="{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }"
                  :viewport="{ once: true }"
                >
                  <div class="space-y-2">
                    <h3 class="text-orange-700 text-lg">What about pricing?</h3>
                    <p>
                      Pricing depends on the project scope and timeline. Let me
                      know your ideas and I’ll send a custom quote.
                    </p>
                  </div>

                  <div class="space-y-2">
                    <h3 class="text-orange-700 text-lg">
                      What about working status?
                    </h3>
                    <p>
                      I’m currently working full-time, but I’m still open to
                      freelance projects and collaborations. Let’s create
                      something awesome together!
                    </p>
                  </div>
                </Motion>
              </div>

              <div class="flex flex-col md:flex-row items-center gap-3">
                <button
                  class="bg-orange-700 text-xs 2xl:text-sm text-white px-5 py-2 rounded-md shadow-md hover:bg-orange-800 transition-all duration-300"
                >
                  Send Message
                </button>
                <small class="text-gray-300"
                  >I will respond within 1-2 working days.</small
                >
              </div>
            </form>
          </Motion>
        </div>
      </section>
    </Custom>
  </div>
</template>

<script lang="ts" setup>
import Head from "~/components/Head.vue";
import Custom from "~/layouts/Custom.vue";
import { contactMeService } from "./service/contact-me.service";
import Toast from "~/components/Toast.vue";

const toastRef = ref<InstanceType<typeof Toast>>();
const form = ref({
  email: "",
  fullName: "",
  message: "",
});

const handleSubmit = async () => {
  try {
    const response = await contactMeService().sendInquiry(form.value);

    if (response) {
      toastRef.value?.show("Message sent successfully!", "success");
      form.value = { email: "", fullName: "", message: "" };
    }
  } catch (e: any) {
    console.log(e);

    const message =
      e?.data?.message ||
      e?.message ||
      e?.statusMessage ||
      "Failed to send message.";

    toastRef.value?.show(message, "error");
  }
};
</script>

<style></style>
