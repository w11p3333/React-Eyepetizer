// @flow
import { fromJS } from 'immutable'
import initState from '@/redux/store/initState'
import { createReducer } from './index'
import {
  FETCH_HOME_FEED
} from '../consts'

const homeFeed = createReducer(initState.homeFeed, {
  [FETCH_HOME_FEED]: (state, { payload }) => {
    const [ daily ] = payload.dailyList
    const { videoList } = daily
    return fromJS(videoList)
  }
})

export default {
  homeFeed
}

// export default function (state = initState.homeFeed, { type, payload }) {

//   switch (type) {

//     case FETCH_HOME_FEED:
//       return reducerHomeFeed(payload)

//     default:
//       return state

//   }

// }
