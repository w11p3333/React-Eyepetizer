import createReducer from 'UTIL/createReducer'
import state from 'STORE/initState'
import dateFormatter from 'UTIL/dateTimeFormatter'
import { FETCH_VIDEO_LIST } from 'CONST'
// import {
//   Map,
//   List
// } from 'immutable'
export default createReducer(state.videoListInfo, {
    [FETCH_VIDEO_LIST]: (_, { payload }) => {
    payload.videoList.map(video => {
      video.time = dateFormatter(video.duration * 1000)
      video.cover = {
        backgroundImage: `url(${video.coverForDetail})`
      }
    })
    return payload
    // return Map({
    //   count,
    //   nextPageUrl,
    //   total,
    //   videoList: List(videoList)
    // })
  }
})
