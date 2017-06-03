import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MyVideo = styled.video`
  height: 100%;
  width: 100%;
`

class Video extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { url } = this.props
    return (
      <MyVideo 
        { ...this.props } >
        <source src={ url } />
      </MyVideo>
    )
  }

}

Video.propTypes = {
  url: PropTypes.string.isRequired,
  muted: PropTypes.boolean,
  loop: PropTypes.boolean,
  controls: PropTypes.boolean,
  autoPlay: PropTypes.boolean,
  height: PropTypes.height,
  width: PropTypes.width
}

export default Video
