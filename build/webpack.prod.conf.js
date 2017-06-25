const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const config = require('./config')
const baseConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')

module.exports = merge(baseConfig, {

  devtool: config.build.cssSourceMap ? 'eval-source-map' : false,

  output: {
    path: config.build.distPath,
    publicPath: config.build.assetsPublicPath,
    chunkFilename: '[id].[chunkhash].js',
    filename: '[name].[chunkhash].js'
  },

  // module: {
  //   rules: [
  //       {
  //         test: /\.css$/,
  //         loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
  //       },
  //       {
  //         test: /\.scss$/,
  //         loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
  //       }
  //   ]
  // },

  plugins: [
    new CleanWebpackPlugin('dist', {
      root: config.build.distPath,
      verbose: false
    }),
    new CopyWebpackPlugin([ // 复制高度静态资源
      {
        context: config.build.assetsSubDirectory,
        from: '**/*',
        ignore: ['*.md']
      }
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 30000
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new SWPrecachePlugin({
      cacheId: 'react-eyepetizer-version-1.28',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
      runtimeCaching: [
        // not cache https
        {
          urlPattern: /^https:\/\/baobab\.kaiyanapp\.com\/api\/v1\/feed/,
          handler: 'networkFirst'
        },
        {
          urlPattern: /^https:\/\/baobab\.kaiyanapp\.com\/api\/v1\/video/,
          handler: 'networkFirst'
        }
        // {
        //   urlPattern: /\.(mp4|png|jpe?g|gif|svg)$/,
        //   handler: 'cacheFirst'
        // }
      ]
    })
  ]

})
