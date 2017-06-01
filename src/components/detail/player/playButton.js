import React from 'react'
import styled from 'styled-components'

export default styled.button`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .15);
  background-image: url('//static.kaiyanapp.com/eyepetizer-web/assets/images/detail/icon_play@2x.3b9f9ba5.png');
  background-position: 50%;
  background-size: 60px 60px;
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
