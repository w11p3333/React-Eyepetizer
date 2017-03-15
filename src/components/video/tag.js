import React from 'react'
/**
 * 标签页
 */
const Tag = ({ tags }) => {
  if (tags && tags.length > 0) {
    return (
      <div className="tag-list-container">
        <hander className="text-center">热门标签</hander>
        <div className="tag-list">
          {tags.map(tag =>
            <span className="tag">{tag.name}</span>
          )}
        </div>
        <div className="divider" />
      </div>
    )
  }
}

export default Tag
