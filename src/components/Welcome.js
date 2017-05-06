import React from 'react'
import { Link } from 'react-router'
import logo from 'ASSET/img/logo.svg'
import 'ASSET/scss/welcome.scss'
/**
 * 本组件为欢迎页（首页）
 * 由于几乎没有交互逻辑
 * 因此可以不使用类的写法
 *
 * 实际上，ES6 的类经由 Babel 转码后
 * 其实还是返回一个类似的函数
 */

export default () => (
  <div className="welcome">
    <img src={logo} className="app-logo" alt="logo" />
    <h1>开眼 React.js App</h1>
    <h2>Links</h2>
    <ul>
      <Link
        to="/video/14416"
        role="li">
        视频详情
      </Link>
    </ul>
  </div>
)
