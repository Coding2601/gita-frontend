const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/user': {
        target: 'https://gita-esbz.onrender.com',
        changeOrigin: true,
        ws: true,
      },
      '^/manager': {
        target: 'https://gita-esbz.onrender.com',
        changeOrigin: true,
        ws: true,
      },
      '/getChapterName': {
        target: 'https://gita-esbz.onrender.com',
        changeOrigin: true,
        ws: true,
      },
      '/getRandomVerse': {
        target: 'https://gita-esbz.onrender.com',
        changeOrigin: true,
        ws: true,
      },
      '/getVerse': {
        target: 'https://gita-esbz.onrender.com',
        changeOrigin: true,
        ws: true,
      }
    }
  },
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/]
    }
  }
})

// https://gita-esbz.onrender.com/

// http://localhost:8000