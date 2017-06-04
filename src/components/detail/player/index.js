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
  }

  render () {
    return (
      <Container onClick={ this.stopPlay.bind(this) }>
        <Video
        controls={ this.state.startPlay }
        url={ this.props.url } />
        {
          !this.state.startPlay &&
          <PlayButton onClick={ this.startPlay.bind(this) } />
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
