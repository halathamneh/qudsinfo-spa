export default {
  dev: process.env.NODE_ENV !== 'production',
  mode: 'spa',
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
    '~/plugins/VueMq'
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
    '@nuxtjs/axios',
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
