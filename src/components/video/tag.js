import React from 'react'
/**
 * 标签页
 */
const Tag = ({ tags }) => {
  return (
    <div className="tag-list-container">
      <hander className="text-center">热门标签</hander>
      <div className="tag-list">
        {tags && tags.map(tag =>
          <span className="tag">{tag.name}</span>
        )}
      </div>
      <div className="divider" />
    </div>
  )
}

export default Tag
