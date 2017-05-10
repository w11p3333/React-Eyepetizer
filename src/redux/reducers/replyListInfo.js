// @flow
import createReducer from 'UTIL/createReducer'
import state from 'STORE/initState'
import moment from 'moment'
import { FETCH_REPLY_LIST } from 'CONST'
import {
  fromJS
} from 'immutable'

export default createReducer(state.replyListInfo, {
    [FETCH_REPLY_LIST]: (_, { payload: { count, nextPageUrl, replyList, total } }) => {
      replyList.map((reply, index) => {
        reply.time = moment(reply.createTime).format('YYYY-MM-DD HH:m')
        if (index === replyList.length - 1) reply.lasted = true
      })
      return fromJS({
        count,
        nextPageUrl,
        replyList,
        total
      })
  }
})
