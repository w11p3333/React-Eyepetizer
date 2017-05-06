import React from 'react'
import { Link } from 'react-router'
import 'ASSET/scss/footer.scss'
/**
 * 底部
 */
export default _ => (
    <footer className="footer">
      <Link to="/">
        <div className="bottom-logo" />
      </Link>
      <img src="//static.kaiyanapp.com/eyepetizer-web/assets/images/eyepetizer-wx-qr.9c58110c.png" className="qrcode" />
      <div className="qr-tips">长按二维码关注「开眼 Eyepetizer」微信公众号</div>
    </footer>
)

