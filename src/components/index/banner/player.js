import React from 'react'
import styled from 'styled-components'

import Player from '@/components/common/player'

const MyPlayer = styled(Player)`
  height: 100%;
  width: 100%;
  z-index: -100;
`

export default _ => <MyPlayer url='//static.kaiyanapp.com/eyepetizer-web/homepage.mp4' />
