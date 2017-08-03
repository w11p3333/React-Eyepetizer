import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'

import Container from './container'
import Modal from './modal'
import QRCode from './qrcode'
import Text from './text'

injectGlobal`
  .modal--hide {
    display: none;
    opacity: 0;
  }
  .modal--show {
    display: block;
    opacity: 1;
  }
  .modal--fade-out {
    opacity: 0;
  }
  .modal--fade-in {
    opacity: 1;
  }
`

class MyModal extends PureComponent {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Container
        id="modal"
        className={ this.props.isShow ? 'modal--show' : 'modal--hide' } 
        onClick={ this.click }>
        { this.getContent(this.props.platform) }
      </Container>
    )
  }

  click = event => {
    if (event.target.id === 'modal') {
      this.props.close()
    }
  }

  getContent (platform) {
    const className = this.props.isShow ? 'modal--fade-in' : 'modal--fade-out'
    let imgPrefix = 'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/'
    let srcImg
    let textElement
    switch (platform) {
      case 'WeChat':
        srcImg = `${imgPrefix}landing_wechat_account.53f45180.jpg`
        textElement = <Text>
                        扫描二维码<br />
                        关注「开眼」微信公众号
                      </Text>
        break
      case 'iOS':
        srcImg = `${imgPrefix}landing_scan_qr_ios.e13aaceb.png`
        textElement = <Text>
                        扫描二维码<br />
                        下载iOS版开眼<br />
                        点击直接进入App Store
                      </Text>
        break
      case 'Android':
        srcImg = `${imgPrefix}landing_scan_qr_android.8915ce9c.png`
        textElement = <Text>
                        扫描二维码<br />
                        下载Android版开眼<br />
                        点击直接下载APK
                      </Text>
        break
    }
    return (
      <Modal className={ className }>
        <QRCode src={ srcImg } />
        { textElement }
      </Modal>
    )
  }

}

MyModal.PropTypes = {
  close: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
  platform: PropTypes.string.isRequired
}

export default MyModal
