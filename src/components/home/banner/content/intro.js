import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '@/style'
import Sprite from '@/components/home/common/sprite'

const Intro = styled(Sprite)`
  height: 54px;
  width: 351px;
  top: 54%;
  background-position: 0 55.5773%;
  
  ${mediaQuery} {
    background-size: 528.59829px;
    height: 44px;
    width: 289px;
  }
`

export default _ => <Intro />
