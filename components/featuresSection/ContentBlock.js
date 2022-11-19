import React from 'react'
import PropTypes from 'prop-types'
const ContentBlock = ({ title, body }) => {
  return (
    <div className="w-[137px] sm:w-[368px]">
      <div className="text-sm sm:text-4xl font-[500] sm:pb-4">{title}</div>
      <div className="text-[10px] sm:text-2xl">{body}</div>
    </div>
  )
}

ContentBlock.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default ContentBlock
