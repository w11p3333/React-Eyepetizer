import videoService from 'SERVICE/videoService'
import * as consts from 'CONST'

// ================================
// Action Creator
// ================================
const fetchVideoInfo = id => dispatch =>
  videoService
    .fetchVideoInfo(id)
    .then(({ data: payload }) => dispatch({
      type: consts.FETCH_VIDEO_INFO,
      payload
    }))

const fetchVideoList = id => dispatch =>
  videoService
    .fetchVideoList(id)
    .then(({ data: payload }) => dispatch({
      type: consts.FETCH_VIDEO_LIST,
      payload
    }))

const fetchReplyList = id => dispatch =>
  videoService
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
