import React, { Component } from 'react'
import { 
  is,
  fromJS
} from 'immutable'

import Loading from './loading'
import Container from './container'
import Article from './article'
import Player from './player'
import PlayingInfo from './playingInfo'
import RelateList from './relateList'
import ReplyList from './replyList'
import Tag from './tag'
import Footer from './footer'

export default class Detail extends Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const ID = this.props.params.id
    if (!ID) this.context.router.push('/')
    else {
      this.props.fetchDetailFeed(ID)
    }
  }

  shouldComponentUpdate (nextProps) {
    return !is(fromJS(nextProps), fromJS(this.props))
  }

  render () {
    const { playVideoInfo, videoListInfo, replyListInfo } = this.props
    if (playVideoInfo && videoListInfo && replyListInfo) {
      return (
        <Container>
          <Player url={ playVideoInfo.playUrl } />
            <Article >
              <PlayingInfo videoInfo={ playVideoInfo } />
              <RelateList videoList={ videoListInfo.videoList } />
              <ReplyList replyList={ replyListInfo.replyList } />
              <Tag tags={ playVideoInfo.tags } />
              <Footer /> 
            </Article> 
        </Container>
      )
    } else {
      return <Loading />
    }
  }
}
