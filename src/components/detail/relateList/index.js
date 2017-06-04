import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import Container from './container'
import Section from './section'
import Figure from './figure'
import Figcaption from './figcaption'
import Title from './title'
import Meta from '@/components/common/meta'

const RelateList = ({ videoList }) => (
  <Container>
    {
      videoList.map(video => (
        <Link to={ { pathname: `/detail/${video.id}` } }>
          <Section>
            <Figure src={ video.coverForDetail } />
            <Figcaption>
              <Title>{video.title}</Title>
              <Meta category={ video.category } time={ video.duration } /> 
            </Figcaption>
          </Section>
        </Link>
      ))
  } 
  </Container>
)

RelateList.propTypes = {
  videoList: PropTypes.object.isRequired
}

export default RelateList
