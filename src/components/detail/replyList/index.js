import React from 'react'
import PropTypes from 'prop-types'

import Container from '@/components/common/container'
import Title from '@/components/detail/common/title'
import Section from './section'
import Avatar from './avatar'
import Article from './article'
import Time from './time'
import Hot from './hot'
import Text from './text'

const ReplyList = ({ replyList }) => (
  <Container>
    <Title>热门评论</Title>
      {
          replyList.map(reply =>
              <Section>
                <Avatar src={ reply.user.avatar } />
                <Article>
                  <Text>{ reply.user.nickname }</Text>
                  <Time>{ reply.time }</Time>
                  <Text>{ reply.message }</Text>
                  {
                      reply.hot &&
                      <Hot>- Hot -</Hot>
                  }
                </Article>
              </Section>
          )
      }
  </Container>
)

ReplyList.propTypes = {
  replyList: PropTypes.string.isRequired
}

export default ReplyList
