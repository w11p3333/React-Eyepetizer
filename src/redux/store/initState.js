// @flow
import type {
  HOME_FEED,
  PLAY_VIDEO_INFO,
  VIDEO_LIST_INFO,
  REPLY_LIST_INFO
} from '@/type'

type INIT_STATE = {
  homeFeed: HOME_FEED, // 首页数据流
  playVideoInfo: PLAY_VIDEO_INFO, // 播放的视频信息
  videoListInfo: VIDEO_LIST_INFO, // 视频列表信息
  replyListInfo: REPLY_LIST_INFO // 回复列表信息
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
