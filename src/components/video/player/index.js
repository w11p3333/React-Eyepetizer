import React from 'react'

import Container from 'COMPONENT/video/player/container'
import Player from 'COMPONENT/common/player'

export default ({ url }) => (
  <Container>
    <Player 
      controls={ ['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen'] }
      url={ url } />
  </Container>
)
