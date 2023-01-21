// Datei: mwa/frontend/vue/vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://api:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}
