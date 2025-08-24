<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useHead, useRequestURL } from "nuxt/app";

const route = useRoute();

const path = computed(() => route.path);

const props = defineProps<{
  title: string;
  description: string;
  image?: string;
}>();

const siteName = "Jon Arbell De Ocampo";
const defaultImage = props.image || "/icon.png";

useHead({
  title: props.title,
  meta: [
    // ✅ Basic SEO
    { name: "description", content: props.description },

    // ✅ Open Graph (Facebook + general)
    { property: "og:title", content: props.title },
    { property: "og:description", content: props.description },
    { property: "og:type", content: "website" },
    // { property: "og:image", content: defaultImage },
    { property: "og:url", content: path },
    { property: "og:site_name", content: siteName },

    // ✅ Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: props.title },
    { name: "twitter:description", content: props.description },
    { name: "twitter:image", content: defaultImage },

    // Optional for Twitter + FB
    { name: "twitter:site", content: "@deocampo.jonarbell" },
  ],
});
</script>
