import { connect } from 'react-redux'
import { injectReducer } from '@/redux/reducers'

import app from '@/views/app'
import component from '@/components/detail'
import actions from '@/redux/actions/detail'
import reducers from '@/redux/reducers/detail'

export default {
  path: 'detail/:id',

  component: app,

  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], require => {
        // 注入 Reducer
        Object.keys(reducers).map(key => {
          injectReducer(key, reducers[key])
        })
        /* 组件连接 state */
        const VideoContainer = connect(
          ({ playVideoInfo, videoListInfo, replyListInfo }) => ({ playVideoInfo, videoListInfo, replyListInfo }),
          actions
        )(component)

        cb(null, VideoContainer)
      }, 'video')
    }
  }
}
