import React from 'react'
import styled from 'styled-components'

import Sprite from '../sprite'
import Text from './text'

const Contaner = styled(Sprite)`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .8;
  height: 53px;
  width: 220px;
  margin: 0 14px;
  cursor: pointer;
  background-position: 0 0;
  font-size: 14px;
`

export default _ => (
  <Contaner>
    <Text>作者入口</Text>
  </Contaner>
)

