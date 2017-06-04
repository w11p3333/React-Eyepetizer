import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from './container'
import Title from './title'
import Meta from './meta'
import Desc from './desc'

const MyMeta = styled(Meta)`
  font-size: 14px;
`

const PlayingInfo = ({ videoInfo }) => (
  <Container>
    <Title>{ videoInfo.title }</Title>
    <MyMeta
      category={ videoInfo.category }
      time={ videoInfo.duration } />
    <Desc>{ videoInfo.description }</Desc>
  </Container>
)

PlayingInfo.propTypes = {
  videoInfo: PropTypes.object.isRequired
}

export default PlayingInfo
