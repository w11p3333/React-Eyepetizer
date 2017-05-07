import createReducer from 'UTIL/createReducer'
import state from 'STORE/initState'
import dateFormatter from 'UTIL/dateTimeFormatter'
import { FETCH_VIDEO_INFO } from 'CONST'

export default createReducer(state.playVideoInfo, {
    [FETCH_VIDEO_INFO]: (_, { payload }) => {
    payload.time = dateFormatter(payload.duration * 1000)
    return payload
  }
})
