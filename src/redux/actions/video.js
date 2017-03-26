import moment from 'moment'
import videoService from 'SERVICE/videoService'
import dateFormatter from 'UTIL/dateTimeFormatter'
// ================================
// Action Type
// ================================
const FETCH_VIDEO_INFO = 'FETCH_VIDEO_INFO'
const FETCH_REPLY_LIST = 'FETCH_REPLY_LIST'
const FETCH_VIDEO_LIST = 'FETCH_VIDEO_LIST'

// ================================
// Action Creator
// ================================
const fetchVideoInfo = id => dispatch =>
  videoService
    .fetchVideoInfo(id)
    .then(res => dispatch({
      type: FETCH_VIDEO_INFO,
      payload: res.data
    }))

const fetchVideoList = id => dispatch =>
  videoService
    .fetchVideoList(id)
    .then(res => dispatch({
      type: FETCH_VIDEO_LIST,
      payload: res.data
    }))

const fetchReplyList = id => dispatch =>
  videoService
    .fetchReplyList(id)
    .then(res => dispatch({
      type: FETCH_REPLY_LIST,
      payload: res.data
    }))

/* default 导出所有 Action Creators */
export default {
  fetchVideoInfo,
  fetchVideoList,
  fetchReplyList
}
// ================================
// Action handlers for Reducer
// ================================
export const ACTION_HANDLERS = {
  [FETCH_VIDEO_INFO]: (videos, { payload }) => {
    payload.time = dateFormatter(payload.duration * 1000)
    return { ...videos, videoInfo: payload }
  },
  [FETCH_VIDEO_LIST]: (videos, { payload }) => {
    console.log('its me', payload.videoList)
    payload.videoList.map(video => {
      video.time = dateFormatter(video.duration * 1000)
      video.cover = {
        backgroundImage: `url(${video.coverForDetail})`
      }
    })
    return { ...videos, videoList: payload }
  },
  [FETCH_REPLY_LIST]: (videos, { payload }) => {
    payload.replyList.map((reply, index) => {
      reply.time = moment(reply.createTime).format('YYYY-MM-DD HH:m')
      reply.cover = {
        backgroundImage: `url(${reply.user.avatar})`
      }
      reply.uid = reply.user.uid
      reply.username = reply.user.nickname
      if (index === payload.replyList.length - 1) {
        reply.lasted = true
      }
    })
    return { ...videos, replyList: payload }
  }
}
