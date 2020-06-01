export default {
  dev: process.env.NODE_ENV !== 'production',
  mode: 'spa',
  env: {
    remoteHost:
      process.env.NODE_ENV !== 'production'
        ? 'http://qudsinfo.test'
        : 'https://qudsinfo.com',
    apiToken:
      process.env.NODE_ENV !== 'production'
        ? 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9xdWRzaW5mby50ZXN0IiwiaWF0IjoxNTkwOTMzODMwLCJuYmYiOjE1OTA5MzM4MzAsImV4cCI6MTkwNjI5MzgzMCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.O3Q-mC7MSTino-NfINNx-7yTCiDfsPcHNiYmV2MXfEM'
        : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcXVkc2luZm8uY29tIiwiaWF0IjoxNTg4NDYwODk1LCJuYmYiOjE1ODg0NjA4OTUsImV4cCI6MTkwMzgyMDg5NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.JVZlFz7pt5FaAIEfKinqrVgaKXeFDtvrbzPq6y__p8Y'
  },

  server: {
    port: 3000, // default: 3000
    host: '127.0.0.3' // default: localhost
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/app.scss', 'swiper/dist/css/swiper.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/VueTypedJs',
    { src: '~/plugins/carousel', ssr: false },
    '~/plugins/VueMq',
    '~/plugins/String.format',
    '~/plugins/PerfectScrollbar'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    'nuxt-i18n',
    'nuxt-svg',
    '@nuxtjs/style-resources',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          // import whole set
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  styleResources: {
    scss: [
      './node_modules/bootstrap/scss/_functions.scss',
      './node_modules/bootstrap/scss/_variables.scss',
      './node_modules/bootstrap/scss/mixins/_breakpoints.scss',
      '~assets/scss/_variables.scss'
    ]
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js'
      },
      {
        code: 'ar',
        file: 'ar-JO.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ar',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'qudsinfo_language_key'
    }
  },
  /*

   */
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + window.innerHeight,
          behavior: 'smooth'
        })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      babelrc: true
    }
  }
}
