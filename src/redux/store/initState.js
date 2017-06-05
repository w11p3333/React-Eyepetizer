// @flow
import type {
  HOME_FEED_STATE,
  PLAY_VIDEO_INFO_STATE,
  VIDEO_LIST_INFO_STATE,
  REPLY_LIST_INFO_STATE
} from '@/type'

type INIT_STATE = {
  homeFeed: ?HOME_FEED_STATE, // 首页数据流
  playVideoInfo: ?PLAY_VIDEO_INFO_STATE, // 播放的视频信息
  videoListInfo: ?VIDEO_LIST_INFO_STATE, // 视频列表信息
  replyListInfo: ?REPLY_LIST_INFO_STATE // 回复列表信息
}

const initState: INIT_STATE = {

  // home
  homeFeed: null,

  // detail
  playVideoInfo: null,

  videoListInfo: null,

  replyListInfo: null

}

export default initState
