const express = require('express')
const webpack = require('webpack')
const config = require('./config')
const base = require('./webpack.base.conf')
  // favicon = require('express-favicon'),
const devConfig = require('./webpack.dev.conf')
const app = express()

var compiler = webpack(devConfig)
// for highly stable resources
app.use('/static', express.static(config.dev.staticPath))

// app.use(favicon(path.join(__dirname, '../favicon.ico')))

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())
// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.dev.assetsPublicPath
}))

app.use(require('webpack-hot-middleware')(compiler));

app.listen(9000, '127.0.0.1', function(err) {
  err && console.log(err);
})
