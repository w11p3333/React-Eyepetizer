import React from 'react'
import styled from 'styled-components'

import Sprite from '@/components/home/common/sprite'

const Container = styled.div`
  height: 120px;
  width: 162px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

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
