import React from 'react'
import styled from 'styled-components'

import Container from './container'
import Sprite from '@/components/home/common/sprite'

const Button = styled(Sprite)`
  height: 52px;
  width: 162px;
`

const IOS = styled(Button)`
  background-position: 0 28.49707%
`

const Android = styled(Button)`
  background-position: 0 14.3136%;
`

export default _ => (
  <Container>
    <IOS />
    <Android />
  </Container>
)
