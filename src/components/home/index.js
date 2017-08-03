import React, { Component } from 'react'
import { Link } from 'react-router'
import { 
  is,
  fromJS
} from 'immutable'
import moment from 'moment'
import { mediaSize } from '@/style'

// import { isMobile } from '@/utils'
import Container from './container'
// banner
import Banner from './banner/container'
import BannerMenu from './banner/menu'
import BannerContent from './banner/content'
import BannerPlayer from './banner/player'
import BannerAlbum from './banner/album'

import Divider from './divider'

import Cover from './cover'
// footer
import Footer from './footer/container'
import FooterSlogan from './footer/slogan'
import FooterLogos from './footer/logos/container'
import LogosIcon from './footer/logos/icon'
import LogosLogo from './footer/logos/logo'
import LogosDownload from './footer/logos/download'
// modal
import Modal from '@/components/common/modal'

export default class Index extends Component {

  constructor (props) {
    super(props)
    const today = moment().format('MMM. D')
    this.state = {
      today: `- ${today} -`,
      platform: null,
      videoUrl: 'http://static.kaiyanapp.com/eyepetizer-web/homepage.mp4',
      isShowVideo: this.isShowVideo() // mount并不会触发resize
    }
  }

  componentWillMount () {
    this.props.fetchHomeFeed()
  }

  componentDidMount () {
    window.onresize = _ => {
      // 调试时响应式切换
        this.setState({
          isShowVideo: this.isShowVideo()
        })
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(nextProps), fromJS(this.props)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render () {
    const { homeFeed } = this.props
    const { platform, isShowVideo, videoUrl, today } = this.state
    console.log('render次数')
    return (
      <Container>

        <Banner>
          <BannerMenu clickHandler={ this.handlerPlatform } />
          <BannerContent clickHandler={ this.handlerPlatform } />
          {
            isShowVideo
            ? <BannerPlayer isPlay autoPlay muted url={ videoUrl } />
            : <BannerAlbum />
          }
        </Banner>

        <Divider text={ today } />
        {
          homeFeed &&
          homeFeed.map(item => (
            <Link to={ `/detail/${ item.id }` }>
              <Cover 
                cover={ item.coverForFeed } 
                title={ item.title }
                category={ item.category }
                time={ item.duration } />
            </Link>
          ))
        }

        <Footer>
          <FooterSlogan />

          <FooterLogos>
            <LogosIcon />
            <LogosLogo />
            <LogosDownload clickHandler={ this.handlerPlatform } />
          </FooterLogos>

        </Footer>

        <Modal platform={ platform } isShow={ !!platform } close={ this.handlerPlatform } />
      </Container>
    )
  }

  // 处理平台信息
  handlerPlatform = platform => {
    platform = platform || null
    switch (platform) {

      case 'BackEnd':
        window.open('http://open.eyepetizer.net/#!/landing')
        break

      case 'Weibo':
        window.open('//weibo.com/eyepetizer')
        break
      
      case 'Email':
        window.location.href = 'mailto:bd@eyepetizer.net'
        break

      default:
        this.setState({ platform }) // WeChat iOS Android ''
        break

    }
  }

  isShowVideo () {
    return !(document.body.clientWidth <= mediaSize)
  }

}
