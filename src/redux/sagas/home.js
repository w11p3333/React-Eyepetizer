// @flow
import {
  call,
  take,
  put
} from 'redux-saga/effects'
import homeService from '@/apis/home'
import {
  FETCH_HOME_FEED,
  SET_HOME_FEED
} from '../consts'

export function * fetchHomeFeed () {
  yield take(FETCH_HOME_FEED)
  const { data } = yield call(homeService.fetchHomeFeed)
  yield put({
    type: SET_HOME_FEED,
    payload: data
  })
}
