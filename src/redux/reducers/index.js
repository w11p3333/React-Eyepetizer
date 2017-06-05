// @flow
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import store from '@/redux/store'

// ================================
// 同步的 Reducers（即应用初始化所必需的）
// ================================
const syncReducers: Object = {
  router: routerReducer
}

// ================================
// 异步加载的 Reducers（Code Splitting 按需加载的）
// ================================
const asyncReducers: Object = {}

/**
 * @return {Function} rootReducer
 */
export function createRootReducer() {
  return combineReducers({
    ...syncReducers,
    ...asyncReducers
  })
}

/**
 * 按需加载时，立即注入对应的 Reducer
 * @param  {String}   key
 * @param  {Function} reducer
 */
export function injectReducer(key: string, reducer: Function) {
  asyncReducers[key] = reducer
  store.replaceReducer(createRootReducer()) // 替换当前的 rootReducer
}

/**
 * @param  {initState} any
 * @param  {Object} handlers
 * @return {Reducer}
 */
export function createReducer(initState: any, handlers: Object): Function {
  return function reducer(state = initState, action: Function) {
    const handler = handlers[action.type]
    return handler ? handler(state, action) : state
  }
}
