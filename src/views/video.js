import React from 'react'

const videoView = ({ children, params }) => {
  return (
    <div>
    <label>{ params.id }</label>
    { children }
    </div>
  )
}

export default videoView
