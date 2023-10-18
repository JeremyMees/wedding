// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ['~/components']
  },
  css: [
    '@/assets/css/tailwind.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'L&J',
      short_name: 'L&J',
      description: 'Wedding lies and jeremy',
      theme_color: '#EEFFF0',
      background_color: '#EEFFF0',
      start_url: '/',
      lang: 'nl',
      icons: [
        {
          src: '/pwa-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/pwa-512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/pwa-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    client: { installPrompt: true }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.ts',
    injectPosition: 0,
    viewer: false,
    exposeConfig: true
  },
  nitro: { compressPublicAssets: true },
  devtools: { enabled: true }
})
