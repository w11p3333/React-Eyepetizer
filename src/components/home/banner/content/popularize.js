import React from 'react'
import styled from 'styled-components'

import Sprite from '@/components/home/common/sprite'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`

const Button = styled(Sprite)`
  height: 52px;
  width: 163px;
  opacity: .9;
`

const IOS = styled(Button)`
  background-position: 0 21.40534%;
`

const Android = styled(Button)`
  background-position: 0 7.22186%;
`

export default _ => (
  <Container>
    <IOS />
    <Android />
  </Container>
)
