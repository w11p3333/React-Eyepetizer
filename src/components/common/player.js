import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MyVideo = styled.video`
  height: 100%;
  width: 100%;
`

class Video extends PureComponent {

  componentDidMount () {
    this.registerEvent()
  }

  componentWillReceiveProps (nextProps) {
    const video = this.getDom()
    nextProps.isPlay
    ? video.play()
    : video.pause()
  }

  render () {
    return (
      <MyVideo { ...this.props }>
        <source src={ this.props.url } />
      </MyVideo>
    )
  }

  getDom () {
    return ReactDom.findDOMNode(this)
  }

  registerEvent () {
    const video = this.getDom()
    video.onplay = event => {
      this.props.handlerPlay &&
      this.props.handlerPlay(event)
    }
    video.onpause = event => {
      this.props.handlerPause &&
      this.props.handlerPause(event)
    }
  }

}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  handlerPlay: PropTypes.func,
  handlerPause: PropTypes.func
}

export default Video
