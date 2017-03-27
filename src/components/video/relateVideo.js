import React from 'react'
import { Link } from 'react-router'

const RelateVideo = ({ videoList }) => {
  return (
    <div className="relate-video-list">
    {
      videoList &&
      videoList.map(video =>
        <Link
          to={{
            pathname: `/video/${video.id}`
          }}>
          <div className="relate-video" data-vid={video.id}>
            <div className="relate-cover" style={video.cover} />
            <div className="meta">
              <div className="title">{video.title}</div>
              <div className="category">#{video.category} / {video.time}</div>
            </div>
          </div>
        </Link>
      )
    }
    </div>
  )
}

export default RelateVideo
