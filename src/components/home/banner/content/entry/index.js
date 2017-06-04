import React from 'react'
import PropTypes from 'prop-types'
import Container from './container'
import Text from './text'

const Menu = ({ clickHandler }) => (
  <Container onClick={ _ => clickHandler('BackEnd') } >
        <Text>作者入口</Text>
  </Container>
)

Menu.PropTypes = {
  clickHandler: PropTypes.func.isRequired
}

export default Menu
