// @flow
import moment from 'moment'
import { 
  SET_VIDEO_INFO,
  SET_REPLY_LIST,
  SET_VIDEO_LIST
} from '@/redux/consts'
import initState from '@/redux/store/initState'
import { createReducer } from './index'

// 导出名字与state名字相同
export const playVideoInfo: Function = createReducer(initState.playVideoInfo, {
  [SET_VIDEO_INFO]: (state, { payload }) => payload
})

export const videoListInfo: Function = createReducer(initState.videoListInfo, {
  [SET_VIDEO_LIST]: (state, { payload }) => payload
})

export const replyListInfo: Function = createReducer(initState.replyListInfo, {
  [SET_REPLY_LIST]: (state, { payload }) => {
    const { count, nextPageUrl, replyList, total } = payload
    replyList.map((reply, index) => {
      reply.time = moment(reply.createTime).format('YYYY-MM-DD HH:m')
      if (index === replyList.length - 1) {
        reply.lasted = true
      }
      return reply
    })
    return {
      count,
      nextPageUrl,
      replyList,
      total
    }
  }
})

export default {
  playVideoInfo,
  videoListInfo,
  replyListInfo
}
