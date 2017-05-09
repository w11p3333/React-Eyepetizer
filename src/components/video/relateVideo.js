import React from 'react'
import { Link } from 'react-router'

export default ({ videoList }) => (
  <div className="relate-video-list">
    {
      videoList.map(video => (
        <Link to={ { pathname: `/video/${video.get('id')}` } }>
          <div className="relate-video" data-vid={video.get('id')}>
            <div className="relate-cover" style={ { backgroundImage: `url(${video.get('coverForDetail')})` } } />
            <div className="meta">
              <div className="title">{video.get('title')}</div>
              <div className="category">#{video.get('category')} / {video.get('time')}</div>
            </div>
          </div>
        </Link>
      ))
  } 
  </div>
)
