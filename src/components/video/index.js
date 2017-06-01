import React, { Component } from 'react'
import { is } from 'immutable'

import Player from 'COMPONENT/video/player'
import PlayingInfo from 'COMPONENT/video/playingInfo'
import RelateList from 'COMPONENT/video/relateList'
import ReplyList from 'COMPONENT/video/replyList'
import Tag from 'COMPONENT/video/tag'
import Footer from 'COMPONENT/video/footer'
import Divider from 'COMPONENT/common/divider'

import styled from 'styled-components'

const Container = styled.div`
  margin:0px auto;
  max-width: 700px;
  overflow: hidden;
`

const Cover = styled.div`
  background-position: 50%;
  background-size: 100% 100%;
  height: 100%;
  position: absolute;
  top: 0;
  -webkit-transform: rotate(180deg) scaleX(-1);
  transform: rotate(180deg) scaleX(-1);
  width: 100%;
  z-index: -10;
  background-image: url(http://img.kaiyanapp.com/3a3c7d91d928303382fced649951387e.jpeg?imageMogr2/quality/60/format/jpg);
`

const Main = styled.div`
  position: relative;
  z-index: 10;
`

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

  shouldComponentUpdate (nextProps) {
    return !is(nextProps.videoState, this.props.videoState)
  }

  render () {
    const playVideoInfo = this.props.videoState.get('playVideoInfo')
    const videoListInfo = this.props.videoState.get('videoListInfo')
    const replyListInfo = this.props.videoState.get('replyListInfo')
    return (
        <Container>
          {
            !playVideoInfo.isEmpty() && 
            <Player url={playVideoInfo.get('playUrl')} />
          }
           <Main >
            <PlayingInfo videoInfo={playVideoInfo} />
            <Divider />
            <Cover />
            {
              !videoListInfo.isEmpty() && 
              <RelateList videoList={videoListInfo.get('videoList')} />
            }
            <Divider />
            {
              !replyListInfo.isEmpty() && 
              <ReplyList replyList={replyListInfo.get('replyList')} />
            }
            <Divider />
            {
              !playVideoInfo.isEmpty() && 
              <Tag tags={playVideoInfo.get('tags')} />
            } 
             <Footer /> 
          </Main> 
        </Container>
    )
  }
}
