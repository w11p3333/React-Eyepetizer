import React from 'react'
import styled from 'styled-components'
import {
  mediaQuery,
  homeCover
} from '@/style'

export default styled.div`
  flex: 1;
  height: ${homeCover.height}px;
  width: 100%;
  left: 0;
  background: rgba(0, 0, 0, .4);
  position: absolute;

  transition: background .6s;

  ${mediaQuery} {
    height: ${homeCover.height / 2}px
  }
`
