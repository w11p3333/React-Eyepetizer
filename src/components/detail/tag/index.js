import React from 'react'

import Container from '@/components/common/container'
import Title from '@/components/detail/common/title'
import List from '@/components/detail/tag/list'
import Text from '@/components/detail/tag/text'
/**
 * 标签页
 */
export default ({ tags }) => (
  <Container>
    <Title>热门标签</Title>
    <List>
      {
        tags.map(tag =>
          <Text>{tag.get('name')}</Text>
        )
      }
    </List>
  </Container>
)
