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

export function * fetchHomeFeed (): void {
  yield take(FETCH_HOME_FEED)
  let homeFeed = yield select(state => state.homeFeed)
  if (homeFeed) {
    return
  }
  homeFeed = (yield call(homeService.fetchHomeFeed)).data
  yield put({
    type: SET_HOME_FEED,
    payload: homeFeed
  })
}
