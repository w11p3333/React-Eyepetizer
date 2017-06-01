// @flow
import detailService from '@/apis/detail'
import {
  FETCH_VIDEO_INFO,
  FETCH_VIDEO_LIST,
  FETCH_REPLY_LIST
} from '../consts'

// ================================
// Action Creator
// ================================
const fetchVideoInfo: Function = (id: number) => (dispatch: Function) =>
  detailService
    .fetchVideoInfo(id)
    .then((res: Object) => dispatch({
      type: FETCH_VIDEO_INFO,
      payload: res.data
    }))

const fetchVideoList: Function = (id: number) => (dispatch: Function) =>
  detailService
    .fetchVideoList(id)
    .then((res: Object) => dispatch({
      type: FETCH_VIDEO_LIST,
      payload: res.data
    }))

const fetchReplyList: Function = (id: number) => (dispatch: Function) =>
  detailService
    .fetchReplyList(id)
    .then((res: Object) => dispatch({
      type: FETCH_REPLY_LIST,
      payload: res.data
    }))

/* default 导出所有 Action Creators */
export default {
  fetchVideoInfo,
  fetchVideoList,
  fetchReplyList
}
