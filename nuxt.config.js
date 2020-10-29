
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "حل یاب - سامانه حل سوال",
    meta: [
      { charset: 'utf-8' },
      {  name:'enamad' ,  content:'344299'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'اولین سامانه حل سوال به صورت مناقصه ای که به صورت آنلاین و ۲۴ ساعته فعال است. با حل یاب سوالی بی پاسخ نمیمونه.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'http://halyab.com/media/favicon.ico' }
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
    '~/plugins/directives.js',
    '~/plugins/recorder.client.js'
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
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
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
        scheme: 'refresh',
        // tokenType: 'Bearer',
        token: {
          property: 'data.access',
          maxAge: 10000
        },
        refreshToken: {
          property: 'data.refresh',
          maxAge: false
        },
        endpoints: {
          user: { url: '/accounts/users/', method: 'get', propertyName: 'user_info'},
          refresh: { url: '/accounts/refresh', method: 'post', propertyName: 'refresh' },
          login: { url: '/accounts/', method: 'post', propertyName: 'access'},
          logout: false,
        },
      }
    }
  }
}
