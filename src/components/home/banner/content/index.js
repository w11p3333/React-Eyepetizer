import React from 'react'

import Container from './container'
import Logo from './logo'
import Intro from './intro'
import Popularize from './popularize'
import Entry from './entry/'

export default ({ clickHandler }) => (
  <Container>
    <Logo />
    <Intro />
    <Popularize clickHandler={ clickHandler } />
    <Entry clickHandler={ clickHandler } />
  </Container>
)
