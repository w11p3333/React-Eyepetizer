import videoService from 'SERVICE/videoService'
import dateFormatter from 'UTIL/dateTimeFormatter'
// ================================
// Action Type
// ================================
const FETCH_VIDEO_INFO = 'FETCH_VIDEO_INFO'

// ================================
// Action Creator
// ================================
const fetchVideoInfo = id => dispatch =>
  videoService
    .fetInfo(id)
    .then(res => dispatch({
      type: FETCH_VIDEO_INFO,
      payload: res.data
    }))

/* default 导出所有 Action Creators */
export default {
  fetchVideoInfo
}
// ================================
// Action handlers for Reducer
// ================================
export const ACTION_HANDLERS = {
  [FETCH_VIDEO_INFO]: (videoInfo, { payload }) => {
    payload.time = dateFormatter(payload.duration * 1000)
    return payload
  }
}
