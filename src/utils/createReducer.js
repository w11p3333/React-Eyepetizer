// @flow
/**
 * @param  {initState}
 * @param  {Object} handlers
 * @return {Reducer}
 */
export default function createReducer(initState: Object, handlers: Object): Function {
  return function reducer(state = initState, action: Function) {
    const handler = handlers[action.type]
    return handler ? handler(state, action) : state
  }
}
