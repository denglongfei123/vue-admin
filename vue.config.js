// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const path = require('path')
const name = 'vue admin'

function resolve(dir){
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath:'/',
  outputDir:'dist',
  assetsDir:'static',
  configureWebpack:{
    name: name,
    resolve:{
      alias:{
        '@':resolve('src')
      }
    }
  }
}
