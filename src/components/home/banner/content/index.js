import React from 'react'

import Container from './container'
import Logo from './logo'
import Intro from './intro'
import Popularize from './popularize'
import Entry from './entry/'

export default props => (
  <Container>
    <Logo />
    <Intro />
    <Popularize { ...props } />
    <Entry />
  </Container>
)
