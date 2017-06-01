// @flow
import http from './http'
import { BASE_URL } from './const'

const VIDEO_DETAIL_URL = `${BASE_URL}video`
const RELATE_VIDEO_LIST_URL = `${BASE_URL}video/related`
const REPLY_VIDEO_LIST_URL = `${BASE_URL}replies/video`

class DetailService {

  fetchVideoInfo (id: number): Object {
    return http.get(`${VIDEO_DETAIL_URL}/${id}`)
  }

  fetchVideoList (id: number): Object {
    return http.get(`${RELATE_VIDEO_LIST_URL}/${id}?num=10`)
  }

  fetchReplyList (id: number): Object {
    return http.get(`${REPLY_VIDEO_LIST_URL}?id=${id}&num=5`)
  }

}

export default new DetailService()
