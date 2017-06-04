// @flow
import { connect } from 'react-redux'
import app from '@/views/app'
import detail from './detail'
import notFound from '@/views/notFound'

import reducers from '@/redux/reducers/home'
import actions from '@/redux/actions/home'
import component from '@/components/home'
import { injectReducer } from '@/redux/reducers'

export default {
  path: '/',

  component: app,

  indexRoute: {
    getComponent (nextState: Object, cb: Function) {
        // 注入 Reducer
      Object.keys(reducers).map(key => {
        injectReducer(key, reducers[key])
      })
      // 生成container
      const homeContainer = connect(
        ({ homeFeed, platform }) => ({ homeFeed, platform }),
        actions
      )(component)

      cb(null, homeContainer)
    }
  },

  childRoutes: [
    // 路由按模块组织分离，避免单文件代码量过大
    detail,

    // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
    { path: '*', component: notFound }
  ]
}
