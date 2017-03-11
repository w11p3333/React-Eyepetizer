import { injectReducer } from 'REDUCER'
import createContainer from 'UTIL/createContainer'

export default {
  path: 'count',

  onEnter () {
    console.log('on enter')
  },

  onLeave () {
    console.log('on leave')
  },

  /* 布局基页 */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('VIEW/count').default)
    }, 'countView')
  },

  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        // 注入 Reducer
        injectReducer('count', require('REDUCER/count').default)

        /* 组件连接 state */
        const TodoContainer = createContainer(
          ({ count }) => ({ count }),        // mapStateToProps,
          require('ACTION/count').default,    // mapActionCreators,
          require('COMPONENT/count/').default // 木偶组件
        )

        cb(null, TodoContainer)
      }, 'count')
    }
  }
}

/**
 * 【拓展】
 * 在 msg 的路由中，Reducer 是在 布局基页 中注入
 * 而在这里就可以在 indexRoute 中注入
 * 这主要取决于 Reducer 的作用范围
 */
