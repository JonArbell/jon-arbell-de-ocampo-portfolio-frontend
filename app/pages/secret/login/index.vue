<template>

  <Head description="This page is for my personal monitoring system login page." title="Secret Login Page" />

  <div
    class="p-4 flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900 via-teal-950 to-orange-900 relative overflow-hidden">
    <!-- Floating glow effects -->
    <div class="absolute w-64 h-64 bg-orange-600/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
    <div class="absolute w-72 h-72 bg-teal-600/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

    <!-- Login card -->
    <form
      class="relative z-10 w-96 p-8 rounded-2xl shadow-2xl border border-zinc-700/50 bg-zinc-900/70 backdrop-blur-xl text-white">
      <h1
        class="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
        Please log in Jon
      </h1>

      <div class="space-y-4">
        <div>
          <label class="text-sm text-zinc-300">Username</label>
          <input v-model="form.username" type="text" placeholder="Enter your username"
            class="w-full mt-1 px-3 py-2 rounded-lg bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </div>

        <div>
          <label class="text-sm text-zinc-300">Password</label>
          <input v-model="form.password" type="password" placeholder="Enter your password"
            class="w-full mt-1 px-3 py-2 rounded-lg bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>

        <button @click.prevent="handleLogin"
          class="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-teal-600 hover:from-orange-600 hover:to-teal-700 transition-all duration-300 font-semibold shadow-lg">
          Sign In
        </button>
      </div>

      <p class="text-center text-zinc-400 text-sm mt-5">
        © {{ new Date().getFullYear() }} K.E
      </p>
    </form>
  </div>

</template>

<script lang="ts" setup>
import Head from "~/components/Head.vue";
import { authService } from "~/services/auth.service";

const toast = useToast()

const tokenStore = useMyTokenStore();

const form = reactive({
  username: "jon_arbell",
  password: "arbellpogi23",
});

const handleLogin = async () => {
  try {

    const response = await authService().login(form);
    console.log("Login successful:", response);

    tokenStore.setToken(response?.data.token);
    tokenStore.setRefreshToken(response?.data.refreshToken);

    toast.success({
      title: 'Login Successful!',
      message: 'Welcome back! Redirecting to your dashboard…'
    });

    await navigateTo('/secret/dashboard');

  } catch (e: any) {

    const msg = e?.message;

    toast.error({
      title: 'Login Failed!',
      message: msg
    });

  } finally {
    console.log("Login attempt finished.");
  }
}

onMounted(() => {
  if (tokenStore.isAuthenticated) {
    navigateTo('/secret/dashboard');
  }
});

</script>

<style></style>