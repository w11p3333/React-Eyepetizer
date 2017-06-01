import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  color: white;
`

const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
`

const Meta = styled.p`
  font-size: 14px;
  font-weight: 500;
`

export default _ => (
  <Container>
    <Title>微距摄影: 集体意识</Title>
    <Meta>#创意 / 1'58"</Meta>
  </Container>
)
