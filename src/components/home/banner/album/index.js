// @flow
import React, { PureComponent } from 'react'
import { injectGlobal } from 'styled-components'

import Container from './container'
import Image from './image'

injectGlobal`
  .hide {
    opacity: 0;
  }
`

class Album extends PureComponent {

  constructor (props) {
    super(props)
    const prefix = 'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_'
    const suffix = '.jpg'
    this.state = {
      imgArr: [
        `${prefix}7.8b2d29b4${suffix}`,
        `${prefix}6.54b06aad${suffix}`,
        `${prefix}5.c48e7769${suffix}`,
        `${prefix}4.c268348d${suffix}`,
        `${prefix}3.7819585d${suffix}`,
        `${prefix}2.6b1727b7${suffix}`,
        `${prefix}1.9583a28a${suffix}`
      ],
      playingIndex: 0
    }
    this.setTimer()
  }

  render () {
    return (
      <Container>
        {
          this.state.imgArr.map((img, index) => 
            <Image
            className={ index === this.state.playingIndex ? '' : 'hide' } 
            src={ img } />
          )
        }
      </Container>
    )
  }

  setTimer () {
    let index = 0
    setInterval(_ => {
      this.setState({
        playingIndex: index
      }, _ => {
        index = index === this.state.imgArr.length - 1 ? 0 : ++index
      })
    }, 8000)
  }

}

export default Album
