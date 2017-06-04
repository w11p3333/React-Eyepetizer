import React, { PureComponent } from 'react'
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

export default class Menu extends PureComponent {

  render () {
    return (
      <Container>
        <WeChat onClick={ _ => this.props.setPlatform('WeChat') } />
        <Weibo onClick={ this.pushToWeibo } />
        <Email onClick={ this.pushToEmail } />
      </Container>
    )
  }

  pushToWeibo () {
    window.open('//weibo.com/eyepetizer')
  }

  pushToEmail () {
    window.location.href = 'mailto:bd@eyepetizer.net'
  }

}
