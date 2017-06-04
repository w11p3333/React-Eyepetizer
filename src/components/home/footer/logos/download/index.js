import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Container from './container'
import Sprite from '@/components/home/common/sprite'

const Button = styled(Sprite)`
  height: 52px;
  width: 162px;
`

const IOS = styled(Button)`
  background-position: 0 28.49707%
`

const Android = styled(Button)`
  background-position: 0 14.3136%;
`

const Download = ({ clickHandler }) => (
  <Container>
    <IOS onClick={ _ => clickHandler('iOS') } />
    <Android onClick={ _ => clickHandler('Android') } />
  </Container>
)

Download.PropTypes = {
  clickHandler: PropTypes.func.isRequired
}

export default Download
