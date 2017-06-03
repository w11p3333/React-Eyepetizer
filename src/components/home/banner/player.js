import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '@/style'
import Player from '@/components/common/player'

const MyPlayer = styled(Player)`
  height: 100%;
  width: 100%;
  z-index: -100;
  ${mediaQuery} {
    display: none;
  }
`

export default _ => (
  <MyPlayer
    autoPlay
    loop
    muted
    url='//static.kaiyanapp.com/eyepetizer-web/homepage.mp4' />
)
