import React from 'react'

import Container from './container'
import Menu from './menu'
import Content from './content'
import Player from './player'
import Album from './album'

export default props => (
  <Container>
    <Menu { ...props } />
    <Content { ...props } />
    <Player />
    <Album />
  </Container>
)
