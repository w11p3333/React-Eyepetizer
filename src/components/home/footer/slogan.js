import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '@/style'

const bigSize = 428
const smallSize = 285

export default styled.figure`
  background-image: url(http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: ${bigSize}px;
  height: 22px;
  width: ${bigSize}px;
  margin: 0 auto 50px;

  ${mediaQuery} {
    margin-bottom: 0 !important;
    background-size: ${smallSize}px;
    width: ${smallSize}px;
    height: 15px;
  }
`
