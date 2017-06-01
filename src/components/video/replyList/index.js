import React from 'react'
import Container from 'COMPONENT/common/container'
import Header from 'COMPONENT/video/replyList/header'
import Info from 'COMPONENT/video/replyList/info'
import Avatar from 'COMPONENT/video/replyList/avatar'
import Entity from 'COMPONENT/video/replyList/entity'
import UserName from 'COMPONENT/video/replyList/name'
import Time from 'COMPONENT/video/replyList/time'
import Text from 'COMPONENT/video/replyList/text'
import Hot from 'COMPONENT/video/replyList/hot'

export default ({ replyList }) => (
  <Container>
    <Header>热门评论</Header>
      {
          replyList.map(reply =>
              <Info>
                <Avatar style={ { backgroundImage: `url(${reply.get('user').get('avatar')})` } } />
                <Entity>
                  <UserName data-uid={reply.get('user').get('uid')}>{reply.get('user').get('nickname')}</UserName>
                  <Time>{reply.get('time')}</Time>
                  <Text>{reply.get('message')}</Text>
                  {
                      reply.get('hot') &&
                      <Hot>- Hot -</Hot>
                  }
                </Entity>
              </Info>
          )
      }
  </Container>
)
