const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  devServer: {
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias
    .set('@',resolve('src/assets/resetCss'))
  }
}