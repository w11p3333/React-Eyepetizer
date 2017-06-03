import React, { Component } from 'react'

import Container from './container'
import Icon from './icon'
import Logo from './logo'
import Download from './download/'

class Logos extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Container>
        <Icon />
        <Logo />
        <Download { ...this.props } />
      </Container>
    )
  }

}

export default Logos
