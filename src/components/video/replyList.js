import React from 'react'

export default ({ replyList }) => (
  <div className="reply-list-container">
    <header className="text-center">热门评论</header>
    <div className="reply-list">
        {
            replyList.map(reply =>
                <div className="reply">
                  <div className="avatar" style={ { backgroundImage: `url(${reply.get('user').get('avatar')})` } } />
                  <div className="entity">
                    <p className="username" data-uid={reply.get('user').get('uid')}>{reply.get('user').get('nickname')}</p>
                    <p className="time">{reply.get('time')}</p>
                    <p className="text">{reply.get('message')}</p>
                    {
                        reply.get('hot') &&
                        <div className="link-count-hot">- Hot -</div>
                    }
                  </div>
                </div>
            )
        }
    </div>
  </div>
)
