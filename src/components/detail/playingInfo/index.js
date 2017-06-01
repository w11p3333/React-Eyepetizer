import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Container from './container'
import Title from './title'
import Meta from './meta'
import Desc from './desc'

class PlayingInfo extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const videoInfo = this.props.videoInfo
    return (
      <Container>
        <Title>{videoInfo.get('title')}</Title>
        <Meta
          fontSize="14px"
          category={ videoInfo.get('category') } 
          time={ videoInfo.get('duration') } />
        <Desc>{ videoInfo.get('description') }</Desc>
      </Container>
    )
  }
  
}

PlayingInfo.propTypes = {
  videoInfo: PropTypes.object.isRequired
}

export default PlayingInfo
