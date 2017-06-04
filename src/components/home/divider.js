import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.p`
  background-color: white;
  font-family: Lobster,cursive;
  font-size: 16px;
  color: black;
  line-height: 90px;
  text-align: center;
`

const Divider = ({ text }) => (
  <Container>
    { text }
  </Container>
)

Divider.propTypes = {
  text: PropTypes.string.isRequired
}

export default Divider
