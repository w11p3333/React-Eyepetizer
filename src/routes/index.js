// @flow
import { connect } from 'react-redux'
import app from '@/views/app'
import detail from './detail'
import redirect from '@/views/redirect'
import notFound from '@/views/notFound'

import homeReducers from '@/redux/reducers/home'
import homeActions from '@/redux/actions/home'
import homeView from '@/components/home'
import { injectReducer } from '@/redux/reducers'

export default {
  path: '/',

  component: app,

  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], require => {

        // 注入 Reducer
        Object.keys(homeReducers).map(key => {
          injectReducer(key, homeReducers[key])
        })
        // 生成container
        const homeContainer = connect(
          ({ homeFeed, platform }) => ({ homeFeed, platform }),
          homeActions
        )(homeView)

        cb(null, homeContainer)
      }, 'home')
    }
  },

  childRoutes: [
    // 路由按模块组织分离，避免单文件代码量过大
    detail,

    // 强制“刷新”页面的 hack
    { path: 'redirect', component: redirect },

    // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
    { path: '*', component: notFound }
  ]
}
