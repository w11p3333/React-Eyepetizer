// @flow
import {
  call,
  take,
  select,
  put
} from 'redux-saga/effects'
import homeService from '@/apis/home'
import {
  FETCH_HOME_FEED,
  SET_HOME_FEED
} from '../consts'
import type {
  HOME_FEED_PAYLOAD
} from '@/type'

export function * fetchHomeFeed (): any {
  yield take(FETCH_HOME_FEED)
  let homeFeed: ?HOME_FEED_PAYLOAD = yield select(state => state.homeFeed)
  if (homeFeed) return // warm cache
  homeFeed = (yield call(homeService.fetchHomeFeed)).data
  yield put({
    type: SET_HOME_FEED,
    payload: homeFeed
  })
}
