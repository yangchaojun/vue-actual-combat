const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/xxx' : '/'

module.exports = {
  lintOnSave: false, //ESLint关闭
  publicPath: BASE_URL, // 项目基本路径
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // 这是文件别名
  },
  productionSourceMap: false, // 打包时不生成.map文件
  devServer: {
    proxy: {
      '/api': {
        target: "localhost:3000", //http://127.0.0.1:3000
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        "secure": false
      },
    }
  }
}
