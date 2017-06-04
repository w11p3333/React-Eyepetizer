import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Player from '@/components/common/player'
import PlayButton from './playButton'
import Container from './container'

const Video = styled(Player)`
  position: absolute;
`

class MyPlayer extends PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      startPlay: false
    }
    this.startPlay = this.startPlay.bind(this)
    this.stopPlay = this.stopPlay.bind(this)
  }

  render () {
    return (
      <Container onClick={ this.stopPlay }>
        <Video
        controls={ this.state.startPlay }
        url={ this.props.url } />
        {
          !this.state.startPlay &&
          <PlayButton onClick={ this.startPlay } />
        }
      </Container>
    )
  }

  startPlay () {
    const video = this.getVideoRef()
    if (this.state.startPlay && video.paused) return
    this.setState({ 
      startPlay: true
     }, _ => {
      video.play()
    })
  }

  stopPlay () {
    const video = this.getVideoRef()
    if (!this.state.startPlay || video.paused) return
    this.setState({
      startPlay: false
    }, _ => {
      video.pause()
    })
  }

  getVideoRef () {
    return document.getElementsByTagName('video')[0]
  }

}

MyPlayer.propTypes = {
  url: PropTypes.string.isRequired
}

export default MyPlayer
