import React from 'react'
import styled from 'styled-components'
import { background } from '@/style'

export default styled.div`
  height: 450px;
  width: 100%;
  background: ${background};

  transition-property: background;
  transition-duration: .6s;
  transition-timing-function: initial;
  transition-delay: initial;
  position: absolute;
`
