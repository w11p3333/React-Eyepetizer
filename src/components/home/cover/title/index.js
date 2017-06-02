import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Container from './container'
import Title from './title'
import Meta from './meta'

class MyTitle extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { title, category, time } = this.props
    return (
      <Container>
        <Title>{ title }</Title>
        <Meta 
          category={ category } 
          time={ time } />
      </Container>
    )
  }
  
}

MyTitle.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default MyTitle
