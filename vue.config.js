module.exports = {
  outputDir: 'lib/client/dist',
  lintOnSave: false,
  pages: {
    index: {
      entry: 'lib/client/src/main.js',
      template: 'lib/client/public/index.html',
      filename: 'index.html',
      title: 'markajs'
    }
  },
  configureWebpack: {
    performance: {
      maxAssetSize: 500000
    }
  },
  devServer: {
    proxy: {
      '.*': {
        target: `http://localhost:${process.env.PORT}`,
        ws: true
      }
    }
  }
}
