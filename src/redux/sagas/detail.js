// @flow
import {
  call,
  take,
  put
} from 'redux-saga/effects'
import detailService from '@/apis/detail'
import {
  FETCH_DETAIL_FEED,
  SET_VIDEO_INFO,
  SET_VIDEO_LIST,
  SET_REPLY_LIST
} from '../consts'

function * fetchDetail (id) {
  const videoInfo = yield call(detailService.fetchVideoInfo, id)
  yield put({
    type: SET_VIDEO_INFO,
    payload: videoInfo.data
  })
  const videoList = yield call(detailService.fetchVideoList, id)
  yield put({
    type: SET_VIDEO_LIST,
    payload: videoList.data
  })
  const replyList = yield call(detailService.fetchReplyList, id)
  yield put({
    type: SET_REPLY_LIST,
    payload: replyList.data
  })
}

export function * watchFetchDetail () {
  while (true) {
    const { payload } = yield take(FETCH_DETAIL_FEED)
    yield call(fetchDetail, payload)
  }
}
