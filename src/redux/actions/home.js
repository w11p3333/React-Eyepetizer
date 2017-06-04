// @lfow
// import homeService from '@/apis/home'
import {
  FETCH_HOME_FEED,
  SET_PLATFORM
} from '../consts'

// ================================
// Action Creator
// ================================
const fetchHomeFeed = _ => ({
  type: FETCH_HOME_FEED
})

const setPlatform = (platform: string) => ({
    type: SET_PLATFORM,
    payload: platform
})

/* default 导出所有 Action Creators */
export default {
  fetchHomeFeed,
  setPlatform
}
