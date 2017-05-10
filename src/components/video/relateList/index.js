import React from 'react'
import { Link } from 'react-router'

import Container from 'COMPONENT/video/relateList/container'
import Info from 'COMPONENT/video/relateList/info'
import Cover from 'COMPONENT/video/relateList/cover'
import Meta from 'COMPONENT/video/relateList/meta'
import Title from 'COMPONENT/video/relateList/title'
import Category from 'COMPONENT/video/relateList/category'

export default ({ videoList }) => (
  <Container>
    {
      videoList.map(video => (
        <Link to={ { pathname: `/video/${video.get('id')}` } }>
          <Info data-vid={video.get('id')}>
            <Cover style={ { backgroundImage: `url(${video.get('coverForDetail')})` } } />
            <Meta>
              <Title>{video.get('title')}</Title>
              <Category>#{video.get('category')} / {video.get('time')}</Category>
            </Meta>
          </Info>
        </Link>
      ))
  } 
  </Container>
)
