// @flow
import { fromJS } from 'immutable'
import moment from 'moment'
import { 
  SET_VIDEO_INFO,
  SET_REPLY_LIST,
  SET_VIDEO_LIST
} from '@/redux/consts'
import initState from '@/redux/store/initState'
import { createReducer } from './index'

// 导出名字与state名字相同
export const playVideoInfo = createReducer(initState.playVideoInfo, {
  [SET_VIDEO_INFO]: (state, { payload }) => fromJS(payload)
})

export const videoListInfo = createReducer(initState.videoListInfo, {
  [SET_VIDEO_LIST]: (state, { payload }) => fromJS(payload)
})

export const replyListInfo = createReducer(initState.replyListInfo, {
  [SET_REPLY_LIST]: (state, { payload }) => {
    const { count, nextPageUrl, replyList, total } = payload
    replyList.map((reply, index) => {
      reply.time = moment(reply.createTime).format('YYYY-MM-DD HH:m')
      if (index === replyList.length - 1) {
        reply.lasted = true
      }
      return reply
    })
    return fromJS({
      count,
      nextPageUrl,
      replyList,
      total
    })
  }
})

export default {
  playVideoInfo,
  videoListInfo,
  replyListInfo
}
