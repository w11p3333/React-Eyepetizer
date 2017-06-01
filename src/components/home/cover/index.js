import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Container from './container'
import Layer from './layer'
import Title from './title/'

class Cover extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { cover, title, category, time } = this.props
    return (
      <Container cover={ cover } >
        <Layer className="layer" />
        <Title title={ title } category={ category } time={ time } />
      </Container>
    )
  }
}

Cover.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Cover
