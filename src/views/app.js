import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import 'ASSET/scss/normalize.scss'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('COMPONENT/DevTools').default
}

injectGlobal`
  body, html{
   background:
    radial-gradient(
      ellipse at center,
      rgba(51, 51, 51, 1) 0%,
      rgba(17, 17, 17, .75) 100%
    );
    background-color: rgba(51, 51, 51, 1);
    background-position: center;
    font-family: Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Helvetica Neue,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 13px;
    line-height: 1.5;
  }

  button {
    border: 0;
    outline: none;
  }

  a {
    text-decoration: none;
  }

`

const Container = styled.div`
  color: #fff
`

export default ({ children, location }) => (
  <div>
    <Container>
      { children }
    </Container>
    { 
      DevTools && 
      <DevTools />
    }
  </div>
)
