import React, { Component } from 'react'
import 'ASSET/scss/detail.scss'
import Tag from './tag'
export default class Detail extends Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const ID = this.props.params.id
    if (!ID) this.context.router.push('/')
    else this.props.fetchVideoInfo(ID)
  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    console.log(this.props)
    const { videoInfo } = this.props
    return (
        <div className="video-info">
          <div className="meta-positioner">
            <div className="video-meta">
              <h1>{videoInfo.title}</h1>
              <div className="divider divider-short"></div>
              <p>{videoInfo.category} / {videoInfo.time}</p>
              <p className="desciption">{videoInfo.description}</p>
            </div>
          </div>
          <div className="divider" />
          <Tag tags={videoInfo.tags} />
        </div>
    )
  }
}
