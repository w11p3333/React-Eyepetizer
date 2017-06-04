import React, { Component } from 'react'

import Container from './container'
import Text from './text'

class Entry extends Component {

  render () {
    return (
      <Container onClick={ this.pushToBackground } >
        <Text>作者入口</Text>
      </Container>
    )
  }

  pushToBackground () {
    window.open('//open.eyepetizer.net/#!/landing')
  }

}

export default Entry
