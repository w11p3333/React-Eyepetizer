import videoApi from 'API/video'
import * as consts from 'CONST'

// ================================
// Action Creator
// ================================
const fetchVideoInfo = id => dispatch =>
  videoApi
    .fetchVideoInfo(id)
    .then(({ data: payload }) => dispatch({
      type: consts.FETCH_VIDEO_INFO,
      payload
    }))

const fetchVideoList = id => dispatch =>
  videoApi
    .fetchVideoList(id)
    .then(({ data: payload }) => dispatch({
      type: consts.FETCH_VIDEO_LIST,
      payload
    }))

const fetchReplyList = id => dispatch =>
  videoApi
    .fetchReplyList(id)
    .then(({ data: payload }) => dispatch({
      type: consts.FETCH_REPLY_LIST,
      payload
    }))

/* default 导出所有 Action Creators */
export default {
  fetchVideoInfo,
  fetchVideoList,
  fetchReplyList
}
