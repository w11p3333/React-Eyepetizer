import React from 'react'

import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

export default ({ url, controls }) => (
    <Video 
      autoPlay 
      loop 
      muted
      controls={ controls }
      onCanPlayThrough={() => {
        // Do stuff
      }}>
      <source src={ url } type="video/webm" />
    </Video>
)
