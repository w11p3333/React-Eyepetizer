import React from 'react'

import Container from './container'
import Icon from './icon'
import Logo from './logo'
import Download from './download/'

export default props => (
  <Container>
    <Icon />
    <Logo />
    <Download { ...props } />
  </Container>
)
