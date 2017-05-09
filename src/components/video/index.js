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
    const { playVideoInfo, videoListInfo, replyListInfo } = this.props
    return (
        <div className="container">
          {
            playVideoInfo.count() && 
            <VideoPlayer url={playVideoInfo.get('playUrl')} />
          }
          <div className="video-info">
            <Info videoInfo={playVideoInfo} />
            <div className="divider" />
            <div className="video-cover-blurred" />
            {
              videoListInfo.count() && 
              <RelateVideo videoList={videoListInfo.get('videoList')} />
            }
            <div className="divider" />
            {
              replyListInfo.count() && 
              <ReplyList replyList={replyListInfo.get('replyList')} />
            }
            <div className="divider" />
            {
              playVideoInfo.count() && 
              <Tag tags={playVideoInfo.get('tags')} />
            }
            <Footer />
          </div>
        </div>
    )
  }
}
