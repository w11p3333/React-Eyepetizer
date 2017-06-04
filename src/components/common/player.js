import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MyVideo = styled.video`
  height: 100%;
  width: 100%;
`

const Video = props => (
  <MyVideo { ...props }>
    <source src={ props.url } />
  </MyVideo>
)

Video.propTypes = {
  url: PropTypes.string.isRequired,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool
}

export default Video
