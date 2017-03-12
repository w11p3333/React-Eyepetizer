import axios from 'axios'
// import querystring from 'querystring'
const BASE_URL = 'http://baobab.wandoujia.com'
// const HOME_PAGE_URL = `${BASE_URL}/api/v1/feed`
const VIDEO_DETAIL_URL = `${BASE_URL}/api/v1/video`
// const RELATE_VIDEO_LIST_URL = `${BASE_URL}/api/v1/video/related`
// const REPLIES_VIDEO_LIST_URL = `${BASE_URL}/api/v1/replies/video`
console.log(`${VIDEO_DETAIL_URL}`)
class VideoService {

  fetInfo (id) {
    return axios.get(`${VIDEO_DETAIL_URL}/${id}`)
  }

}

export default new VideoService()
