import React from 'react'
import styled from 'styled-components'

import Cover from './cover'
import Title from './title'

const Container = styled.section`
  background-image: url(http://img.kaiyanapp.com/293582ee76f34309e6115ecccb3e8cf1.jpeg?imageMogr2/quality/60);
  background-position: 50%;
  background-size: cover;
  color: white;

  &:hover .cover {
    background: transparent;
  }

  cursor: pointer;
  height: 450px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

export default _ => (
  <Container>
    <Cover className="cover" />
    <Title />
  </Container>
)
