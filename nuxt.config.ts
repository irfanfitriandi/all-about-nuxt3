// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    // server-side
    apiUrl: '',
    // client-side
    public: {
      testEnv: '',
      apiUrl: '',
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      title: 'Nuxt App Setup',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt App Setup - Config Boilerplate',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Nuxt App Setup',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: 'Nuxt App Setup - Config Boilerplate',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: '/img/web-img.jpg',
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Nuxt Page',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'website',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // {
        //   rel: 'apple-touch-icon',
        //   sizes: '180x180',
        //   href: '/apple-touch-icon.png',
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/png',
        //   sizes: '32x32',
        //   href: '/favicon-32x32.png',
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/png',
        //   sizes: '16x16',
        //   href: '/favicon-16x16.png',
        // },
        // { rel: 'manifest', href: '/site.webmanifest' },
        // { rel: 'msapplication-TileColor', href: '#da532c' },
        // { rel: 'theme-color', href: '#ffffff' },
      ],
    },
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config',
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
