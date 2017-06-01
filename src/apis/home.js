// @flow
import http from './http'
import { BASE_URL } from './const'

const HOME_FEED_URL = `${BASE_URL}feed`

class HomeService {

  fetchHomeFeed (): Object {
    return http.get(HOME_FEED_URL)
  }

}

export default new HomeService()
