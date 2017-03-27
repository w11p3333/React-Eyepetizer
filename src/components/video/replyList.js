import React from 'react'

const ReplyList = ({ replyList }) => (
  <div className="reply-list-container">
    <header className="text-center">热门评论</header>
    <div className="reply-list">
        {
            replyList && replyList.map(reply =>
                <div className="reply">
                  <div className="avatar" style={reply.cover} />
                  <div className="entity">
                    <p className="username" data-uid={reply.uid}>{reply.username}</p>
                    <p className="time">{reply.time}</p>
                    <p className="text">{reply.message}</p>
                    {
                        reply.hot &&
                        <div className="link-count-hot">- Hot -</div>
                    }
                  </div>
                </div>
            )
        }
    </div>
  </div>
)

export default ReplyList
