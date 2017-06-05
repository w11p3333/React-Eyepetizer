// @flow
import initState from '@/redux/store/initState'
import { createReducer } from './index'
import {
  SET_HOME_FEED
} from '../consts'
import type {
  HOME_FEED_STATE,
  HOME_FEED_PAYLOAD
} from '@/type'

const homeFeed: Function = createReducer(initState.homeFeed, {
  [SET_HOME_FEED]: (state: ?HOME_FEED_STATE, { payload } : { payload: HOME_FEED_PAYLOAD }) => {
    const [ daily ] = payload.dailyList
    const { videoList } = daily
    return videoList
  }
})

export default {
  homeFeed
}
// 等同于下面这段
// export default function (state = initState.homeFeed, { type, payload }) {

//   switch (type) {

//     case FETCH_HOME_FEED:
//       return reducerHomeFeed(payload)

//     default:
//       return state

//   }

// }
