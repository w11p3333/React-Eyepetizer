import React, { Component } from 'react'
import styled from 'styled-components'
// import { is } from 'immutable'

import Player from './player'
import PlayingInfo from './playingInfo'
import RelateList from './relateList'
import ReplyList from './replyList'
import Tag from './tag'
import Footer from './footer'

const Container = styled.main`
  margin:0px auto;
  max-width: 700px;
  overflow: hidden;
  &:hover .layer {
    background: transparent;
  }
`

const Cover = styled.figure`
  background-position: 50%;
  background-size: 100% 100%;
  height: 100%;
  position: absolute;
  top: 0;
  -webkit-transform: rotate(180deg) scaleX(-1);
  transform: rotate(180deg) scaleX(-1);
  width: 100%;
  z-index: -10;
  background-image: url(http://img.kaiyanapp.com/0d0597426e182c8bed5de1824207cba0.jpeg?imageMogr2/quality/60/format/jpg);
`

const Article = styled.article`
  position: relative;
  z-index: 10;
`

export default class Detail extends Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    console.log(this.props)
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
    return true
    // return !is(nextProps.videoState, this.props.videoState)
  }

  render () {
    const { playVideoInfo, videoListInfo, replyListInfo } = this.props

    return (
        <Container>
          {
            !playVideoInfo.isEmpty() && 
            <Player url={playVideoInfo.get('playUrl')} />
          }
           <Article >
            <PlayingInfo videoInfo={playVideoInfo} />
            <Cover />
            {
              !videoListInfo.isEmpty() && 
              <RelateList videoList={videoListInfo.get('videoList')} />
            }
            {
              !replyListInfo.isEmpty() && 
              <ReplyList replyList={replyListInfo.get('replyList')} />
            }
            {
              !playVideoInfo.isEmpty() && 
              <Tag tags={playVideoInfo.get('tags')} />
            }
             <Footer /> 
          </Article> 
        </Container>
    )
  }
}
