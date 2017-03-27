import React, { Component } from 'react'
import VideoPlayer from './videoPlayer'
import Info from './info'
import RelateVideo from './relateVideo'
import ReplyList from './replyList'
import Tag from './tag'
import Footer from './footer'
import 'ASSET/scss/detail.scss'

export default class Detail extends Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const ID = this.props.params.id
    if (!ID) this.context.router.push('/')
    else {
      this.props.fetchVideoInfo(ID)
      this.props.fetchReplyList(ID)
      this.props.fetchVideoList(ID)
    }
  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    const { videos } = this.props
    const { videoInfo, replyList, videoList } = videos
    return (
        <div className="container">
          {
            videoInfo &&
            <VideoPlayer url={videoInfo.playUrl} />
          }
          <div className="video-info">
            <Info videoInfo={videoInfo} />
            <div className="divider" />
            <div className="video-cover-blurred" />
            <div className="divider" />
            {
              videoList &&
              <RelateVideo videoList={videoList.videoList} />
            }
            {
              replyList &&
              <ReplyList replyList={replyList.replyList} />
            }
            {
              videoInfo &&
              <Tag tags={videoInfo.tags} />
            }
            <Footer />
          </div>
        </div>
    )
  }
}
