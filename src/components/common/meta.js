import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import formatter from '@/utils/dateTimeFormatter'

const Container = styled.p`
  font-size: 12px;
  opacity: .85;
`

class Meta extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { category, time } = this.props
    return (
      <Container { ...this.props }># { category } / { formatter(time * 1000) } </Container>
    )
  }

}

Meta.propTypes = {
  category: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired

}

export default Meta
