// @flow
/**
 * 本文件的作用就是直观呈现 整个应用状态结构树 及其 初始值
 */
import {
  Map
} from 'immutable'

export default {

  // home

  // 首页数据流
  homeFeed: Map({}),

  // 平台推广
  platform: '',

  // detail

  // 播放的视频信息
  playVideoInfo: Map({}),

  // 视频列表信息
  videoListInfo: Map({}),

  // 回复列表信息
  replyListInfo: Map({})

}
