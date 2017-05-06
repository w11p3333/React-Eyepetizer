import React from 'react'

export default ({ videoInfo }) => (
  <div className="video-meta">
     {
        videoInfo &&
        <div>
        <h1>{videoInfo.title}</h1>
        <div className="divider divider-short" />
        <p>{videoInfo.category} / {videoInfo.time}</p>
        <p className="desciption">{videoInfo.description}</p>
        </div>
     }
  </div>
)
