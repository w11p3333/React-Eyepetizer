import React from 'react'
import 'ASSET/scss/normalize.scss'
import 'ASSET/scss/app.scss'
let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('COMPONENT/DevTools').default
}

export default ({ children, location }) => (
  <div>
    <div className="container">
      { children }
    </div>
    { DevTools && <DevTools /> }
  </div>
)
