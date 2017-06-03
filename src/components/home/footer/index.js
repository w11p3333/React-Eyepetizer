import React, { Component } from 'react'

import Container from './container'
import Slogan from './slogan'
import Logos from './logos'

class Footer extends Component {
  
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Container>
        <Slogan />
        <Logos { ...this.props } />
      </Container>
    )
  }

}

export default Footer
