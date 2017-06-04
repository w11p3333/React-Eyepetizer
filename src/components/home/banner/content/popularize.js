import React from 'react'
import styled from 'styled-components'

import { mediaQuery } from '@/style'
import Sprite from '@/components/home/common/sprite'

const size = 52

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  
  ${mediaQuery} {
    height: ${size * 2.5 }px;
    flex-direction: column;
  }
`

const Button = styled(Sprite)`
  height: ${size}px;
  width: 163px;
  opacity: .9;

`

const IOS = styled(Button)`
  background-position: 0 21.40534%;
`

const Android = styled(Button)`
  background-position: 0 7.22186%;
`

export default ({ clickHandler }) => (
  <Container>
    <IOS onClick={ _ => clickHandler('iOS') } />
    <Android onClick={ _ => clickHandler('Android') } />
  </Container>
)
