import React from 'react'
import styled from 'styled-components'

import { detail } from '@/style'

const size = '60px'

export default styled.button`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .15);
  background-image: url(${detail.videoPlayBtnImg});
  background-position: 50%;
  background-size: ${size} ${size};
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-color: rgba(0,0,0,.5);
  }

  transition-property: background-color;
  transition-duration: .6s;
  transition-timing-function: initial;
  transition-delay: initial;
  position: absolute;
`
