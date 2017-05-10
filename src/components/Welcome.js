import React from 'react'
import { Link } from 'react-router'
import logo from 'ASSET/img/logo.svg'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  text-align:center;
  margin-top:60px;
`

const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${rotateAnimation} infinite 20s linear;
  height: 80px;
`

const Title = styled.h1`
  font-weight: normal;
`

export default () => (
  <Container>
    <Logo src={logo} alt="logo" />
    <Title>开眼 React.js App</Title>
    <Link
      style={ { color: 'white' } }
      to="/video/14416"
      role="li">
      视频详情
    </Link>
  </Container>
)
