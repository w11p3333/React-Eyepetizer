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
      isPlaying: false
    }
    this.startPlay = this.startPlay.bind(this)
    this.stopPlay = this.stopPlay.bind(this)
  }

  startPlay () {
    this.setState({
      isPlaying: true
    })
  }

  stopPlay () {
    this.setState({
      isPlaying: false
    })
  }

  render () {
    const { isPlaying } = this.state
    return (
      <Container>
        <Video
          onClick={ this.stopPlay }
          handlerPlay={ this.startPlay } // 需要同步player controls 所控制的事件
          handlerPause={ this.stopPlay }
          isPlay={ isPlaying }
          controls={ isPlaying }
          url={ this.props.url } />
        {
          !isPlaying &&
          <PlayButton onClick={ this.startPlay } />
        }
      </Container>
    )
  }

}

MyPlayer.propTypes = {
  url: PropTypes.string.isRequired
}

export default MyPlayer
