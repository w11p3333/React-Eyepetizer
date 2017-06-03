import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '@/style'
import Sprite from '@/components/home/common/sprite'

export default styled(Sprite)`
  height: 225px;
  width: 180px;
  margin-top: 100px;
  background-position: 0 81.02435%;

  ${mediaQuery} {
    height: 150px;
    width: 120px;
    background-size: 428px;
  }
`
