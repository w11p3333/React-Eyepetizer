import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Container from '@/components/common/container'
import Title from '@/components/detail/common/title'
import Section from '@/components/detail/replyList/section'
import Avatar from '@/components/detail/replyList/avatar'
import Article from '@/components/detail/replyList/article'
import Name from '@/components/detail/replyList/name'
import Time from '@/components/detail/replyList/time'
import Reply from '@/components/detail/replyList/reply'
import Hot from '@/components/detail/replyList/hot'

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
                    <Avatar style={ { backgroundImage: `url(${reply.get('user').get('avatar')})` } } />
                    <Article>
                      <Name data-uid={reply.get('user').get('uid')}>{reply.get('user').get('nickname')}</Name>
                      <Time>{reply.get('time')}</Time>
                      <Reply>{reply.get('message')}</Reply>
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
