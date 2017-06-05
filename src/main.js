/* 入口启动文件 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import store, { hashHistory } from '@/redux/store'
import routes from '@/routes'

// 检测不必要的更新
if (__DEV__ && __WHY_DID_YOU_UPDATE__) {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

// 将组件挂载
const MOUNT_NODE = document.getElementById('app')

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory } children={ routes } />
  </Provider>,
  MOUNT_NODE
)
// 隐藏app-shell
document.getElementById('app-shell').style.display = 'none'

// 生产环境下注册service-worker
if (__PROD__ && 'serviceWorker' in navigator) {
  console.log('注册servicer-workder')
  navigator.serviceWorker.register('./service-worker.js')
}
