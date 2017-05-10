import React from 'react'

import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

import Container from 'COMPONENT/video/player/container'

export default ({ url }) => (
  <Container>
    <Video 
      autoPlay 
      loop 
      muted
      controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
      onCanPlayThrough={() => {
        // Do stuff
      }}>
      <source src={url} type="video/webm" />
    </Video>
  </Container>
)
