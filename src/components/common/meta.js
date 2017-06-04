import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { dateFormatter } from '@/utils'

const Container = styled.p`
  font-size: 12px;
  opacity: .85;
`

const Meta = ({ category, time }) => (
  <Container>
    # { category } / { dateFormatter(time * 1000) } 
  </Container>
)

Meta.propTypes = {
  category: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Meta
