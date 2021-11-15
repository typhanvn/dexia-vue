export default {
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dexia-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    '~/assets/css/custom.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/i18n.js',
    '~plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components/common/' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://axios.nuxtjs.org/setup
    '@nuxtjs/axios',
    'nuxt-lazy-load'
  ],

  axios: {
    // proxy: true,
    retry: true,
    baseURL: 'https://dexia-intranet-default-rtdb.firebaseio.com/api',
    // debug: process.env.DEBUG || false,
    // proxyHeaders: false,
    // credentials: false,
    // headers: {
    //   "Content-Type": "application/json",
    //   'Access-Control-Allow-Origin': '*',
    //   "Access-Control-Allow-Methods": "DELETE, POST, GET",
    //   "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    //   },
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'accounts/token',
            method: 'post',
            propertyName: 'access',
          },
          user: {
            url: 'accounts/',
            method: 'get',
            propertyName: 'users'
          },
          tokenRequired: true,
          logout: false
        }
      },
      watchLoggedIn: true,
      redirect: {
        login: '/login',
        logout: '/',
        callback: '/login',
        home: '/'
      }
    }
  },

  router: {
    middleware: ['i18n']
  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
