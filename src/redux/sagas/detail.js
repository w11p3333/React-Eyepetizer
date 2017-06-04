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
  let videoInfo = yield select(state => state.playVideoInfo)
  console.log(videoInfo, '从store获取')
  if (videoInfo) {
    return
  }
  console.log(videoInfo, '从store获取')
  videoInfo = (yield call(detailService.fetchVideoInfo, id)).data
  yield put({
    type: SET_VIDEO_INFO,
    payload: videoInfo
  })
}

function * fetchVideoList (id: number): void {
  let videoList = yield select(state => state.videoListInfo)
  console.log(videoList, '从store获取')
  if (videoList) {
    return
  }
  console.log('从service获取')
  videoList = (yield call(detailService.fetchVideoList, id)).data
  yield put({
    type: SET_VIDEO_LIST,
    payload: videoList
  })
}

function * fetchReplyList (id: number): void {
  let replyList = yield select(state => state.replyListInfo)
  console.log(replyList, '从store获取')
  if (replyList) {
    return
  }
  console.log('从service获取')
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
