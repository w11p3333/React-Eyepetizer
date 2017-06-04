import { connect } from 'react-redux'
import { injectReducer } from '@/redux/reducers'

import app from '@/views/app'

export default {
  path: 'detail/:id',

  component: app,

  indexRoute: {
    getComponent (nextState, cb) {
      // 除主页外的其它组件懒加载
      require.ensure([], require => {
        const reducers = require('@/redux/reducers/detail').default
        // 注入 Reducer
        Object.keys(reducers).map(key => {
          injectReducer(key, reducers[key])
        })
        /* 组件连接 state */
        const VideoContainer = connect(
          ({ playVideoInfo, videoListInfo, replyListInfo }) => ({ playVideoInfo, videoListInfo, replyListInfo }),
          require('@/redux/actions/detail').default
        )(require('@/components/detail').default)

        cb(null, VideoContainer)
      }, 'video')
    }
  }
}
