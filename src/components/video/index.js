import React, { Component } from 'react'
import 'ASSET/scss/detail.scss'
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

  renderTag (titleVideo) {
    if (titleVideo.tags && titleVideo.tags.length > 0) {
      return (
        <div className="tag-list-container">
          <hander className="text-center">热门标签</hander>
          <div className="tag-list">
            {titleVideo.tags.map(tag =>
              <span className="tag">{tag.name}</span>
            )}
          </div>
          <div className="divider" />
        </div>
      )
    }
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
        </div>
    )
  }
}
