import React from 'react'
import { Link } from 'react-router'

import Logo from '@/components/detail/footer/logo'
import QRCode from '@/components/detail/footer/qrcode'
import QRTip from '@/components/detail/footer/qrtip'
import Container from '@/components/detail/footer/container'

/**
 * 底部
 */
export default _ => (
    <Container>
       <Link to="/">
        <Logo />
      </Link>
      <QRCode src="http://static.kaiyanapp.com/eyepetizer-web/assets/images/eyepetizer-wx-qr.9c58110c.png" />
       <QRTip>长按二维码关注「开眼 Eyepetizer」微信公众号</QRTip> 
    </Container>
)

