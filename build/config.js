const path = require('path')

const rootPath = path.resolve(__dirname, '..') // 项目根目录
const src = path.join(rootPath, 'src') // 开发源码目录

module.exports = {
  build: {
    entryPath: path.join(src, 'main.js'),
    indexPath: path.join(src, 'index.html'),
    distPath: path.join(rootPath, 'dist'),
    staticPath: path.join(rootPath, './static'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    cssSourceMap: false
  },
  dev: {
    entryPath: path.join(src, 'main.js'),
    indexPath: path.join(src, 'index.html'),
    distPath: path.join(rootPath, 'dist'),
    staticPath: path.join(rootPath, './static'),
    port: 9090,
    proxyPort: 9000,
    host: '127.0.0.1',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
