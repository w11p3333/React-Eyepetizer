import React, { Component } from 'react'
// import { Link } from 'react-router'
// import logo from 'ASSET/img/logo.svg'
import styled from 'styled-components'

import Banner from './banner'
import Divider from './divider'
import Video from './video'

const Container = styled.div`
  height: 100%;
  background-color: white;
  font-family: Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 13px;
  line-height: 1.5;
`

export default class Index extends Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
  }  

  render () {
    return (
      <Container>
        <Banner /> 
        <Divider />
        <Video />
      </Container>
    )
  }

}
