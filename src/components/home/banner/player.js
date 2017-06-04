import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Player from '@/components/common/player'

const MyPlayer = styled(Player)`
  height: 100%;
  width: 100%;
  z-index: -100;
`

const BannerPlayer = ({ url }) => (
  <MyPlayer
    autoPlay
    loop
    muted
    url={ url } />
)

BannerPlayer.PropTypes = {
  url: PropTypes.string.isRequired
}

export default BannerPlayer
