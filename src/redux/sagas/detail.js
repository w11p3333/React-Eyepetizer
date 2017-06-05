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
import type {
  PLAY_VIDEO_INFO_PAYLOAD,
  VIDEO_LIST_INFO_PAYLOAD,
  REPLY_LIST_INFO_PAYLOAD
} from '@/type'

function * fetchVideoInfo (id: number): any {
  let videoInfo: ?PLAY_VIDEO_INFO_PAYLOAD = yield select(state => state.playVideoInfo)
  if (videoInfo) return
  videoInfo = (yield call(detailService.fetchVideoInfo, id)).data
  yield put({
    type: SET_VIDEO_INFO,
    payload: videoInfo
  })
}

function * fetchVideoList (id: number): any {
  let videoList: ?VIDEO_LIST_INFO_PAYLOAD = yield select(state => state.videoListInfo)
  if (videoList) return
  videoList = (yield call(detailService.fetchVideoList, id)).data
  yield put({
    type: SET_VIDEO_LIST,
    payload: videoList
  })
}

function * fetchReplyList (id: number): any {
  let replyList: ?REPLY_LIST_INFO_PAYLOAD = yield select(state => state.replyListInfo)
  if (replyList) return
  replyList = (yield call(detailService.fetchReplyList, id)).data
  yield put({
    type: SET_REPLY_LIST,
    payload: replyList
  })
}

// 监听到FETCH_DETAIL_FEED请求则开始获取数据
export function * watchFetchDetail (): any {
  while (true) {
    const { payload: id } = yield take(FETCH_DETAIL_FEED)
    yield fork(fetchVideoInfo, id)
    yield fork(fetchVideoList, id)
    yield fork(fetchReplyList, id)
  }
}
