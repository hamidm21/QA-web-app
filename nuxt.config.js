
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'blue' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css',
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  axios: {
    baseURL: 'https://halyab.com',
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/': 'https://halyab.com',
    '/accounts/': 'https://halyab.com',
  },
  server: {
    port: 2121, // default: 3000
    host: '0.0.0.0'
  },
  toast: {
    action : {
      text : 'باشه',
      onClick : (e, toastObject) => {
          toastObject.goAway(0);
      }
    },
    duration: 5000,
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  auth: {
    redirect: {
      login: '/auth/login',
      logout: false,
      callback: '/auth/login',
      home: '/dashboard'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/accounts/', method: 'post', propertyName: 'access'},
          logout: false,
          user: { url: '/accounts/users/', method: 'get', propertyName: 'user_info'}
        },
        // set true for cookie based auth
        // tokenRequired: true,
        // // header name
        // tokenName: 'Authorization',
        tokenType: 'Bearer',
        // autoFetchUser: false,
      }
    }
  }
}
