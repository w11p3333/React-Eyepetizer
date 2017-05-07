import createReducer from 'UTIL/createReducer'
import state from 'STORE/initState'
import moment from 'moment'
import { FETCH_REPLY_LIST } from 'CONST'
// import {
//   Map
// } from 'immutable'

export default createReducer(state.replyListInfo, {
    [FETCH_REPLY_LIST]: (_, { payload }) => {
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
    return payload
  }
})
