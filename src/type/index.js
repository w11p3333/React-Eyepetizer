// @flow
// 该文件统一管理共用的flow type

// ----------------- home feed --------------------
type VIDEO_LIST = Array<Object>
type DAILY_OBJECT = {
  date: number,
  total: number,
  videoList: VIDEO_LIST
}
export type HOME_FEED_PAYLOAD = {
  dailyList: Array<DAILY_OBJECT>,
  newestIssueType: any,
  nextPageUrl: string,
  nextPublishTime: number
}
export type HOME_FEED_STATE = VIDEO_LIST

// -------------------- play video info -----------------
export type PLAY_VIDEO_INFO_PAYLOAD = Object
export type PLAY_VIDEO_INFO_STATE = PLAY_VIDEO_INFO_PAYLOAD

// -------------------- video list info -----------------
export type VIDEO_LIST_INFO_PAYLOAD = {
  count: number,
  nextPageUrl: ?string,
  total: number,
  videoList: Array<Object>
}
export type VIDEO_LIST_INFO_STATE = VIDEO_LIST_INFO_PAYLOAD

// -------------------- reply list info -----------------
export type REPLY_LIST_INFO_PAYLOAD = {
  count: number,
  nextPageUrl: ?string,
  total: number,
  replyList: Array<Object>
}
export type REPLY_LIST_INFO_STATE = REPLY_LIST_INFO_PAYLOAD
