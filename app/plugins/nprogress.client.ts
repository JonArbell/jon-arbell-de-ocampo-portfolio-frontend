import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// Optional: customize NProgress style
NProgress.configure({ showSpinner: true, trickleSpeed: 200, easing: 'ease', speed: 500, minimum: 0.75 })

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    NProgress.start()
  })

  nuxtApp.hook('page:finish', () => {
    NProgress.done()
  })
})
