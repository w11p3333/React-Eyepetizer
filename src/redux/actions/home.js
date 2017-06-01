// @lfow
import homeService from '@/apis/home'
import {
  FETCH_HOME_FEED
} from '../consts'

// ================================
// Action Creator
// ================================
const fetchHomeFeed: Function = _ => (dispatch: Function) =>
  homeService
    .fetchHomeFeed()
    .then((res: Object) => dispatch({
      type: FETCH_HOME_FEED,
      payload: res.data
    }))

/* default 导出所有 Action Creators */
export default {
  fetchHomeFeed
}
