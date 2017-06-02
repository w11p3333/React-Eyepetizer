import React from 'react'

import Container from '@/components/common/container'
import Title from '@/components/detail/common/title'
import List from './list'
import Tag from './tag'
/**
 * 标签页
 */
export default ({ tags }) => (
  <Container>
    <Title>热门标签</Title>
    <List>
      {
        tags.map(tag => 
          <Tag>{ tag.get('name') }</Tag>
        )
      }
    </List>
  </Container>
)
