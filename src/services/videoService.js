import axios from 'axios'
// import querystring from 'querystring'
const BASE_URL = 'http://baobab.wandoujia.com/api/v1/'
const VIDEO_DETAIL_URL = `${BASE_URL}video`
const RELATE_VIDEO_LIST_URL = `${BASE_URL}video/related`
const REPLY_VIDEO_LIST_URL = `${BASE_URL}replies/video`
class VideoService {

  fetchVideoInfo (id) {
    return axios.get(`${VIDEO_DETAIL_URL}/${id}`)
  }

  fetchVideoList (id) {
    return axios.get(`${RELATE_VIDEO_LIST_URL}/${id}?num=10`)
  }

  fetchReplyList (id) {
    return axios.get(`${REPLY_VIDEO_LIST_URL}?id=${id}&num=5`)
  }

}

export default new VideoService()
