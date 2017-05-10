// @flow
import axios from 'axios'
// import querystring from 'querystring'
const BASE_URL: string = 'http://baobab.wandoujia.com/api/v1/'
const VIDEO_DETAIL_URL: string = `${BASE_URL}video`
const RELATE_VIDEO_LIST_URL: string = `${BASE_URL}video/related`
const REPLY_VIDEO_LIST_URL: string = `${BASE_URL}replies/video`
class VideoService {

  fetchVideoInfo (id: number): Object {
    return axios.get(`${VIDEO_DETAIL_URL}/${id.toString()}`)
  }

  fetchVideoList (id: number): Object {
    return axios.get(`${RELATE_VIDEO_LIST_URL}/${id.toString()}?num=10`)
  }

  fetchReplyList (id: number): Object {
    return axios.get(`${REPLY_VIDEO_LIST_URL}?id=${id.toString()}&num=5`)
  }

}

export default new VideoService()
