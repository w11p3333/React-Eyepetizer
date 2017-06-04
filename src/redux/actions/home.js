// @lfow
// import homeService from '@/apis/home'
import {
  FETCH_HOME_FEED
} from '../consts'

// ================================
// Action Creator
// ================================
const fetchHomeFeed = _ => ({
  type: FETCH_HOME_FEED
})

/* default 导出所有 Action Creators */
export default {
  fetchHomeFeed
}
