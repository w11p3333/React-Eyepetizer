import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'

export default {
  path: 'video/:id',

  /* 布局基页 */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('VIEW/video').default)
    }, 'videoView')
  },

  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        // 注入 Reducer
        injectReducer('videoInfo', require('REDUCER/video').default)

        /* 组件连接 state */
        const TodoContainer = createContainer(
          ({ videoInfo }) => ({ videoInfo }),        // mapStateToProps,
          require('ACTION/video').default,    // mapActionCreators,
          require('COMPONENT/video/').default // 木偶组件
        )

        cb(null, TodoContainer)
      }, 'video')
    }
  }
}

/**
 * 【拓展】
 * 在 msg 的路由中，Reducer 是在 布局基页 中注入
 * 而在这里就可以在 indexRoute 中注入
 * 这主要取决于 Reducer 的作用范围
 */
