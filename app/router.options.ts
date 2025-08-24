// app/router.options.ts
import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If user pressed back/forward, keep scroll position
      return savedPosition;
    } else {
      // Always scroll to top on route change
      return { top: 0, behavior: "smooth" };
    }
  },
};
