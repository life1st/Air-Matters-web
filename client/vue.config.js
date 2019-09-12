
module.exports = {
  configureWebpack: {

  },
  devServer: {
    disableHostCheck: true,
    proxy: 'https://api.air-matters.com'
  }
}