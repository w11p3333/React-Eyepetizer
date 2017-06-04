import React from 'react'

import Container from './container'
import Slogan from './slogan'
import Logos from './logos'

export default props => (
  <Container>
    <Slogan />
    <Logos { ...props } />
  </Container>
)
