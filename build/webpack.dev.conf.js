const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./config')
const baseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(baseConfig, {

  devtool: config.dev.cssSourceMap ? 'eval-source-map' : false,

  entry: {
    app: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client?reload=true',
      'webpack/hot/only-dev-server',
      config.dev.entryPath
    ]
  },

  output: {
    path: config.dev.distPath,
    publicPath: config.dev.assetsPublicPath,
    filename: '[name].js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: config.dev.indexPath,
      chunksSortMode: 'none'
    }),
    new BrowserSyncPlugin({
      host: config.dev.host,
      port: config.dev.port,
      proxy: `http:/${config.dev.host}:${config.dev.proxyPort}/`,
      logConnections: false,
      notify: false
    }, {
      reload: false
    })
  ]

})
