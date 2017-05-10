import React from 'react'
import { Link } from 'react-router'

import BottomLogo from 'COMPONENT/video/footer/bottomLogo'
import QRCode from 'COMPONENT/video/footer/qrcode'
import QRTip from 'COMPONENT/video/footer/qrtip'
import Container from 'COMPONENT/video/footer/container'

/**
 * 底部
 */
export default _ => (
    <Container>
       <Link to="/">
        <BottomLogo />
      </Link>
      <QRCode src="//static.kaiyanapp.com/eyepetizer-web/assets/images/eyepetizer-wx-qr.9c58110c.png" />
       <QRTip>长按二维码关注「开眼 Eyepetizer」微信公众号</QRTip> 
    </Container>
)

