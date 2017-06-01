import React from 'react'
import styled from 'styled-components'

import Menu from './menu'
import Logo from './logo'
import Intro from './intro'
import Popularize from './popularize'
import Entry from './entry/'

const Container = styled.div`
  top: 10%;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export default _ => (
  <Container>
    <Menu />
    <Logo />
    <Intro />
    <Popularize />
    <Entry />
  </Container>
)
