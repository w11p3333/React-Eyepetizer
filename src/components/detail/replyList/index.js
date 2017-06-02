import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Container from '@/components/common/container'
import Title from '@/components/detail/common/title'
import Section from './section'
import Avatar from './avatar'
import Article from './article'
import Time from './time'
import Hot from './hot'
import Text from './text'

class ReplyList extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { replyList } = this.props
    return (
      <Container>
        <Title>热门评论</Title>
          {
              replyList.map(reply =>
                  <Section>
                    <Avatar src={ reply.get('user').get('avatar') } />
                    <Article>
                      <Text>{ reply.get('user').get('nickname') }</Text>
                      <Time>{ reply.get('time') }</Time>
                      <Text>{ reply.get('message') }</Text>
                      {
                          reply.get('hot') &&
                          <Hot>- Hot -</Hot>
                      }
                    </Article>
                  </Section>
              )
          }
      </Container>
    )
  }
  
}

ReplyList.propTypes = {
  replyList: PropTypes.string.isRequired
}

export default ReplyList
