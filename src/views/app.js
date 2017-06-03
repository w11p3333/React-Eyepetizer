import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import '@/assets/scss/normalize.scss'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('COMPONENT/DevTools').default
}

injectGlobal`
  body, html{
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

class App extends Component {

  constructor (props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    // 每次路由时滚动到最顶部
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    const { children } = this.props
    return (
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
  }

}

export default App
