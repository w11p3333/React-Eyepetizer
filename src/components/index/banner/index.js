import React from 'react'
import styled from 'styled-components'

import Player from './player'
import Content from './content'

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  z-index: -1;
`

export default () => (
  <Container>
    <Content />
    <Player />
  </Container>
)
