import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

export default ({ url }) => (
  <div className="player">
    {
      url &&
      <Video autoPlay loop muted
        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
        onCanPlayThrough={() => {
          // Do stuff
        }}>
        <source src={url} type="video/webm" />
      </Video>
    }
  </div>
)
