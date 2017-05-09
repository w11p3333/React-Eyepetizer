import createReducer from 'UTIL/createReducer'
import state from 'STORE/initState'
import dateFormatter from 'UTIL/dateTimeFormatter'
import { FETCH_VIDEO_LIST } from 'CONST'
import {
  fromJS
} from 'immutable'
export default createReducer(state.videoListInfo, {
    [FETCH_VIDEO_LIST]: (_, { payload: { count, nextPageUrl, total, videoList } }) => {
      videoList.map(video => {
      video.time = dateFormatter(video.duration * 1000)
    })
    return fromJS({
      count,
      nextPageUrl,
      total,
      videoList
    })
  }
})
