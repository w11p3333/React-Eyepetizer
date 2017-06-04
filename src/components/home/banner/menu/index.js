import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from './container'
import Sprite from './sprite'


const WeChat = styled(Sprite)`
  background-position: 0 -26px;
`

const Weibo = styled(Sprite)`
  background-position: 0 -63px;
`

const Email = styled(Sprite)`
  background-position: 0 0;
  background-size: 54px;
`

const Menu = ({ clickHandler }) => (
  <Container>
    <WeChat onClick={ _ => clickHandler('WeChat') } />
    <Weibo onClick={ _ => clickHandler('Weibo') } />
    <Email onClick={ _ => clickHandler('Email') } />
  </Container>
)

Menu.PropTypes = {
  clickHandler: PropTypes.func.isRequired
}

export default Menu
