import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '@/style'

export default styled.figure`
  background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 428px;
  height: 22px;
  width: 428px;
  margin: 0 auto 50px;

  ${mediaQuery} {
    margin-bottom: 0 !important;
  }
`
