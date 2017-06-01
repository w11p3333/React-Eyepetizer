// @flow
import { fromJS } from 'immutable'
import moment from 'moment'
import { 
  FETCH_VIDEO_INFO,
  FETCH_REPLY_LIST,
  FETCH_VIDEO_LIST
} from 'CONST'
import initState from '@/redux/store/initState'
import { createReducer } from './index'

// 导出名字与state名字相同
export const playVideoInfo = createReducer(initState.playVideoInfo, {
  [FETCH_VIDEO_INFO]: (state, { payload }) => fromJS(payload)
})

export const videoListInfo = createReducer(initState.videoListInfo, {
  [FETCH_VIDEO_LIST]: (state, { payload }) => fromJS(payload)
})

export const replyListInfo = createReducer(initState.replyListInfo, {
  [FETCH_REPLY_LIST]: (state, { payload }) => {
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

// export default function (state, { type, payload }) {

//   switch (type) {

//     case FETCH_VIDEO_INFO:
//       return reducerVideoInfo(payload)

//     case FETCH_REPLY_LIST:
//       return reducerReplyList(payload)

//     case FETCH_VIDEO_LIST:
//       return reducerVideoList(payload)

//     default:
//       return state

//   }

// }
