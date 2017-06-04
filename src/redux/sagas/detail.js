// @flow
import {
  call,
  take,
  select,
  put,
  fork
} from 'redux-saga/effects'
import detailService from '@/apis/detail'
import {
  FETCH_DETAIL_FEED,
  SET_VIDEO_INFO,
  SET_VIDEO_LIST,
  SET_REPLY_LIST
} from '../consts'

function * fetchVideoInfo (id: number): void {
  let videoInfo = yield select(state => state.videoInfo)
  if (videoInfo) {
    return
  }
  videoInfo = (yield call(detailService.fetchVideoInfo, id)).data
  yield put({
    type: SET_VIDEO_INFO,
    payload: videoInfo
  })
}

function * fetchVideoList (id: number): void {
  let videoList = yield select(state => state.videoList)
  if (videoList) {
    return
  }
  videoList = (yield call(detailService.fetchVideoList, id)).data
  yield put({
    type: SET_VIDEO_LIST,
    payload: videoList
  })
}

function * fetchReplyList (id: number): void {
  let replyList = yield select(state => state.replyList)
  if (replyList) {
    return
  }
  replyList = (yield call(detailService.fetchReplyList, id)).data
  yield put({
    type: SET_REPLY_LIST,
    payload: replyList
  })
}

export function * watchFetchDetail (): void {
  while (true) {
    const { payload: id } = yield take(FETCH_DETAIL_FEED)
    yield fork(fetchVideoInfo, id)
    yield fork(fetchVideoList, id)
    yield fork(fetchReplyList, id)
  }
}
