// ================================
// Action Type
// ================================
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// ================================
// Action Creator
// ================================
const increment = (count) => ({
  type: INCREMENT,
  payload: count
})

const decrement = (count) => ({
  type: DECREMENT,
  payload: count
})

/* default 导出所有 Action Creators */
export default {
  increment,
  decrement
}

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  [INCREMENT]: (count, { payload }) => payload + 1,
  [DECREMENT]: (count, { payload }) => payload - 1
}
