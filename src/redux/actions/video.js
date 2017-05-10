// @flow
import videoApi from 'API/video'
import * as consts from 'CONST'

// ================================
// Action Creator
// ================================
const fetchVideoInfo: Function = (id: number) => (dispatch: Function) =>
  videoApi
    .fetchVideoInfo(id)
    .then((res: Object) => dispatch({
      type: consts.FETCH_VIDEO_INFO,
      payload: res.data
    }))

const fetchVideoList: Function = (id: number) => (dispatch: Function) =>
  videoApi
    .fetchVideoList(id)
    .then((res: Object) => dispatch({
      type: consts.FETCH_VIDEO_LIST,
      payload: res.data
    }))

const fetchReplyList: Function = (id: number) => (dispatch: Function) =>
  videoApi
    .fetchReplyList(id)
    .then((res: Object) => dispatch({
      type: consts.FETCH_REPLY_LIST,
      payload: res.data
    }))

/* default 导出所有 Action Creators */
export default {
  fetchVideoInfo,
  fetchVideoList,
  fetchReplyList
}
