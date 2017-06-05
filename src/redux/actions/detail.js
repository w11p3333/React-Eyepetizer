// @flow
import {
  FETCH_DETAIL_FEED
} from '../consts'

// ================================
// Action Creator
// ================================

const fetchDetailFeed = (id: number): { type: string, payload: number } => ({
  type: FETCH_DETAIL_FEED,
  payload: id
})

/* default 导出所有 Action Creators */
export default {
  fetchDetailFeed
}
