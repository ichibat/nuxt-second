
export default {
  server: {
    port: 8000, // デフォルト: 3000
    host: '0.0.0.0', // デフォルト: localhost,
    timing: false
  },
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
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],


// 認証

auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
        logout: { url: '/api/auth/logout', method: 'post' },
        user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
      },
      // tokenRequired: true,
      // tokenType: 'bearer'
    }
  }
},
  


  
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://localhost:5000/',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

