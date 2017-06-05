// @flow
// ========================================================
// 同步 history 配置
// ========================================================
import { useRouterHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { 
  routerMiddleware,
  syncHistoryWithStore
} from 'react-router-redux'

const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: '' // 相当于 rootPath
})

export const historyMiddleware = routerMiddleware(browserHistory)

/**
 * @param  {Store}
 * @return {History} 增强版 history
 */
export default function (store: Object) {
  return syncHistoryWithStore(
    browserHistory,
    store,
    { selectLocationState: state => state.router }
  )
}
