import React from 'react'
import PropTypes from 'prop-types'

import Container from '@/components/common/container'
import Title from '@/components/detail/common/title'
import List from './list'
import Tag from './tag'
/**
 * 标签页
 */
const TagList = ({ tags }) => (
  <Container>
    <Title>热门标签</Title>
    <List>
      {
        tags.map(tag => 
          <Tag>{ tag.name }</Tag>
        )
      }
    </List>
  </Container>
)

TagList.PropTypes = {
  tags: PropTypes.array.isRequired
}

export default TagList
