import React from 'react'
// import Count from 'COMPONENT/count'
// import { injectReducer } from 'REDUCER'
// import { connect } from 'react-redux'
// import createContainer from 'UTIL/createContainer'

// injectReducer('count', require('REDUCER/count').default)
// const CountRedux = connect(({ count }) => ({ count }), require('ACTION/count').default)(Count)

const countView = ({ children }) => (
  <div className="center-block">
    <div role="alert"
      className="alert alert-warning alert-dismissible">
      <button
        type="button"
        className="close"
        data-dismiss="alert">
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>该 Todo 示例无需 后端 RESTful API 支持</strong>
    </div>
    { children }
  </div>
)

export default countView
