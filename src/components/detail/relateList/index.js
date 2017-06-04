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
        <Link to={ { pathname: `/detail/${video.get('id')}` } }>
          <Section>
            <Figure src={ video.get('coverForDetail') } />
            <Figcaption>
              <Title>{video.get('title')}</Title>
              <Meta category={ video.get('category') } time={ video.get('duration') } /> 
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
