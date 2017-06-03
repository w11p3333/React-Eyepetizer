// @flow
import { fromJS } from 'immutable'
import initState from '@/redux/store/initState'
import { createReducer } from './index'
import {
  FETCH_HOME_FEED,
  SET_PLATFORM
} from '../consts'

const homeFeed = createReducer(initState.homeFeed, {
  [FETCH_HOME_FEED]: (state, { payload }) => {
    const [ daily ] = payload.dailyList
    const { videoList } = daily
    return fromJS(videoList)
  }
})

const platform = createReducer(initState.platform, {
  [SET_PLATFORM]: (state, { payload }) => payload
})

export default {
  homeFeed,
  platform
}

// export default function (state = initState.homeFeed, { type, payload }) {

//   switch (type) {

//     case FETCH_HOME_FEED:
//       return reducerHomeFeed(payload)

//     default:
//       return state

//   }

// }
