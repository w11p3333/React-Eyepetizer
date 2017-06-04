const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const prodConfig = require('./webpack.prod.conf')

webpack(prodConfig, (err, stats) => {
  // show build info to console
  console.log(stats.toString({ chunks: false, color: true }) )

  // save build info to file
  fs.writeFile(
    path.join(config.build.distPath, '__build_info__'),
    stats.toString({ color: false })
  )
})
