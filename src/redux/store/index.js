// @flow
import { 
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import { createRootReducer } from '@/redux/reducers'
import middlewares from './middlewares'
import enhancers from './enhancers'
import syncHistoryWithStore from './syncHistoryWithStore'

import { sagaMiddleware } from './middlewares'
import rootSaga from '../sagas'
// ======================================================
// 实例化 Store
// ======================================================
const store = createStore(
  createRootReducer(),
  window.__INITIAL_STATE__ || {}, // 前后端同构（服务端渲染）数据同步
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
)
// 让sagas生效
sagaMiddleware.run(rootSaga)
export default store

// 添加router
export const history = syncHistoryWithStore(store)
