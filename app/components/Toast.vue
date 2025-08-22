<!-- components/CustomToast.vue -->
<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg text-white"
      :class="toastTypeClass"
    >
      <i :class="iconClass" class="text-xl"></i>
      <span class="font-medium">{{ message }}</span>
      <button @click="close" class="ml-3 text-white/80 hover:text-white">
        ✕
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
const message = ref("");
const type = ref<"success" | "error" | "info">("info");
let timeout: any = null;

const show = (
  msg: string,
  t: "success" | "error" | "info" = "info",
  duration = 3000
) => {
  message.value = msg;
  type.value = t;
  visible.value = true;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    visible.value = false;
  }, duration);
};

const close = () => {
  visible.value = false;
};

const toastTypeClass = computed(() => {
  return {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  }[type.value];
});

const iconClass = computed(() => {
  return {
    success: "fa fa-check-circle",
    error: "fa fa-times-circle",
    info: "fa fa-info-circle",
  }[type.value];
});

defineExpose({ show });
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
