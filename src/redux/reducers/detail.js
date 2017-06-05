// @flow
import moment from 'moment'
import { 
  SET_VIDEO_INFO,
  SET_REPLY_LIST,
  SET_VIDEO_LIST
} from '@/redux/consts'
import type {
  PLAY_VIDEO_INFO_STATE,
  PLAY_VIDEO_INFO_PAYLOAD,
  VIDEO_LIST_INFO_STATE,
  VIDEO_LIST_INFO_PAYLOAD,
  REPLY_LIST_INFO_STATE,
  REPLY_LIST_INFO_PAYLOAD
} from '@/type'
import initState from '@/redux/store/initState'
import { createReducer } from './index'

// 导出名字与state名字相同
export const playVideoInfo: Function = createReducer(initState.playVideoInfo, {
  [SET_VIDEO_INFO]: (state: ?PLAY_VIDEO_INFO_STATE, { payload } : { payload: PLAY_VIDEO_INFO_PAYLOAD }) => payload
})

export const videoListInfo: Function = createReducer(initState.videoListInfo, {
  [SET_VIDEO_LIST]: (state: ?VIDEO_LIST_INFO_STATE, { payload } : { payload: VIDEO_LIST_INFO_PAYLOAD }) => payload
})

export const replyListInfo: Function = createReducer(initState.replyListInfo, {
  [SET_REPLY_LIST]: (state: ?REPLY_LIST_INFO_STATE, { payload } : { payload: REPLY_LIST_INFO_PAYLOAD }) => {
    const { count, nextPageUrl, replyList, total } = payload

    const newReplyList = replyList.map((reply, index) => {
      reply.time = moment(reply.createTime).format('YYYY-MM-DD HH:m')
      if (index === replyList.length - 1) {
        reply.lasted = true
      }
      return reply
    })

    return {
      count,
      nextPageUrl,
      replyList: newReplyList,
      total
    }
  }
})

export default {
  playVideoInfo,
  videoListInfo,
  replyListInfo
}
