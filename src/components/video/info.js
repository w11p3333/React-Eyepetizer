import React from 'react'

export default ({ videoInfo }) => (
  <div className="video-meta">
    <h1>{videoInfo.get('title')}</h1>
    <div className="divider divider-short" />
    <p>{videoInfo.get('category')} / {videoInfo.get('time')}</p>
    <p className="desciption">{videoInfo.get('description')}</p>
  </div>
)
