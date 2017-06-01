import { connect } from 'react-redux'
import { injectReducer } from '@/redux/reducers'

import app from '@/views/app'
import detailView from '@/components/detail'
import detailActions from '@/redux/actions/detail'
import detailReducers from '@/redux/reducers/detail'

export default {
  path: 'detail/:id',

  component: app,

  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], require => {
        // 注入 Reducer
        Object.keys(detailReducers).map(key => {
          injectReducer(key, detailReducers[key])
        })
        /* 组件连接 state */
        const VideoContainer = connect(
          ({ playVideoInfo, videoListInfo, replyListInfo }) => ({ playVideoInfo, videoListInfo, replyListInfo }),
          detailActions
        )(detailView)

        cb(null, VideoContainer)
      }, 'video')
    }
  }
}
