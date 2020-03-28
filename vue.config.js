const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  outputDir: 'lib/client/dist',
  lintOnSave: false,
  pages: {
    index: {
      entry: 'lib/client/src/main.js',
      template: 'lib/client/public/index.html',
      filename: 'index.html',
      title: 'marka'
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{
        from: path.join(__dirname, 'lib/client/assets'),
        to: path.join(__dirname, 'lib/client/dist'),
        toType: 'dir',
        ignore: ['index.html']
      }])
    ]
  }
}
