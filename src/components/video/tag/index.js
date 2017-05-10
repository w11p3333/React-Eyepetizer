import React from 'react'

import Container from 'COMPONENT/video/common/container'
import Divider from 'COMPONENT/video/common/divider'
import Title from 'COMPONENT/video/tag/title'
import List from 'COMPONENT/video/tag/list'
import Text from 'COMPONENT/video/tag/text'
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
    <Divider />
  </Container>
)
