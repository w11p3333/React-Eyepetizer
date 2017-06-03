// ======================================================
// 配置中间件
// ======================================================
import createSagaMiddleware from 'redux-saga'
import { historyMiddleware } from './syncHistoryWithStore'

export const sagaMiddleware = createSagaMiddleware()

const middlewares = [historyMiddleware, sagaMiddleware]

if (__DEV__) {
  /** Redux Logger (P.S: 打印日志会造成轻微的卡顿) **/
  const createLogger = require('redux-logger')
  middlewares.push(createLogger())
}

export default middlewares
