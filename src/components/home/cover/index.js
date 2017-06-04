import React from 'react'
import PropTypes from 'prop-types'

import Container from './container'
import Layer from './layer'
import Title from './title/'

const Cover = ({ cover, title, category, time }) => (
  <Container cover={ cover } >
    <Layer className="layer" />
    <Title title={ title } category={ category } time={ time } />
  </Container>
)

Cover.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Cover
