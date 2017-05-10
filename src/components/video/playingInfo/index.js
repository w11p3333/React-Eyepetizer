import React from 'react'
import Divider from 'COMPONENT/video/common/divider'

import Meta from 'COMPONENT/video/playingInfo/meta'
import Title from 'COMPONENT/video/playingInfo/title'
import Category from 'COMPONENT/video/playingInfo/category'
import Desc from 'COMPONENT/video/playingInfo/desc'

export default ({ videoInfo }) => (
  <Meta>
    <Title>{videoInfo.get('title')}</Title>
    <Divider/>
    <Category>{videoInfo.get('category')} / {videoInfo.get('time')}</Category>
    <Desc>{videoInfo.get('description')}</Desc>
  </Meta>
)
