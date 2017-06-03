// @lfow
import homeService from '@/apis/home'
import {
  FETCH_HOME_FEED,
  SET_PLATFORM
} from '../consts'

// ================================
// Action Creator
// ================================
const fetchHomeFeed = _ => (dispatch: Function) =>
  homeService
    .fetchHomeFeed()
    .then((res: Object) => dispatch({
      type: FETCH_HOME_FEED,
      payload: res.data
    }))

const setPlatform = platform => (dispatch: Function) =>
  dispatch({
    type: SET_PLATFORM,
    payload: platform
  })

/* default 导出所有 Action Creators */
export default {
  fetchHomeFeed,
  setPlatform
}
